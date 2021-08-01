<template>
  <div>
    <p class="text-center font-bold text-lg text-green-500 mb-4">All Suspects</p>

    <div class="md:grid grid-cols-2 xl:grid-cols-3 gap-5">
      <suspect-thumbnail-card v-for="suspect in suspects" :key="suspect.id" :suspect="suspect"/>
      </div>
    </div>
</template>
<script>
import * as  Cookies from 'js-cookie';
import suspectThumbnailCard from '~/components/suspect-thumbnail-card.vue';
export default {
  components: { suspectThumbnailCard },
  data(){
    return {
      suspects: []
    }
  },
  async mounted(){
    try {
      this.$store.commit('setLoading', true);
      this.$store.commit('setError', []);
     const res = await this.$axios.get('/suspect/allsuspects', {
       headers: {
         authorization: `Bearer ${Cookies.get('token')}`
       }
     });
     this.suspects = res.data;
     this.$store.commit('setLoading', false);
    } catch (error) {
      this.$store.commit('setLoading', false);
      this.$store.commit('setError', error.response.data.message);
      // console.log(error);
    }
  }
  }
</script>
