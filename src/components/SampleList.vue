<template>
<div class="container mx-auto">
  <div v-if="isLoaded">
    <div v-if="error" class="has-text-danger">{{ error }}</div>
    <div v-else>
      <div class="">
        <div class="relative flex w-full flex-wrap items-stretch mt-6">
          <span class="absolute leading-snug h-full z-10 w-8 pl-4 py-3 text-gray-500"><i class="fas fa-search"></i></span>
          <input class="relative block w-full rounded-xl pl-12 p-3 shadow placeholder-gray-700 focus:outline-none focus:shadow-xl" v-model="queryInput" placeholder="Search Samples"/>
          <span class="absolute right-0 pr-4 my-3 pl-4 cursor-pointer border-l border-gray-400 border-solid" :class="{'text-black': filterVisible, 'text-gray-400': !filterVisible}" @click="toggleFilter">
            <i class="fas fa-filter"></i>
          </span>
        </div>
      </div>
      <div v-show="filterVisible" class="block w-full shadow-xl bg-gray-100 p-4 rounded-xl">
        <div class="font-bold border-b pb-1 mx-4">
          Filter Options
        </div>
        <div class="flex mt-2 mx-4">
          <div class="border rounded-md">
            <div class="flex flex-col p-3">
              Placeholder
            </div>
          </div>
        </div>
      </div>
      <div class="mt-4">
        <ul id="sampleCards" class="">
          <li v-for="sample in samples" :key="sample.n" class="mb-5">
            <SampleCard :sample="sample"/>
          </li>
        </ul>
        <div v-show="queryIsDirty" class="spinner-box is-overlay">
          <div class="spinner-inner is-center">
            <button class="spinner button is-loading is-large">Loading</button>
          </div>
        </div>
      </div>
    </div>
  </div>
  <progress v-else class="progress is-small is-primary" max="100">15%</progress>
</div>
</template>

<script>
import SampleCard from "@/components/SampleCard.vue"
import debounce from "lodash/debounce"

export default {
  name: 'SampleList',
  components: {
    SampleCard
  },
  data: function() {
    return {
      error: "",
      filters: {
        sex: "male",
      },
      filterVisible: false,
      queryInput: "",
      queryIsDirty: false,
      isCalculating: false,
    }
  },
  computed: {
    samples () {
      return this.$store.state.samples["data"]
    },
    isLoaded() {
      return this.$store.state.samples["loaded"]
    }
  },
  watch: {
    queryInput: function() {
      this.queryIsDirty = true
      this.filterSamples()
    }
  },
  methods: {
    toggleFilter() {
      this.filterVisible = !this.filterVisible
    },
    filterSamples: debounce(function () {
      this.isCalculating = true
      this.isCalculating = false
      this.queryIsDirty = false
    }, 500)
  },
  mounted: async function() {
    const result = await this.$http.getSamples()
    if (!result["error"]) {
      this.$store.commit("setSamples", result["data"])
    } else {
      this.data.error = result["error"]
    }
  }
}
</script>

<style>
.spinner {
  border-color: transparent;
  background-color: transparent;
}

.spinner-inner {
}

.spinner-box {
  background-color: rgba(255, 255, 255, 0.5);
  display: flex;
  justify-content: center;
  align-items: flex-start;
}
</style>
