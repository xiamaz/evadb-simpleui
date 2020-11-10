<template>
<div class="container mx-auto">
  <div class="text-4xl my-8">
    Submitted queries
  </div>
  <div class="">
    <table class="table-auto">
      <thead>
        <tr>
          <th class="px-4 py-2">
            ID
          </th>
          <th class="px-4 py-2">
            Name
          </th>
          <th class="px-4 py-2">
            Patient ID
          </th>
          <th class="px-4 py-2">
            Number of subqueries
          </th>
          <th class="px-4 py-2">
            Results exist
          </th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="query in queries" :key="query.id">
          <td class="border px-4 py-2" @click="query.resultsExist == 1 && $router.push('/searches/' + query.id)">
            {{ query.id }}
          </td>
          <td class="border px-4 py-2">
            {{ query.data.name }}
          </td>
          <td class="border px-4 py-2">
            {{ query.data.patientId }}
          </td>
          <td class="border px-4 py-2">
            {{ query.data.data.length }}
          </td>
          <td class="border px-4 py-2">
            {{ query.resultsExist }}
          </td>
        </tr>
      </tbody>
    </table>
  </div>
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
import Modal from '../components/Modal.vue'

export default {
  name: 'Searches',
  components: { Modal },
  data() {
    return {
      queries: [],
      error: "",
      timerVar: "",
    }
  },
  methods: {
    async loadQuery() {
      const result = await this.$http.allQuery()
      if (result.error) {
        this.error = ""
      } else {
        this.queries = result.data
      }
    },
  },
  mounted: function() {
    this.loadQuery()
    this.timerVar = setInterval(() => {this.loadQuery()}, 10000)
  },
  beforeDestroy: function() {
    if (this.timerVar) {
      clearInterval(this.timerVar)
    }
  }
}
</script>

<style>
</style>
