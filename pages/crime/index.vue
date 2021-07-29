<template>
  <div>
    <p class="text-center font-bold text-lg text-green-500 mb-4">All Crimes</p>

    <div class="md:grid grid-cols-2 xl:grid-cols-3 gap-5">
      <div class="shadow shadow-xl my-4 py-6 px-10 rounded border">
        <nuxt-link to="/crime/new-crime"><div class="text-green-500 font-bold text-3xl text-center md:pt-20 py-28">Add New</div></nuxt-link>
      </div>
      <crime-thumbnail-card v-for="crime in crimes" :key="crime.id" :crime="crime"/>
      </div>
    </div>
</template>
<script>
export default {
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
