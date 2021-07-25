<template>
  <div>
    <p class="text-center mb-4">All Crimes</p>

    <div class="md:grid grid-cols-2 xl:grid-cols-3 gap-5">
      <crime-thumbnail-card v-for="crime in crimes" :key="crime.id" :crime="crime"/>
      </div>
    </div>
</template>
<script>
import crimeThumbnailCard from '~/components/crime-thumbnail-card.vue'
export default {
  components: { crimeThumbnailCard },
  data(){
    return {
    }
  },
  computed: {
    crimes(){
      return this.$store.state.crime.crimes;
    }
  }
  }
</script>
