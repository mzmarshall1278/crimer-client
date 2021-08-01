<template>
  <div class="">
    <p class="text-center text-green-500 font-bold text-lg">Add New Crime Entry</p>
    <form class="mt-5 md:w-4/5 mx-auto border px-10 py-8 mb-10 shadow-xl" @submit.prevent="addEntry">

      <div class="md:flex md:flex-wrap mt-5">
        <div class="px-3 mb-6 md:mb-0 md:w-1/2">
        <label class="block uppercase text-sm text-green-500 mb-2" for="grid-id-crimeType">
          Crime Type
        </label>
        <div class="relative">
        <select class="block appearance-none w-full bg-white border border-green-500 text-green-500 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-green-500 " id="grid-id-crimeType" required v-model="form.type">
          <!-- <option value="" selected>--select--</option> -->
          <option :value="type.value" v-for="type in crimeTypes" :key="type.value">{{type.name}}</option>
        </select>
        <div class="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-green-500">
          <svg class="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/></svg>
        </div>
        </div>
        <!-- <p class="text-red-500 text-xs italic">Please fill out this field.</p> -->
      </div>

      <div class="px-3 mb-6 md:mb-0 md:w-1/2">
        <label class="block uppercase text-sm text-green-500 mb-2" for="grid-id-evidence">
          Evidence Type
        </label>  
        <div class="relative">
        <select class="block appearance-none w-full bg-white border border-green-500 text-green-500 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-green-500 " id="grid-id-evidence" required v-model="form.evidence">
          <!-- <option value="" selected>--select--</option> -->
          <option value="Media Footage (video/audio)">Media Footage (video/audio)</option>
          <option value="Red_Handed">Red Handed</option>
          <option value="Witness">Witness</option>
        </select>
        <div class="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-green-500">
          <svg class="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/></svg>
        </div>
        </div>
      </div>
      </div>

      <div class="md:flex md:flex-wrap mt-5">
        <div class="px-3 mb-6 md:mb-0 md:w-1/2">
        <label class="block uppercase text-sm text-green-500 mb-2" for="grid-id-time">
          Time
        </label>
        <input required class="appearance-none block w-full text-green-700 border border-green-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" id="grid-id-time" type="time" placeholder="Identification Number(NIN/BVN)" v-model="form.time">
        <!-- <p class="text-red-500 text-xs italic">Please fill out this field.</p> -->
      </div>

      <div class="px-3 mb-6 md:mb-0 md:w-1/2">
        <label class="block uppercase text-sm text-green-500 mb-2" for="grid-id-date">
          Date
        </label>
        <input required class="appearance-none block w-full text-green-700 border border-green-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" id="grid-id-date" type="date" placeholder="Identification Number(NIN/BVN)" v-model="form.date">
        <!-- <p class="text-red-500 text-xs italic">Please fill out this field.</p> -->
      </div>
      </div>

      <div class="px-3 mb-8 md:mb-0">
        <label class="block uppercase text-sm text-green-500 mb-2" for="grid-location">
          location
        </label>
        <input required class="appearance-none block w-full text-green-700 border border-green-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" id="grid-location" type="address" placeholder="Location" v-model="form.location">
        <!-- <p class="text-red-500 text-xs italic">Please fill out this field.</p> -->
      </div>

      <div class="px-3 mb-8 md:mb-0" v-if="suspects.length">
        <p class="text-green-500 font-semibold mb-2">Suspects:</p>
        <div class="flex justify-between md:mx-10 text-green-500" v-for="(suspect, key) in suspects" :key="key">
          <p class="sm:pt-4">{{suspect.name}}</p> <button @click="remove($event, suspect.id)" class="bg-green-500 text-white rounded py-2 my-2 px-4">remove</button>
        </div>
        
      </div>


      <div class="md:flex md:flex-wrap mt-5 bg-green-50 py-4 px-10 mb-4">
        <div class="px-3 mb-6 md:mb-0 md:w-3/6">
        <label class="block uppercase text-sm text-green-500 mb-2" for="grid-search">
          Search Suspect
        </label>
        <input class="appearance-none block w-full text-green-700 border border-green-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" id="grid-search" type="address" minlength="11" maxlength="11" placeholder="Enter BVN or NIN" v-model="searchSuspect">
        <!-- <p class="text-red-500 text-xs italic">Please fill out this field.</p> -->
      </div>

      <div class="px-3 mb-6 md:mb-0 md:w-2/6">
      <label class="block uppercase text-sm text-green-500 mb-2" for="grid-id-id-type">
          ID Type
        </label>

        <div class="relative">
        <select class="block appearance-none w-full bg-white border border-green-500 text-green-500 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-green-500 " id="grid-id-id-type" v-model="iDType">
          <option value="BVN">BVN</option>
          <option value="NIN">NIN</option>
        </select>
        <div class="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-green-500">
          <svg class="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/></svg>
        </div>
        </div>
      </div>

      <div class="px-3 mb-6 md:mb-0 md:w-1/6">
      <label class="block uppercase text-sm text-green-500 mb-2" for="grid-id-button">
          &nbsp;
        </label>
        <button id="button" class="bg-green-500 text-white rounded py-2 px-4" @click="searchSuspectInfo">search</button>
      </div>

      </div>
      <!--  -->
      <div class="px-3 mb-8 md:mb-0">
        <button class="bg-green-500 text-white rounded w-full py-2" type="submit">Add Crime</button>
      </div>
      
    </form>
  <add-suspect-modal v-if="showAddModal" @close="showAddModal=false" />
  <found-suspect-modal v-if="showFoundModal" @close="showFoundModal = false" :suspect="foundUser"/>
  </div>
</template>

<script>
import * as Cookies from 'js-cookie';
export default {
  data(){
    return {
        showAddModal: false,
        showFoundModal: false,
        crimeTypes: [
        {name:'Adultery/Fornication', value: 'Adultery/Fornication'},
        {name:'Blasphemy', value: 'Blasphemy'},
        {name:'Burglary', value: 'Burglary'},
        {name:'Drug Abuse', value: 'Drug_Abuse'},
        {name:'Fraud', value: 'Fraud'},
        {name:'Illegal Business', value: 'Illegal_BUSINESS'},
        {name:'Murder', value: 'Murder'},
        {name:'Rape', value: 'Rape'},
        {name:'Robery', value: 'Robery'},
        {name:'Theft', value: 'Theft'},
        {name:'Multiple Crimes', value: 'Multiple_Crimes'},
        {name:'Others', value: 'Others'},
      ],
      searchSuspect: '',
      iDType: '',
      form: {
        type: '',
        evidence: '',
        time: '',
        date: '',
        location: '',
      },
      foundUser: ''
    }
  },
  methods: {
    async addEntry(){
      try {
        this.$store.commit('setLoading', true);
        this.$store.commit('setError', []);
        const res = await this.$axios.post('crime/addcrime',
        {...this.form, suspects: this.suspects }, {
        headers: {
          Authorization: `Bearer ${Cookies.get('token')}`
        }
      });
        this.$store.commit('setLoading', false);
        this.$store.commit('setSuccess', 'Crime saved successfully.');
      return this.$router.push('/');
      } catch (error) {
        // console.log(error.response.data.message);
        this.$store.commit('setLoading', false);
        this.$store.commit('setError', error.response.data.message);
      }
    },

    async searchSuspectInfo(e){
      e.preventDefault();
        try {
          this.$store.commit('setLoading', true);
          this.$store.commit('setError', []);
      const found = await this.$axios.get(`/suspect/allsuspects?${this.iDType}=${this.searchSuspect}`, {
      headers: {
        Authorization: `Bearer ${Cookies.get('token')}`
      }
      });
      if(found.data.length > 0){
      this.foundUser = found.data[0];
      this.showFoundModal = true;
      this.showAddModal = false;
    }else if(found.data.length == 0){
      this.showFoundModal = false;
      this.showAddModal = true;
    }
        this.$store.commit('setLoading', false);
        // this.$store.commit('setSuccess', ' successful.');
   } catch (error) {
    //  console.log(error);
        this.$store.commit('setLoading', false);
        this.$store.commit('setError', error.response.data.message);
   }
    },

    remove(e, id){
      e.preventDefault();
      return this.$store.commit('suspect/removeASuspect', id)
    }
  },
  computed:{
    suspects(){
      return this.$store.state.suspect.addSuspects
    }
  }
}
</script>
