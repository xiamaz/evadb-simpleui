<template>
<div class="">
  <label class="flex items-center" v-for="option in options" :key="option" :class="{'text-gray-600': option !== value}">
    <input class="form-radio text-orange-600" type="radio" :value="option" :checked="value == option" @change="onChange"/>
    <span class="ml-2">
      {{ option }}
    </span>
  </label>
</div>
</template>

<script>
// @ is an alias to /src

export default {
  name: 'RadioInput',
  props: ['options', 'value'],
  methods: {
    onChange(e) {
      this.$emit("input", e.target.value)
    }
  },
}
</script>

<style>
</style>
