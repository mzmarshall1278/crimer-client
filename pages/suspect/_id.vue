<template>
  <div >
    <p class="text-center font-bold text-lg text-green-500">Suspect ID {{suspect.id}}</p>
    <div class="md:grid grid-cols-2 gap-10 mx-auto mt-5">
      <p class="mt-2">Full Name: <span class="text-green-500">{{suspect.fullName}}</span></p>
      <p class="mt-2">Date of bitrh: <span class="text-green-500">{{suspect.dob}}</span></p>
      <p class="mt-2">Gender: <span class="text-green-500">{{suspect.gender}}</span></p>
      <p class="mt-2">IdentificationType: <span class="text-green-500">{{suspect.identificationType}}</span></p>
      <p class="mt-2">Identification Number: <span class="text-green-500">{{suspect.IdentificationNumber}}</span></p>
    </div>
    <div>
        <div>
          <p class="mt-8 text-center">Crimes : <span class="font-bold text-green-500">{{suspect.crimes.length? suspect.crimes.length: 'None yet' }}</span></p>
        </div>
        
        <div class="md:grid grid-cols-2 xl:grid-cols-3 gap-5 mt-2">
          <crime-thumbnail-card v-for="crime in suspect.crimes" :key="crime.id" :crime="crime"/>
        </div>
      </div>
  </div>
</template>
<script>
export default {
  data(){
    return ({

    })
  },
  computed: {
    suspect(){
      return this.$store.state.suspect.suspects.find(suspect =>suspect.id == this.$route.params.id);
    }
  }
}
</script>