<template>
<form class="grid grid-cols-2 gap-4">
  <div class="border-r border-b p-2" v-for="optionBlock in schema" :key="optionBlock.title">
    <div class="text-gray-600 font-semibold">
      {{ optionBlock.title }}
    </div>
    <div class="text-gray-600 text-xs">
      {{ optionBlock.description }}
    </div>
    <div class="my-2 flex items-center" v-for="entry in optionBlock.entries" :key="entry.id">
      <div class="w-2/3 pr-4">
        <label>{{ entry.label }}</label>
        <div class="text-xs text-gray-600">
          {{ entry.description }}
        </div>
      </div>
      <div class="w-1/3">
        <component :is="entry.input.type" v-bind="entry.input.props" v-model="data[entry.id]"/>
      </div>
    </div>
  </div>
  <!--
  <div class="col-span-2 px-12">
    <button class="font-semibold text-orange-500 border border-orange-500 p-1 w-full rounded-full hover:bg-orange-500 hover:text-white" type="button" @click="submit">
      Add Search
    </button>
  </div>
  -->
</form>
</template>

<script>
// @ is an alias to /src
import InputInteger from '../FormsUI/InputInteger.vue'
import RadioInput from '../FormsUI/RadioInput.vue'
import Toggle from '../FormsUI/Toggle.vue'
import MultiSelect from '../FormsUI/MultiSelect.vue'

export default {
  name: 'GenericSearch',
  components: { InputInteger, RadioInput, Toggle, MultiSelect },
  props: ['setData', 'schema'],
  data: function() {
    const data = Object.fromEntries(this.schema.reduce((acc, cur) => acc.concat(cur.entries), []).map(e => [e.id, e.default]))
    return {
      data: data,
      isSet: false,
    }
  },
  watch: {
    data: function() {
      // breaks a cycle of endless updates if setData is used to set the mask...
      if (this.isSet) {
        this.isSet = false
      } else {
        this.submit()
      }
    },
    setData: function(newData) {
      this.data = newData
      this.isSet = true
    }
  },
  methods: {
    submit() {
      const data = JSON.parse(JSON.stringify(this.data))
      this.$emit("submit", data)
    }
  },
  mounted() {
    this.submit()
  },
}
</script>

<style>
</style>
