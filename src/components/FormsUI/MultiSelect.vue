<template>
<div class="border-t border-b py-1">
  <label class="flex items-center" v-for="option in options" :key="option.value">
    <input class="form-checkbox text-orange-600" type="checkbox" :value="option.value" :checked="value.includes(option.value)" @change="onChange"/>
    <span class="ml-2">{{ option.label }}</span>
  </label>
</div>
</template>

<script>
// @ is an alias to /src

export default {
  name: 'MultiSelect',
  props: ["value", "options"],
  methods: {
    onChange(e) {
      var value = [...this.value]
      if (e.target.checked) {
        value.push(e.target.value)
      } else {
        value = value.filter(v => v !== e.target.value)
      }
      this.$emit("input", value)
    }
  }
}
</script>

<style>
</style>
