<template>
<div class="">
  <label class="flex items-center" v-for="option in options" :key="option.value" :class="{'text-gray-600': option.value !== value}">
    <input class="form-radio text-orange-600" type="radio" :value="option.value" :checked="value == option.value" @change="onChange"/>
    <span class="ml-2">
      {{ option.label }}
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
