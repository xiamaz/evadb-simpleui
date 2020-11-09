<template>
<div class="flex items-center justify-center fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 z-50">
  <div class="bg-white rounded p-4 max-w-xl w-full flex flex-row">
    <div class="flex justify-center items-center rounded-full h-16 w-16 text-xl flex-shrink-0 mx-2 mt-1" :class="[`text-${hcolor}-600`, `bg-${hcolor}-200`]">
      <i class="fas" :class="faicon"></i>
    </div>
    <div class="mx-4 w-full">
      <div class="font-semibold text-xl mb-4 text-gray-700">
        {{ title }}
      </div>
      <div class="my-4">
        {{ description }}
      </div>
      <div class="flex flex-row-reverse w-full justify-between text-sm text-gray-700">
        <button v-if="rbutton" class="border border-invisible text-white rounded-lg py-2 px-6 hover:bg-white" :class="[`bg-${hcolor}-600`, `border-${hcolor}-600`, `hover:text-${hcolor}-600`]" type="button" @click="$emit('rclick')">
          {{ rbutton }}
        </button>
        <button v-if="lbutton" class="border rounded-md py-2 px-6" type="button" @click="$emit('lclick')">
          {{ lbutton }}
        </button>
      </div>
    </div>
  </div>
</div>
</template>

<script>
// @ is an alias to /src

export default {
  name: 'Modal',
  props: {
    title: String,
    description: String,
    lbutton: String,
    rbutton: String,
    hcolor: {
      default: 'orange'
    },
    faicon: {
      default: 'fa-shipping-fast',
    },
  },
  methods: {
  },
}
</script>

<style>
</style>
