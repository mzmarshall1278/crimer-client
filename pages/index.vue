<template>
  <div>
    <p class="text-center font-bold text-lg text-green-500 mb-4">Latest Crimes</p>

    <div class="md:grid grid-cols-2 xl:grid-cols-3 gap-5">
      <crime-thumbnail-card v-for="crime in crimes" :key="crime.id" :crime="crime"/>
      </div>
      <div class="w-full flex justify-center">
        <nuxt-link to="/crime"><button class="my-10 bg-white text-green-500 py-1 px-4 rounded hover:bg-green-500 hover:text-white">Show all</button></nuxt-link>
      </div>
    </div>
</template>

<script>
import * as Cookies from 'js-cookie';
export default {

  data(){
    return {
  
    }
  },
  computed: {
    crimes(){
      return this.$store.state.crime.crimes;
    }
  },
  async mounted(){
    try {
     const res = await this.$axios.get('/crime/', {
       headers: {
         authorization: `Bearer ${Cookies.get('token')}`
       }
     });
     
     this.$store.commit('crime/setCrimes', res.data);
    } catch (error) {
      console.log(error);
    }
  }
  }
</script>
