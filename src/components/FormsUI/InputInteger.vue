<template>
<span class="inline-flex flex-stretch border rounded focus-within:shadow-lg" :class="{'border-red-500': invalid}">
  <input
    @blur="validate"
    @focus="$event.target.select()"
    @keydown="filter"
    @change="onChange"
    class="appearance-none p-1 rounded w-10 outline-none text-right"
    type="number"
    :value="value"/>
  <span class="text-gray-500 bg-gray-200 px-2 text-md border-l border-gray-200 rounded-r pt-1">
    {{ rlabel }}
  </span>
</span>
</template>

<script>
// @ is an alias to /src

export default {
  name: 'InputInteger',
  props: ["value", "rlabel", "minValue", "maxValue"],
  data: function() {
    return {
      invalid: false,
    }
  },
  methods: {
    onChange(e) {
      this.$emit('input', e.target.value)
    },
    filter(e) {
      const keyCode = e.code
      if (keyCode && (keyCode.startsWith("Digit") || keyCode == "Backspace")) {
        return true
      } else {
        event.preventDefault()
      }
    },
    validate() {
      const intValue = parseInt(this.value)
      var newValue
      if (intValue < this.minValue) {
        newValue = this.minValue
        this.invalid = true
      } else if (intValue > this.maxValue) {
        newValue = this.maxValue
        this.invalid = true
      } else {
        this.invalid = false
        newValue = this.value
      }

      this.$emit("input", newValue)
    }
  },
}
</script>

<style>
input[type=number]::-webkit-inner-spin-button,
input[type=number]::-webkit-outer-spin-button {
  -webkit-appearance: none;
  margin: 0;
}
input[type=number] {
  -moz-appearance: textfield;
}
</style>
