<template>
  <div >
    <p class="text-center font-bold text-lg text-green-500">Crime ID {{crime.id}}</p>
    <div class="md:grid grid-cols-2 gap-10 mx-auto mt-5">
      <p class="mt-2 text-center">Type: <span class="text-green-500">{{crime.type}}</span></p>
      <p class="mt-2 text-center">Date: <span class="text-green-500">{{crime.date}}</span></p>
      <p class="mt-2 text-center">Time: <span class="text-green-500">{{crime.time}}</span></p>
      <p class="mt-2 text-center">Evidence: <span class="text-green-500">{{crime.evidence}}</span></p>
    </div>
    <div v-if="crime.suspects">
        <div>
          <p class="mt-8 text-center">Suspects : <span class="font-bold text-green-500">{{crime.suspects.length}}</span></p>
        </div>
        
        <div class="md:grid grid-cols-2 xl:grid-cols-3 gap-5 mt-2">
          <suspect-thumbnail-card v-for="suspect in crime.suspects" :key="suspect.id" :suspect="suspect"/>
        </div>
      </div>
  </div>
</template>
<script>
import * as Cookies from 'js-cookie';
export default {
  data(){
    return ({
      crime : ''
    })
  },
  computed: {
    // crime(){
    //   return this.$store.state.crime.crimes.find(crime => crime.id == this.$route.params.id);

    // }
  },
  async mounted(){
    try {
      const res = await this.$axios.get(`/crime/single/${this.$route.params.id}`, {
        headers: {
          authorization: `Bearer ${Cookies.get('token')}`
        }
      });
      console.log(res.data);
      this.crime = res.data
    } catch (error) {
     console.log(error.response) 
    }
  }
}
</script>