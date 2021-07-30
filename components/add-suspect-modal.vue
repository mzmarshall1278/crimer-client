<template>
  <div v-if="show">
    <div class="bg-white fixed inset-0 w-11/12  fixed overflow-x-hidden z-50 mx-auto my-12" >
    <div class="mt-5">
      <h3 class="text-center text-lg text-green-500 font-semibold">Add Suspect </h3>
    </div>
<!-- ******************************************************************************************* -->

  <form class=" md:w-4/5 mx-auto  px-10 py-8 mb-10" @submit.prevent="addSuspect">

      <div class="px-3 mb-8 md:mb-0">
        <label class="block uppercase text-sm text-green-500 mb-2" for="grid-first-name">
          Full Name
        </label>
        <input required class="appearance-none block w-full text-green-700 border border-green-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" id="grid-first-name" type="text" placeholder="Full Name" v-model="Sform.fullName">
        <!-- <p class="text-red-500 text-xs italic">Please fill out this field.</p> -->
      </div>

      <div class="md:flex md:flex-wrap mt-5">
        <div class="px-3 mb-6 md:mb-0 md:w-1/2">
        <label class="block uppercase text-sm text-green-500 mb-2" for="grid-id-number">
          Identification Type
        </label>
        <div class="relative">
        <select required class="block appearance-none w-full bg-white border border-green-500 text-green-500 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-green-500 " id="grid-state" v-model="Sform.idType"> 
          <option value="BVN">BVN</option>
          <option value="NIN">NIN</option>
        </select>
        <div class="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-green-500">
          <svg class="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/></svg>
        </div>
        </div>
        <!-- <p class="text-red-500 text-xs italic">Please fill out this field.</p> -->
      </div>

      <div class="px-3 mb-6 md:mb-0 md:w-1/2">
        <label class="block uppercase text-sm text-green-500 mb-2" for="grid-id-number">
          Identification Number
        </label>
        <input required class="appearance-none block w-full text-green-700 border border-green-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" id="grid-id-number" type="text" minlength="11" maxlength="11" placeholder="Identification Number(NIN/BVN)" v-model="Sform.idNumber">
        <!-- <p class="text-red-500 text-xs italic">Please fill out this field.</p> -->
      </div>
      </div>

      <div class="md:flex md:flex-wrap mt-5">
        <div class="px-3 mb-6 md:mb-0 md:w-1/2">
        <label class="block uppercase text-sm text-green-500 mb-2" for="grid-id-number">
          Gender
        </label>
        <div class="relative">
        <select required class="block appearance-none w-full bg-white border border-green-500 text-green-500 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-green-500 " id="grid-state" v-model="Sform.gender"> 
          <option value="BVN">Male</option>
          <option value="NIN">Female</option>
          <option value="NIN">Others</option>
        </select>
        <div class="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-green-500">
          <svg class="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/></svg>
        </div>
        </div>
        <!-- <p class="text-red-500 text-xs italic">Please fill out this field.</p> -->
      </div>

      <div class="px-3 mb-6 md:mb-0 md:w-1/2">
        <label class="block uppercase text-sm text-green-500 mb-2" for="grid-id-number">
          Date of birth
        </label>
        <input required class="appearance-none block w-full text-green-700 border border-green-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" id="grid-id-number" type="date" placeholder="Identification Number(NIN/BVN)" v-model="Sform.dob">
        <!-- <p class="text-red-500 text-xs italic">Please fill out this field.</p> -->
      </div>
      </div>

      <div class="px-3 mb-8 md:mb-0">
        <label class="block uppercase text-sm text-green-500 mb-2" for="grid-first-name">
          Address
        </label>
        <input required class="appearance-none block w-full text-green-700 border border-green-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" id="grid-first-name" type="address" placeholder="Address" v-model="Sform.address">
        <!-- <p class="text-red-500 text-xs italic">Please fill out this field.</p> -->
      </div>

      <div class="text-red-500">
        
      </div>
      <div class="px-3 mb-8 md:mb-0">
        <button class="bg-green-500 text-white rounded w-full py-2" type="submit">Add Suspect</button>
      </div>
      
    </form>
    </div>

    <div class="opacity-70 fixed inset-0 z-40 bg-green-900" @click="closeModal"></div>
  </div>
</template>

<script>
export default {
  props: {
    iDType: {
      type: Object,
      required: true
    },
    iDNumber: {
      type: Object,
      required: true
    }
  },
  data(){
    return {
      show: true,
      Sform: {
        fullName: '',
        idType: '',
        idNumber: '',
        gender: '',
        dob: '',
        address: ''
      }
    }
  },
  methods:{
    closeModal(){
      this.$emit('close')
    },
    addSuspect(){
      // bubble the data and the event to the parent
      //save suspect to the server first
      this.$axios.post('suspect/new', )




      this.show = false;
       
    },
  }
}
</script>