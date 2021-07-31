<template>
  <div >
    <p class="text-center font-bold text-lg text-green-500">Suspect ID {{suspect.id}}</p>
    <div class="md:grid grid-cols-2 gap-10 mx-auto mt-5">
      <p class="mt-2 text-center">Full Name: <span class="text-green-500">{{suspect.name}}</span></p>
      <p class="mt-2 text-center">Date of bitrh: <span class="text-green-500">{{suspect.DOB}}</span></p>
      <p class="mt-2 text-center">Gender: <span class="text-green-500">{{suspect.gender}}</span></p>
      <p class="mt-2 text-center">IdentificationType: <span class="text-green-500">{{suspect.identificationType}}</span></p>
      <p class="mt-2 text-center">Identification Number: <span class="text-green-500">{{suspect.identificationNumber}}</span></p>
    </div>

    <div class="w-full text-center my-5" v-if="crimes.length<1">
      <button  class="text-white p-4 bg-green-500 rounded mb-5" @click="showCrimes">Show Crimes</button>
    </div>

    <div v-if="crimes.length > 0">
        <div>
          <p class="mt-8 text-center">Crimes : <span class="font-bold text-green-500">{{crimes.length? crimes.length: 'None yet' }}</span></p>
        </div>
        
        <div class="md:grid grid-cols-2 xl:grid-cols-3 gap-5 mt-2">
          <crime-thumbnail-card v-for="crime in crimes" :key="crime.id" :crime="crime"/>
        </div>
      </div>
  </div>
</template>
<script>
import * as Cookies from 'js-cookie'
export default {
  data(){
    return ({
      suspect: '',
      crimes: []
    })
  },
  methods: {
   async showCrimes(){
     try {
       const cr = await this.$axios.get(`/crime?suspectId=${this.$route.params.id}`, {
        headers: {
          authorization: `Bearer ${Cookies.get('token')}`
        }
      });
      this.crimes = cr.data
     } catch (error) {
       console.log(error);
     }
   }
  },
  async mounted(){
    try {
      const res = await this.$axios.get(`/suspect/${this.$route.params.id}`, {
        headers: {
          authorization: `Bearer ${Cookies.get('token')}`
        }
      });
      this.suspect = res.data
    } catch (error) {
     console.log(error.response) 
    }
  }
}
</script>