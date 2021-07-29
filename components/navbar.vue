<template>
  <nav class="relative flex flex-wrap items-center justify-between px-2 py-3 bg-green-500 fixed">
    <div class="container px-4 mx-auto flex flex-wrap items-center justify-around">
      <div class="w-full relative flex justify-between lg:w-auto  px-4 lg:static lg:block lg:justify-start">
        <a class="text-sm font-bold leading-relaxed inline-block mr-4 py-2 whitespace-nowrap uppercase text-white" ><nuxt-link to="/">NPF Crimer</nuxt-link>
          
        </a>
        <p class="text-white font-bold py-2" v-if="user">{{user}}</p>
        <button class="text-white cursor-pointer text-xl leading-none px-3 py-1 border border-solid border-transparent rounded bg-transparent block lg:hidden outline-none focus:outline-none" type="button" v-on:click="showMenu = !showMenu">
          <i class="fas fa-bars"></i><span class="font-black text-sm">|||</span>
        </button>
        
      </div>
      
      <div v-bind:class="{'hidden': !showMenu, 'flex': showMenu}" class="lg:flex lg:flex-grow items-center">
        <ul class="flex flex-col lg:flex-row list-none ml-auto">

          <li class="nav-item">
            <a class="px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-white hover:opacity-75" ><nuxt-link to="/">
              <i class="fab fa-twitter text-lg leading-lg text-white opacity-75" /><span class="ml-2">Home</span>
            </nuxt-link></a>
          </li>

          <li class="nav-item">
            <a class="px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-white hover:opacity-75" ><nuxt-link to="/crime/new-crime">
              <i class="fab fa-facebook-square text-lg leading-lg text-white opacity-75" /><span class="ml-2">New</span>
            </nuxt-link></a>
          </li>
          

          <li class="nav-item">
            <a class="px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-white hover:opacity-75" ><nuxt-link to="/auth/login">
              <i class="fab fa-pinterest text-lg leading-lg text-white opacity-75" /><span class="ml-2">login</span>
            </nuxt-link></a>
          </li>
        </ul>
      </div>


    </div>
  </nav>
</template>

<script>
import * as Cookies from 'js-cookie';
export default {
  name: "navbar",
  data() {
    return {
      showMenu: false
    }
  },
  computed: {
    user(){
      return Cookies.get('user')
      
    }
  }
}
</script>
