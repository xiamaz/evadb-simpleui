<template>
<div class="p-2 col-span-2">
  <ul class="flex border-b">
    <li v-for="(entry, i) in entries" :key="i" class="mr-1" :class="{'-mb-px': i === activeIndex}">
      <a
        class="bg-white inline-block py-2 px-4 text-gray-400 text-sm"
        :class="{
          'border-t': i === activeIndex,
          'border-r': i === activeIndex,
          'border-l': i === activeIndex,
          'text-orange-700': i === activeIndex,
          'text-orange-500': entry.enabled && (i !== activeIndex),
          'hover:text-orange-800': entry.enabled && (i !== activeIndex),
          'cursor-default': !entry.enabled,
        }"
        @click="entry.enabled && (activeIndex = i)"
        href="#">
        {{ entry.title }}
      </a>
    </li>
  </ul>
  <div class="border-l p-2">
  <GenericSearch :schema="entries[activeIndex].schema" :set-data="setData" @submit="$emit('submit', {type: entries[activeIndex].title, data: $event})"/>
  <!--
    <component :set-data="setData" :is="entries[activeIndex].component" @submit="$emit('submit', {type: entries[activeIndex].title, data: $event})"/>
    -->
  </div>
</div>
</template>

<script>
// @ is an alias to /src
import GenericSearch from './SearchMasks/GenericSearch.vue'
import ADSearchSchema from '../schema/ADSearch.js'
import ARSearchSchema from '../schema/ARSearch.js'

export default {
  name: 'VariantSearchPanel',
  props: ['setMask'],
  components: { GenericSearch },
  watch: {
    setMask(newMask) {
      const { type } = newMask
      const found = this.entries.findIndex(e => e.title == type)
      if (found >= 0) {
        this.activeIndex = found
      }
    },
  },
  computed: {
    setData() {
      return this.setMask.data
    }
  },
  data: function() {
    return {
      entries: [
        {
          title: "AD Variants",
          enabled: true,
          schema: ADSearchSchema,
        },
        {
          title: "AR Variants",
          enabled: true,
          schema: ARSearchSchema,
        },
        {
          title: "Deno-novo trio",
          enabled: false,
        },
        {
          title: "Disease Panels",
          enabled: false,
        },
      ],
      activeIndex: 0,
    }
  }
}
</script>

<style>
</style>
