<template>
<div class="container">
  <h1 class="title">All samples</h1>
  <div v-if="isLoaded">
    <div v-if="error" class="has-text-danger">{{ error }}</div>
    <div v-else>
      <ul id="sampleCards">
        <li v-for="sample in samples" :key="sample.n">
          <SampleCard sample="sample"/>
        </li>
      </ul>
    </div>
  </div>
  <progress v-else class="progress is-small is-primary" max="100">15%</progress>
</div>
</template>

<script>
import SampleCard from "@/components/SampleCard.vue"

async function getSamples(instance) {
  const query = {
    "datebegin":       "",
    "dateend":         "",
    "s.name":          "",
    "foreignid":       "",
    "pedigree":        "",
    "ds.iddisease":    "",
    "lstatus":         "",
    "s.idcooperation": "",
    "idproject":       "",
    "nottoseq":        "0"
  }
  var data
  try {
    const res = await instance.get("/samples", { params: query })
    data = res.data
  } catch (error) {
    data = {"error": error.toString(), "data": null}
  }
  return data
}

export default {
  name: 'SampleList',
  components: {
    SampleCard
  },
  data: function() {
    return {
      error: "",
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
  mounted: async function() {
    const result = await getSamples(this.$http)
    if (!result["error"]) {
      this.$store.commit("setSamples", result["data"])
    } else {
      this.data.error = result["error"]
    }
  }
}
</script>
