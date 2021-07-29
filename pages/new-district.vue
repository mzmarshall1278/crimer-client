<template>
  <div class="">
    <p class="text-center text-green-500 font-bold text-lg">Add New District</p>
    <form class="mt-5 md:w-4/5 mx-auto border px-10 py-8 mb-10 shadow-xl" @submit.prevent="addEntry">



      <div class="px-3 mb-8 md:mb-0">
        <label class="block uppercase text-sm text-green-500 mb-2" for="grid-first-name">
          Username
        </label>
        <input required class="appearance-none block w-full text-green-700 border border-green-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" id="grid-first-name" type="text" placeholder="username" v-model="form.username">
        <!-- <p class="text-red-500 text-xs italic">Please fill out this field.</p> -->
      </div>

      <div class="px-3 mb-8 md:mb-0">
        <label class="block uppercase text-sm text-green-500 mb-2" for="grid-first-name">
          District
        </label>
        <input required class="appearance-none block w-full text-green-700 border border-green-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" id="grid-first-name" type="text" placeholder="district" v-model="form.district">
        <!-- <p class="text-red-500 text-xs italic">Please fill out this field.</p> -->
      </div>

      <div class="px-3 mb-8 md:mb-0">
        <label class="block uppercase text-sm text-green-500 mb-2" for="grid-first-name">
          Password
        </label>
        <input required class="appearance-none block w-full text-green-700 border border-green-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" id="grid-first-name" type="password" placeholder="password" v-model="form.password">
        <!-- <p class="text-red-500 text-xs italic">Please fill out this field.</p> -->
      </div>

      
      <div class="px-3 mb-8 md:mb-0">
        <button class="bg-green-500 text-white rounded w-full py-2" type="submit">Add District</button>
      </div>
      
    </form>
  </div>
</template>

<script>
export default {
  data(){
    return {
      form: {
        username: '',
        password: '',
        district: ''
      },
    }
  },
  methods: {
    addEntry(){
      console.log(this.form);
    },

   
  },
  computed:{
  }
}
</script>
