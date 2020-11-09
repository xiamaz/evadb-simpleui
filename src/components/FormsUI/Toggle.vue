<template>
<div>
  <label class="relative inline-block w-16 mr-2 align-middle select-none">
    <input class="toggle-checkbox absolute block w-8 h-8 rounded-full bg-white border-4 appearance-none cursor-pointer" type="checkbox" :true-value="trueValue" :false-value="falseValue" :checked="value == trueValue" @change="onChange">
    <span class="toggle-label block overflow-hidden h-8 rounded-full bg-gray-300 cursor-pointer"></span>
  </label>
</div>
</template>

<script>
// @ is an alias to /src
// Based on: https://tailwindcomponents.com/component/toggle-switch

export default {
  name: 'Toggle',
  props: ['value', 'true-value', 'false-value'],
  methods: {
    onChange() {
      const newValue = this.value === this.trueValue ? this.falseValue : this.trueValue
      this.$emit('input', newValue)
    }
  }
}
</script>

<style>
.toggle-checkbox:checked {
  @apply right-0 border-orange-400;
}
.toggle-checkbox:checked + .toggle-label {
  @apply bg-orange-400;
}
</style>
