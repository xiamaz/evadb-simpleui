<template>
<div class="card">
  <div class="card-content">
    <div class="media">
      <div class="media-left">
        <figure class="image is-64x64">
          <PedigreeIcon :sex="sample.Sex" :affected="sample.Affected"/>
          <figcaption>Pedigree {{ sample.Pedigree }}</figcaption>
        </figure>
      </div>
      <div class="media-content">
        <div class="content">
          <p>
            <strong>ID {{ sample["Interal ID"] }}</strong> <small>Foreign ID {{ sample["Foreign ID"] }}</small>
          </p>
        </div>
        <div class="columns">
          <div class="column">
            <div class="has-text-weight-bold">
              Disease
            </div>
            {{ sample.Disease }}
            <div class="has-text-weight-bold">
              Comment
            </div>
          {{ sample.Comment }}
          </div>
          <div class="column is-one-quarter">
            <div class="has-text-weight-bold">
              Project
            </div>
            {{ sample.Project }}
            <div class="has-text-weight-bold">
              Date
            </div>
            <time datetime="sample.Entered">{{ sample.Entered }}</time>
          </div>
        </div>
      </div>
    </div>
  </div>
  <footer class="card-footer">
   <p class="card-footer-item">
    <span>Show sample</span>
   </p>
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
