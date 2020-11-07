<template>
<svg xmlns="http://www.w3.org/2000/svg"
  :width="64"
  :height="64"
  role="presentation" >
  <title>{{ sex }} {{ affected === "1" ? "affected" : "healthy" }}</title>
  <circle v-if="sex === 'female'" cx="32" cy="32" r="26" stroke="black" stroke-width="1" :fill="fillColor" />
  <rect v-else-if="sex === 'male'" width="46" height="46" x="9" y="9" style="stroke:black;stroke-width:1" :fill="fillColor" />
  <rect v-else width="40" height="40" x="12" y="12" transform="rotate(45 32 32)" style="stroke:black;stroke-width:1" :fill="fillColor" />
</svg>
</template>

<script>
export default {
  props: ["sex", "affected"],
  computed: {
    fillColor() {
      if (this.affected === "1") {
        return "black"
      }
      return "white"
    }
  }
}
</script>
