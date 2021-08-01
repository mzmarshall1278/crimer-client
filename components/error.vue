<template>
  <div>
    <div class="fixed opacity-90 mx-auto bg-red-50 inset-x-0  rounded z-40 mt-12 text-white p-4 md:w-2/4 mx-auto opacity-70">
    <div @click="close" class="rounded-full bg-red-900 text-white w-6 top-2 left-2 text-center h-6 absolute inset-x-0 pb-5 font-bold cursor-pointer">X</div>
    <p class="w-full text-center top-10 font-bold align-middle inline-block text-red-900 text-4xl animate-pulse">Error!!!</p>
    <div  v-if="type !== 'string'">
      <p v-for="(item, key) in error" :key="key" class="text-red-900 ">* {{item}}</p>
    </div>
    <p class="text-red-900 ">* {{error}}</p>
  </div> 
  </div>
</template>
<script>
export default {
  methods:{
    close(){
      return this.$store.commit('setError', []);
    }
  },
  computed: {
    type(){
      return typeof this.error;
    },
    error(){
      return this.$store.state.error;
    }
  }
}
</script>