<template>
<div class="shadow rounded p-0">
  <header class="text-sm border-b flex flex-row content-center bg-gray-100">
    <div class="p-1 mr-12">
      <div class="text-gray-500 text-xs">
        Date
      </div>
      <time datetime="sample.Entered">{{ sample.Entered }}</time>
    </div>
    <router-link :to="'/project/' + sample['Project']" class="p-1 flex-shrink-0 text-md text-gray-700">
      <div class="text-gray-500 text-xs">
        Project
      </div>
      <div class="font-bold">
        {{ sample.Project }}
      </div>
    </router-link>
    <StatusIndicators :labels="['finished', 'in-progress', 'pending']" :colors="['green', 'yellow', 'gray']" :active="status" @clicked="status = $event"/>
  </header>
  <div class="flex flex-row items-stretch">
      <div class="flex flex-col flex-shrink-0 items-center border-r mr-4 mb-0 p-2 w-32">
        <table class="table-fixed text-xs w-full mb-3 mt-1">
          <tr>
            <th class="w-1/5 text-right pr-1">
              ID
            </th>
            <td class="text-left pl-2">
              {{ sample["Interal ID"] }}
            </td>
          </tr>
          <tr>
            <th class=" text-right pr-1">
              FID
            </th>
            <td class="text-left pl-2 truncate">
              {{ sample["Foreign ID"] }}
            </td>
          </tr>
          <tr>
            <th class="text-right pr-1">
              PID
            </th>
            <td class="text-left pl-2 truncate">
              {{ sample.Pedigree }}
            </td>
          </tr>
        </table>
        <figure class="mx-auto">
          <PedigreeIcon :sex="sample.Sex" :affected="sample.Affected"/>
        </figure>
      </div>
      <div class="flex flex-col grid-cols-3 grid-rows-2 text-sm w-full mr-4 mt-2">
        <div class="p-1 col-span-2 mb-1">
            <div class="text-gray-500 mb-1">
              Disease
            </div>
          <div class="border rounded-md p-3 text-gray-700">
            {{ sample.Disease }}
          </div>
        </div>
        <div class="col-span-3 p-1">
          <div class="text-gray-500">
            Comment
          </div>
          <div class="rounded-md pl-3 pt-3 mb-3 text-gray-700">
            {{ sample.Comment }}
          </div>
        </div>
      </div>
  </div>
  <footer class="text-sm border-t flex text-center justify-between">
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
import PedigreeIcon from './PedigreeIcon.vue'
import StatusIndicators from './StatusIndicatorButtons.vue'

export default {
  props: ["sample"],
  data: function() {
    return {
      'status': 'pending',
    }
  },
  components: {
    PedigreeIcon,
    StatusIndicators
  },
}
</script>
