<template>
  <div>
    <p class="text-center font-bold text-lg text-green-500 mb-4">All Suspects</p>

    <div class="md:grid grid-cols-2 xl:grid-cols-3 gap-5">
      <suspect-thumbnail-card v-for="suspect in suspects" :key="suspect.id" :suspect="suspect"/>
      </div>
    </div>
</template>
<script>
import suspectThumbnailCard from '~/components/suspect-thumbnail-card.vue';
export default {
  components: { suspectThumbnailCard },
  data(){
    return {
    }
  },
  computed: {
    suspects(){
      return this.$store.state.suspect.suspects;
    }
  }
  }
</script>
