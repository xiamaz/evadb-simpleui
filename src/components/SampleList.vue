<template>
<div class="container">
  <h1 class="title">All samples</h1>
  <div v-if="isLoaded">
    <div v-if="error" class="has-text-danger">{{ error }}</div>
    <div v-else>
      <div class="field has-addons">
        <div class="control has-icons-left is-expanded">
          <input class="input" v-model="queryInput" placeholder="Search Samples"/>
          <span class="icon is-small is-left">
            <i class="fas fa-search"></i>
          </span>
        </div>
        <div class="control">
          <button class="button" :class="{'is-info': filterVisible}" title="Filter options" @click="toggleFilter">
            <span class="icon">
              <i class="fas fa-filter"></i>
            </span>
          </button>
        </div>
      </div>
      <div v-show="filterVisible" class="panel">
        <div class="message is-info">
          <div class="message-header">
            Filter Options
          </div>
          <div class="message-body">
            <div class="field has-addons">
              <p class="control">
                <button class="button">Date</button>
              </p>
              <p class="control">
                <button class="button">Date</button>
              </p>
              <p class="control">
                <button class="button">Date</button>
              </p>
            </div>
          </div>
        </div>
      </div>
      <div class="container">
        <ul id="sampleCards" class="content">
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
