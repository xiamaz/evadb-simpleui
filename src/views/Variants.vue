<template>
  <div class="container mx-auto mt-4">
    <div class="text-xl">
      Variant Search
    </div>
    <div class="grid grid-cols-3 p-2">
      <div class="p-2">
        <PatientSelector :patient-id="patientId"/>
        <div class="text-2xl mt-6 mb-8">
          <div class="flex justify-between items-center border-b border-gray-500 pb-1">
            <input class="appearance-none placeholder-gray-600 outline-none w-full" v-model="searchName" type="text" placeholder="Query Name">
            <span class="text-gray-400"><i class="fas fa-edit"></i></span>
          </div>
        </div>
        <div v-if="searches.length > 0">
          <ul class="space-y-2">
            <li class="bg-gray-200 rounded-md" v-for="(search, i) in searches" :key="i">
              <div class="flex items-stretch">
                <div class="flex items-center justify-center bg-gray-400 p-2 px-3 rounded-l-md cursor-pointer text-white" :class="{'bg-gray-700': i === activeIndex}" @click="activeIndex = i">
                  <span class="">
                    <i class="fas fa-align-justify"></i>
                  </span>
                </div>
                <div class="w-full py-3 px-4">
                  <div class="flex justify-between items-center border-b border-gray-500 pb-1">
                    <input class="appearance-none bg-gray-200 placeholder-gray-600 outline-none w-full" v-model="search.name" type="text" :placeholder="search.type">
                    <span class="text-gray-500"><i class="fas fa-edit"></i></span>
                  </div>
                  <div class="mt-2 text-sm font-semibold text-gray-600" v-show="search.name">
                    {{ search.type }}
                  </div>
                </div>
                <div class="flex items-center justify-center border-l-2 border-white p-2 px-3 rounded-r-md cursor-pointer text-gray-500 hover:bg-gray-500 hover:text-white" @click="deleteSearch(i)">
                  <span class="">
                    <i class="fas fa-times"></i>
                  </span>
                </div>
              </div>
            </li>
          </ul>
        </div>
        <div class="bg-gray-200 text-center text-gray-600 mt-4 py-2 mx-auto w-24 rounded-full hover:bg-gray-500 hover:text-white cursor-pointer" @click="addSearch">
          <i class="fas fa-plus"></i>
        </div>
        <div class="border border-orange-500 text-center text-orange-500 mt-8 py-1 rounded-full cursor-pointer hover:bg-orange-500 hover:text-white" @click="submit">
          Run query
        </div>
      </div>
      <VariantSearchPanel :set-mask="searches[activeIndex]" @submit="updateSearch(activeIndex, $event)"/>
    </div>
    <Modal v-if="submitSuccess"
      title="Search queued"
      description="A query might take some time."
      lbutton="Back to Search"
      rbutton="Results Overview"
      @lclick="submitSuccess = false"
      @rclick="$router.push('/searches')"
      />
    <Modal v-if="errorMessage"
      title="Error"
      :description="errorMessage"
      hcolor="red"
      faicon="fa-exclamation-triangle"
      rbutton="Back to Search"
      @rclick="errorMessage = ''"
      />
  </div>
</template>

<script>
// @ is an alias to /src
import VariantSearchPanel from '@/components/VariantSearchPanel.vue'
import PatientSelector from '../components/PatientSelector.vue'
import Modal from '../components/Modal.vue'

export default {
  name: 'Variants',
  props: ["patientId"],
  components: {
    VariantSearchPanel,
    PatientSelector,
    Modal,
  },
  data: function() {
    return {
      searchName: "",
      searchId: this.patientId,
      searches: [{}],
      activeIndex: 0,
      submitSuccess: false,
      errorMessage: "",
    }
  },
  methods: {
    updateSearch(index, newSearchData) {
      const modified = this.searches[index]
      modified.type = newSearchData.type
      modified.data = newSearchData.data
      this.$set(this.searches, index, modified)
    },
    addSearch() {
      const copy = JSON.parse(JSON.stringify(this.searches[this.activeIndex]))
      copy.name = ""
      const newLength = this.searches.push(copy)
      this.activeIndex = newLength - 1
    },
    deleteSearch(index) {
      this.searches.splice(index, 1)
      if (this.activeIndex == index) {
        if (index > 0) {
          this.activeIndex = index - 1
        } else {
          this.activeIndex = 0
        }
      } else if (this.activeIndex > index) {
        this.activeIndex -= 1
      }
    },
    submit() {
      // const data = {
      //   name: this.searchName,
      //   data: this.searches,
      // }
      // this.errorMessage = "Test"
      this.submitSuccess = true
    },
  }
}
</script>

<style>
</style>
