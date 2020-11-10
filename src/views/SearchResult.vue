<template>
<div class="">
  <div class="text-3xl mt-8 ml-8 mb-4">
    {{ data.info.name ? `${data.info.name} - ${searchId}` : searchId }}
  </div>
  <div class="p-2 col-span-2">
    <ul class="flex border-b">
      <li v-for="(_, i) in tableColnames" :key="i" class="mr-1" :class="{'-mb-px': i === activeIndex}">
        <a
          class="bg-white inline-block py-2 px-4 text-gray-400 text-sm"
          :class="{
            'border-t': i === activeIndex,
            'border-r': i === activeIndex,
            'border-l': i === activeIndex,
            'text-orange-700': i === activeIndex,
            'text-orange-500': i !== activeIndex,
            'hover:text-orange-800': i !== activeIndex,
          }"
          @click="activeIndex = i"
          href="#">
          {{ tabNames[i] }}
        </a>
      </li>
    </ul>
  </div>
  <Table v-if="tableColnames.length > 0" :data="tableData[activeIndex]" :colnames="tableColnames[activeIndex]"/>
  <Modal v-if="error"
    title="Error"
    :description="error"
    hcolor="red"
    faicon="fa-exclamation-triangle"
    rbutton="Dismiss"
    @rclick="error = ''"
    />
</div>
</template>

<script>
// @ is an alias to /src
import Table from '../components/Table.vue'
import Modal from '../components/Modal.vue'

export default {
  name: 'SearchResult',
  components: { Modal, Table },
  props: ["searchId"],
  data() {
    return {
      data: {data: [], info: {}},
      error: "",
      activeIndex: 0,
    }
  },
  computed: {
    tabNames() {
      const info = this.data.info
      if (!info.data) {
        return []
      }
      const names = info.data.map(d => d.name ? `${d.name} (${d.type})` : d.type)
      return names
    },
    tableColnames() {
      const allColnames = this.data.data.map(rdata => {
        if (rdata.data[0]) {
          return Object.keys(rdata.data[0])
        }
        return []
      })
      return allColnames
    },
    tableData() {
      const allData = this.data.data.map(rdata => {
        return rdata.data.map(o => Object.values(o))
      })
      return allData
    }
  },
  async mounted() {
    const result = await this.$http.fetchQuery(this.searchId)
    if (result.error) {
      this.error = result.error
    } else {
      this.data = result.data
    }
  }
}
</script>

<style>
</style>
