<template>
<div v-if="isLoaded">Sample</div>
<progress v-else class="progress is-small is-primary" max="100">15%</progress>
</template>

<script>
// @ is an alias to /src

export default {
  name: 'Sample',
  data: function() {
    return {
      isLoaded: false,
    }
  },
  components: {
  },
  computed: {
  }
}
</script>
