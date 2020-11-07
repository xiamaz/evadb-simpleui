<template>
  <table class="table-auto text-xs">
    <thead>
      <tr>
        <th class="px-4 py-2" v-for="colname in colnames" :key="colname">{{ colname }}</th>
      </tr>
    </thead>
    <tbody v-if="data.length > 0">
      <tr :class="{'bg-gray-200': (i % 2) === 0}" v-for="(row, i) in data" :key="i">
        <td class="border px-4 py-2" v-for="(entry, j) in row" :key="j">{{ entry }}</td>
      </tr>
    </tbody>
    <tbody v-else>
      <tr>
        <td :colspan="colnames.length" class="text-center">
          No data available.
        </td>
      </tr>
    </tbody>
  </table>
</template>

<script>
// @ is an alias to /src

export default {
  name: 'Table',
  props: ["data", "colnames"],
}
</script>

<style>
</style>
