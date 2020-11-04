<template>
  <SampleList v-if="loggedIn"/>
  <div v-else class="container">
    <h1 class="title">EVAdb - Variant database</h1>
    <p>Please login to continue.</p>
  </div>
</template>

<script>
// @ is an alias to /src
import SampleList from "@/components/SampleList.vue"

export default {
  name: 'Home',
  components: {
    SampleList
  },
  computed: {
    sampleId () {
      return this.$route.params.id
    },
    loggedIn () {
      return this.$store.state.user.loggedIn
    }
  }
}
</script>
