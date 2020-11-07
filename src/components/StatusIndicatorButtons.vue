<template>
<div class="w-full flex flex-row-reverse">
  <div
    class="px-2 w-40 py-1 pt-4 border-b-4 border-transparent font-bold"
    v-for="(label, i) in labels" :key="label"
    @click="$emit('clicked', label)"
    :class="[{
      'rounded-tr': i === 0,
      [`border-${colors[i]}-600`]: label === active,
      [`text-${colors[i]}-700`]: label === active,
      [`bg-${colors[i]}-200`]: label === active,
      },
      `bg-${colors[i]}-100`,
      `hover:border-${colors[i]}-600`,
      `hover:bg-${colors[i]}-200`,
      `text-${colors[i]}-400`,
      `hover:text-${colors[i]}-700`,
    ]"
    >
    <div class="text-md text-center">
      {{ label }}
    </div>
  </div>
</div>
</template>

<script>
// @ is an alias to /src

export default {
  name: 'StatusIndicators',
  props: ["active", "labels", "colors"],
}
</script>

<style>
</style>
