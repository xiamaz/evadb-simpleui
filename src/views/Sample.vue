<template>
<div v-if="isLoaded" class="relative">
  <div v-if="error" class="absolute m-auto inset-0" role="alert">
    <div class="flex justify-between bg-red-500 text-white font-bold rounded-t px-4 py-2">
      Error
      <span class="cursor-pointer" @click="error=''">
        <i class="fas fa-times"></i>
      </span>
    </div>
    <div class="border border-t-0 border-red-400 rounded-b bg-red-100 px-4 py-3 text-red-700">
    {{ error }}
    </div>
  </div>
  <div class="container mx-auto pt-5">
    <header class="mb-4">
      <div class="text-3xl mb-2">
        <span class="text-gray-700 text-2xl">Patient ID</span> {{ sample['id'] }}
      </div>
      <div class="border-b flex flex-row pb-1">
        <div class="text-xl mr-8">
          <span class="text-gray-700 text-base">Pedigree-ID</span> {{ sample['pedigree_id'] }}
        </div>
        <div class="text-xl mr-8">
          <span class="text-gray-700 text-base">Sex</span> {{ sample['sex'] }}
        </div>
      </div>
    </header>
    <div class="my-4 bg-gray-100 p-4">
      <div class="text-gray-500 mb-2">
        Disease
      </div>
      <div class="">
        {{ sample.disease }}
      </div>
    </div>
    <div class="my-4 bg-gray-100 p-4">
      <div class="text-gray-500 mb-2">
        HPO Terms
      </div>
      <Table :colnames="hpo.colnames" :data="hpo.data"/>
    </div>
    <div class="my-4 bg-gray-100 p-4">
      <div class="text-gray-500 mb-2">
        Samples
      </div>
      {{ sample.samples }}
    </div>
    <div class="my-4 bg-gray-100 p-4">
      <div class="text-gray-500 mb-2">
        Pedigree
      </div>
    </div>
    {{ sample }}
  </div>
</div>
<div v-else class="mx-auto pt-24 text-center text-xl animate-pulse">Loading...</div>
</template>

<script>
// @ is an alias to /src
import Table from "@/components/Table.vue"

export default {
  name: 'Sample',
  props: ["patientId"],
  data: function() {
    return {
      isLoaded: false,
      sample: null,
      error: "",
    }
  },
  components: {
    Table,
  },
  computed: {
    hpo() {
      const symptoms = this.sample.symptoms
      const data = symptoms.map(s => [s.hpo, s.active, s.date])
      return {
        colnames: ["HPO ID", "Active", "Entered"],
        data: data
      }
    }
  },
  async created() {
    const response = await this.$http.getPatient(this.patientId)
    this.error = response.error
    this.sample = response.data
    this.isLoaded = true
  },
}
</script>
