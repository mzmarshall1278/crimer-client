<template>
  <div >
    <p class="text-center font-bold text-lg text-green-500">Crime ID {{crime.id}}</p>
    <div class="md:grid grid-cols-2 gap-10 mx-auto mt-5">
      <p class="mt-2">Type: <span class="text-green-500">{{crime.type}}</span></p>
      <p class="mt-2">Date: <span class="text-green-500">{{crime.date}}</span></p>
      <p class="mt-2">Time: <span class="text-green-500">{{crime.time}}</span></p>
      <p class="mt-2">Evidence: <span class="text-green-500">{{crime.evidence}}</span></p>
    </div>
    <div>
        <div>
          <p class="mt-8 text-center">Suspects : <span>{{crime.suspects.length}}</span></p>
        </div>
        
        <div class="md:grid grid-cols-2 gap-10 mx-auto mt-5">
          <suspect-thumbnail-card v-for="suspect in crime.suspects" :key="suspect.name" :suspect="suspect"/>
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
    crime(){
      return this.$store.state.crime.crimes.find(crime => crime.id == this.$route.params.id)
    }
  }
}
</script>