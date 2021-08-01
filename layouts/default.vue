<template>
  <div>
    <loader v-if="loading"/>
    <error v-if="error.length"/>
    <success v-if="success != ''"/>
    <navbar/>
    <search/>
    <div class="pt-8 w-4/5 mx-auto">
      <Nuxt/>
    </div>
  </div>
</template>
<script>
export default {
  middleware: ['check'],
  computed: {
    loading(){
      return this.$store.state.loading
    },
    error(){
      return this.$store.state.error
    },
    success(){
      return this.$store.state.success;
    }
  },
  
}
</script>