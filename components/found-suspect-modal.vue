<template>
  <div v-if="show">
    <div class="bg-white fixed inset-0 w-8/12 overflow-x-hidden z-50 mx-auto my-12" >
    <div class="mt-5">
      <h3 class="text-center text-lg text-green-500 font-semibold">Suspect Found </h3>
    </div>
<!-- ******************************************************************************************* -->
    <div class="w-3/5 mx-auto my-16">
      <p class="my-8 mx-auto text-center"> Full Name: <span class="text-green-500">{{suspect.name}}</span></p>
      <p class="my-8 mx-auto text-center"> DOB: <span class="text-green-500">{{suspect.DOB}}</span></p>
      <p class="my-8 mx-auto text-center"> Gender: <span class="text-green-500">{{suspect.gender}}</span></p>
      <p class="my-8 mx-auto text-center"> ID Type: <span class="text-green-500">{{suspect.identificationType}}</span></p>
      <p class="my-8 mx-auto text-center"> ID Number: <span class="text-green-500">{{suspect.identificationNumber}}</span></p>
    </div>
  
    <div class="px-3 mb-8 md:mb-0 w-8/12 mx-auto">
        <button class="bg-green-500 text-white rounded w-full py-2" @click="addSuspect">Add Suspect</button>
      </div>
    </div>

    <div class="opacity-70 fixed inset-0 z-40 bg-green-900" @click="closeModal"></div>
  </div>
</template>

<script>
export default {
  props: {
    suspect: {
      type: Object,
      required: true
    }
  },
  data(){
    return {
      show: true,
    }
  },
  methods:{
    closeModal(){
      this.$emit('close')
    },
    addSuspect(){
      this.$store.commit('suspect/setAddSuspects', this.suspect);
      this.show = false;
       
    },
  }
}
</script>