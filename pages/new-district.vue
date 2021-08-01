<template>
  <div class="">
    <p class="text-center text-green-500 font-bold text-lg">Add New District</p>
    <form class="mt-5 md:w-4/5 mx-auto border px-10 py-8 mb-10 shadow-xl" @submit.prevent="addEntry">



      <div class="px-3 mb-8 md:mb-0">
        <label class="block uppercase text-sm text-green-500 mb-2" for="grid-username">
          Username
        </label>
        <input required class="appearance-none block w-full text-green-700 border border-green-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" id="grid-username" type="text" placeholder="username" v-model="form.username" minlength="5" maxlength="20">
        <!-- <p class="text-red-500 text-xs italic">Please fill out this field.</p> -->
      </div>

      <div class="px-3 mb-8 md:mb-0">
        <label class="block uppercase text-sm text-green-500 mb-2" for="grid-district">
          District
        </label>
        <input required class="appearance-none block w-full text-green-700 border border-green-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" id="grid-district" type="text" placeholder="district" v-model="form.district" minlength="5" maxlength="20">
        <!-- <p class="text-red-500 text-xs italic">Please fill out this field.</p> -->
      </div>

      <div class="px-3 mb-8 md:mb-0">
        <label class="block uppercase text-sm text-green-500 mb-2" for="grid-password">
          Password
        </label>
        <input required class="appearance-none block w-full text-green-700 border border-green-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" id="grid-password" type="password" placeholder="password" v-model="form.password" minlength="8" maxlength="20">
        <!-- <p class="text-red-500 text-xs italic">Please fill out this field.</p> -->
      </div>

      
      <div class="px-3 mb-8 md:mb-0">
        <button class="bg-green-500 text-white rounded w-full py-2" type="submit">Add District</button>
      </div>
      
    </form>
  </div>
</template>

<script>
import * as Cookies from 'js-cookie'
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
    async addEntry(){
      try {
        this.$store.commit('setLoading', true);
        this.$store.commit('setError', []);
        const res = await this.$axios.post('/auth/create',
        this.form, {
        headers: {
          Authorization: `Bearer ${Cookies.get('token')}`
        }
      });
      // console.log(res)
      this.$store.commit('setLoading', false);
        this.$store.commit('setSuccess', 'District added successfully');
      return this.$router.push('/');
      } catch (error) {
        // console.log(error.response);
        this.$store.commit('setLoading', false);
        this.$store.commit('setError', error.response.data.message);
        this.$router.push('/');
      }
    }
    }
}
</script>
