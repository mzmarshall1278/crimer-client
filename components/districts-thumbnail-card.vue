<template>
  <div class="shadow shadow-xl mb-4 py-6 px-10 rounded border" >
            <p class="py-2">User Name: <span class="text-green-500">{{district.username}}</span></p>
            <p class="py-2"> District: <span class="text-green-500">{{district.district}}</span></p>
            <p class="py-2">Status: <span class="text-green-500">{{district.status}}</span></p>
            <p class="py-2">Has Access: <span class="text-green-500">{{district.hasAccess}}</span></p>
            <button @click="toggleAccess" class="bg-green-500 text-white py-1 px-4 rounded hover:bg-white hover:text-green-500 mx-auto">{{district.hasAccess? 'Deny District Access': 'Grant Access'}}</button>
          </div>
</template>

<script>
import * as Cookies from 'js-cookie';
export default {
  props: {
    district: {
      type: Object,
      required: true
    }
  },
  methods: {
    async toggleAccess(){
      try {
        // this.$store.commit('')
        this.$store.commit('setLoading', true);
        this.$store.commit('setError', []);
      let res = await this.$axios.put(`/auth/toggleDistrict/${this.district.id}`,{}, {
        headers: {
          Authorization : `Bearer ${Cookies.get('token')}`
        }
      });
      this.$store.commit('setLoading', false);
        this.$store.commit('setSuccess', 'Access status changed successfully');
        this.$router.push('/')
      // console.log(res);
      } catch (error) {
        this.$store.commit('setLoading', false);
        this.$store.commit('setError', error.response.data.message);
        console.log(error.response.data);
      }
    }
  }
}
</script>