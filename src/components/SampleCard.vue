<template>
<div class="shadow rounded p-0">
  <header class="text-sm border-b p-1 flex flex-row justify-between bg-gray-100 pl-2">
    <router-link :to="'/project/' + sample['Project']" class="w-full text-center text-xs text-gray-700 font-bold">
      Project {{ sample.Project }}
    </router-link>
  </header>
  <div class="flex flex-row items-stretch">
      <div class="flex flex-col items-center border-r mr-4 mb-0 p-2">
        <figure class="mx-auto">
          <PedigreeIcon :sex="sample.Sex" :affected="sample.Affected"/>
        </figure>
        <table class="text-xs text-right w-24">
          <tr>
            <th class="pr-1">
              ID
            </th>
            <td class="text-left pl-2">
              {{ sample["Interal ID"] }}
            </td>
          </tr>
          <tr>
            <th class="pr-1">
              FID
            </th>
            <td class="text-left pl-2">
              {{ sample["Foreign ID"] }}
            </td>
          </tr>
          <tr>
            <th class="pr-1">
              PID
            </th>
            <td class="text-left pl-2">
              {{ sample.Pedigree }}
            </td>
          </tr>
        </table>
      </div>
      <div class="grid grid-cols-3 grid-rows-3 text-sm w-full mr-4 mt-2">
        <div class="p-1 col-span-2">
            <div class="text-gray-500">
              Disease
            </div>
            {{ sample.Disease }}
        </div>
        <div class="p-1">
          <div class="text-gray-500">
            Date
          </div>
          <time datetime="sample.Entered">{{ sample.Entered }}</time>
        </div>
        <div class="col-span-3 p-1 row-span-2">
          <div class="text-gray-500 mb-1">
            Comment
          </div>
          <div class="bg-gray-200 rounded-md p-3 text-gray-700">
            {{ sample.Comment }}
          </div>
        </div>
      </div>
  </div>
  <footer class="text-sm border-t flex text-center justify-between">
    <div class="border-r px-2 py-1 bg-yellow-300">
      <div class="text-xs">
        Status
      </div>
      <div class="text-md">
        pending
      </div>
    </div>
    <div class="py-3 cursor-pointer w-full hover:bg-gray-100">
      Filter variants
    </div>
    <router-link :to="'/sample/' + sample['Interal ID']" class="w-16 border-l flex flex-col justify-center content-center hover:bg-gray-100">
      <div>
        <i class="fas fa-external-link-alt"></i>
      </div>
    </router-link>
  </footer>
</div>
</template>
<script>
import PedigreeIcon from '@/components/PedigreeIcon.vue'

export default {
  props: ["sample"],
  components: {
    PedigreeIcon
  },
}
</script>
