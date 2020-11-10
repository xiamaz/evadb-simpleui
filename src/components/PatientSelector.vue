<template>
<div class="flex items-center pl-3">
  <span class="text-gray-700 text-sm pr-2">
    Patient ID
  </span>
  <span class="rounded-full inline-flex flex-stretch border">
    <input class="outline-none cursor-default rounded-l-full p-2 pl-6" :value="patientId" readonly="true">
    <a class="rounded-r-full p-2 px-4 text-gray-700 border-l bg-gray-100 text-sm hover:bg-gray-300 cursor-pointer" @click="$router.push('/')">
      <i class="fas fa-exchange-alt"></i>
    </a>
  </span>
</div>
</template>

<script>
// @ is an alias to /src

export default {
  name: 'PatientSelector',
  props: ['patientId'],
}
</script>

<style>
</style>
