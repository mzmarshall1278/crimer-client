<template>
  <!-- component -->
  <div>
    <p class="text-lg text-green-500 text-center font-black">LOGIN</p>
      <form @submit.prevent="loginUser" class="bg-white shadow-2xl  rounded px-8 pt-6 pb-8 mb-4 flex flex-col my-10 mx-auto w-9/10 md:w-2/3">
    
      <div class="mb-4 mt-4">
        <label class="block text-green-500 text-sm font-bold mb-2" for="username">
          Username
        </label>
        <input class="shadow appearance-none border focus:border-green-500 outline-none border-green-100 rounded-full w-full py-2 px-3  text-green-500" id="username" type="text" placeholder="Username" v-model="login.username" required maxlength="20" minlength="8">
      </div>
      <div class="mb-6">
        <label class="block text-green-500 text-sm font-bold mb-2" for="password">
          Password
        </label>
        <input class="shadow appearance-none border focus:border-green-500 outline-none border-green-100 rounded-full  w-full py-2 px-3 text-green-500 mb-3" id="password" type="password" placeholder="password" v-model="login.password" required maxlength="20" minlength="8">
        <!-- <p class="text-red text-xs italic">Please choose a password.</p> -->
      </div>
      <div class="flex items-center justify-around">
        <button  type="submit" class="bg-green-500 text-white font-bold py-2 px-4 rounded">
          Login
        </button>
        <a class="inline-block align-baseline font-bold text-sm text-white bg-green-500 py-2 px-4 rounded" href="#">
          Forgot Password?
        </a>
      </div>
  </form>
</div>
  

</template>
<script>
import * as Cookies from 'js-cookie';
export default {
  layout: 'auth',
  data(){
    return {
      login: {
        username : '',
        password:  ''
      }
    }
  },
  methods: {
    async loginUser(){
      try {
        this.$store.commit('setLoading', true);
        this.$store.commit('setError', []);
        // console.log(this.$store.state.error);
        let response = await this.$auth.loginWith('local', { data: this.login })
        Cookies.set('user', response.data.user);
        Cookies.set('token', response.data.accessToken, {expires: 3600*11.99})
        // console.log(response);
        this.$store.commit('setLoading', false);
        this.$store.commit('setSuccess', 'Login successful.');
        this.$router.push('/');
        
      } catch (err) {
        this.$store.commit('setLoading', false);
        this.$store.commit('setError', err.response.data.message);
      }
    }
  },
  computed: {
  
  }
}
</script>