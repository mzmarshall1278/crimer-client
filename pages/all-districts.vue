<template>
  <div>
    <p class="text-center font-bold text-lg text-green-500 mb-4">All Districts</p>

    <div class="md:grid grid-cols-2 xl:grid-cols-3 gap-5">
      <districts-thumbnail-card v-for="district in districts" :key="district.id" :district="district"/>
      </div>
      
    </div>
</template>

<script>
import * as Cookies from 'js-cookie';
export default {

  data(){
    return {
      districts: []
    }
  },
  computed: {
    
  },
  async mounted(){
    try {
      this.$store.commit('setLoading', true);
      this.$store.commit('setError', []);
     const res = await this.$axios.get('/auth/all', {
       headers: {
         authorization: `Bearer ${Cookies.get('token')}`
       }
     });
    //  console.log(res);
     this.districts = res.data;
     this.$store.commit('setLoading', false);
    } catch (error) {
      this.$store.commit('setLoading', false);
      this.$store.commit('setError', error.response.data.message);
      this.$router.push('/');
    }
  }
  }
</script>
