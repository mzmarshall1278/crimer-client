<template>
  <div class="w-8/10 mx-auto mt-10">
  <error v-if="error.length"/>
    <loader v-if="loading"/>
    <success v-if="success!= ''"/>
      <Nuxt/>
      
  </div>
</template>

<script>
export default {
  computed: {
    loading(){
      return this.$store.state.loading;
    },
    error(){
      return this.$store.state.error;
    },
    success(){
      return this.$store.state.success;
    }
  }
}
</script>
