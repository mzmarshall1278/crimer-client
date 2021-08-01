<template>
  <div class="md:flex md:flex-wrap mt-2 py-4 px-8 mb-4 w-4/5 mx-auto">

      <div class="px-3 mb-6 md:mb-0 md:w-2/6">
      <label class="block uppercase text-sm text-green-500 mb-2" for="grid-id-crimeType">
          Search For
        </label>

         <div class="relative">
        <select  required class="block appearance-none w-full bg-white border border-green-500 text-green-500 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-green-500 " id="grid-id-crimeType" v-model="searchFor">
          <option value="BVN">Suspect BVN</option>
          <option value="NIN">Suspect NIN</option>
          <option value="suspectName">suspect name</option>
          <option value="status">crime status</option>
          <option value="type">crime type</option>
          <option value="districtName">District Name</option>
        </select>
        <div class="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-green-500">
          <svg class="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/></svg>
        </div>
        </div>
      </div>


        <div v-if="type === 'select'" class="px-3 mb-6 md:mb-0 md:w-3/6">
      <label class="block uppercase text-sm text-green-500 mb-2" for="grid-id-type">
          Select Term
        </label>

         <div class="relative">
        <select required class="block appearance-none w-full bg-white border border-green-500 text-green-500 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-green-500 " id="grid-id-type" v-model="selectTerm">
          <option  v-for="item in setSelect" :key="item.val" :value="item.val">{{item.text}}</option>
          
        </select>
        <div class="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-green-500">
          <svg class="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/></svg>
        </div>
        </div>
      </div>

        <div v-if="type !== 'select'"  class="px-3 mb-6 md:mb-0 md:w-3/6">
        <label class="block uppercase text-sm text-green-500 mb-2" for="grid-search">
          Search Term
        </label>
        <input class="appearance-none block w-full text-green-700 border border-green-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" id="grid-search" type="address" placeholder="Search" v-model="searchTerm" >
        <!-- <p class="text-red-500 text-xs italic">Please fill out this field.</p> -->
      </div>


      <div class="px-3 mb-6 md:mb-0 md:w-1/6">
      <label class="block uppercase text-sm text-green-500 mb-2" for="grid-id-button">
          &nbsp;
        </label>
        <button class="bg-green-500 text-white rounded py-2 px-4" id="button" @click="search">search</button>
      </div>
      </div>
</template>
<script>
import * as Cookies from 'js-cookie';
export default {
  data(){
    return {
      searchFor: '',
      searchTerm: '',
      selectTerm: ''
    }
  },
  computed:{
    
    type(){
      if(this.searchFor == 'status' || this.searchFor == 'type') return 'select'
    },
    url(){
      if(this.searchFor == 'status') return `/crime?status=${this.selectTerm}`;
      if(this.searchFor == 'type') return `/crime?type=${this.selectTerm}`;
      if(this.searchFor == 'BVN') return `/suspect/allsuspects?BVN=${this.searchTerm}`;
      if(this.searchFor == 'NIN') return `/suspect/allsuspects?NIN=${this.searchTerm}`;
      if(this.searchFor == 'name') return `/suspect/allsuspects?name=${this.searchTerm}`;
      if(this.searchFor == 'districtName') return `/auth/all?username=${this.searchTerm}`;
    },
    setSelect(){
      let items ;

     if (this.searchFor === 'status'){
        items =  [
          {val: 'New', text: 'New'},
          {val: 'In Court', text: 'In Court'},
          {val: 'Sentenced', text: 'Sentenced'},
          {val: 'Discharged', text: 'Discharged'}
        ]
      }else if (this.searchFor === 'type') {
        items = [
          {val: 'Rape', text: 'Rape'},
          {val: 'Adultery/Fornication', text: 'Adultery/Fornication'},
          {val: 'Theft', text: 'Theft'},
          {val: 'Robery', text: 'Robery'},
          {val: 'Burglary', text: 'Burglary'},
          {val: 'Murder', text: 'Murder'},
          {val: 'Drug_Abuse', text: 'Drug Abuse'},
          {val: 'Illegal_BUSINESS', text: 'Illegal BUSINESS'},
          {val: 'Fraud', text: 'Fraud'},
          {val: 'Blasphemy', text: 'Blasphemy'},
          {val: 'Multiple_Crimes', text: 'Multiple Crimes'},
          {val: 'Others', text: 'Others'}
          ]
      } else {
        return []
      }

      return  items;
    }
  },
  methods:{
    async search(){
      try {
        // this.$store.commit('')
        this.$store.commit('setLoading', true);
        this.$store.commit('setError', []);
      let res = await this.$axios.$get(this.url, {
        headers: {
          Authorization : `Bearer ${Cookies.get('token')}`
        }
      });
      this.$store.commit('setLoading', false);
        // this.$store.commit('setSuccess', 'Login successful.');
      // console.log(res);
      } catch (error) {
        this.$store.commit('setLoading', false);
        this.$store.commit('setError', error.response.data.message);
      }
    }
  }
}
</script>