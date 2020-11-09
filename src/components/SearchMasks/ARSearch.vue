<template>
  <div>
  AR Here
  </div>
</template>

<script>
// @ is an alias to /src

export default {
  name: 'ARSearch',
  props: ['setData'],
  data: function() {
    // const data = Object.fromEntries(ADSearchSchema.reduce((acc, cur) => acc.concat(cur.entries), []).map(e => [e.id, e.default]))
    return {
      data: {},
    }
  },
  watch: {
    data: function() {
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
