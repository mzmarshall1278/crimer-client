<template>
  <div>
    <p class="text-center font-bold text-lg text-green-500 mb-4">Latest Crimes</p>

    <div class="md:grid grid-cols-2 xl:grid-cols-3 gap-5">
      <crime-thumbnail-card v-for="crime in crimes" :key="crime.id" :crime="crime"/>
      </div>
      <div class="w-full flex justify-center">
        <nuxt-link to="/crime"><button class="my-10 bg-white text-green-500 py-1 px-4 rounded hover:bg-green-500 hover:text-white">Show all</button></nuxt-link>
      </div>
    </div>
</template>

<script>
import * as Cookies from 'js-cookie';
export default {

  async asyncData({isDev, route, store, env, params, query, req, res, redirect, error, $axios}) {
    try {
     const res = await $axios.$get('/crime/', {Headers:{
       accessToken: 'bearer '+Cookies.get('token')
     }});
     console.log(res)
    } catch (error) {
      console.log(error);
    }
  },
  data(){
    return {
      crimes: [
        {
          id: 1,
          type: 'Murder',
          date: '12/02/2021',
          time: '6:14pm',
          evidence: 'Red Handed',
          suspects: [
            {name: 'zakzaky',},{name: 'shekau'}
          ],
        },
        {
          id: 2,
          type: 'Rape',
          date: '12/02/2021',
          time: '9:10pm',
          evidence: 'witness',
          suspects: [
            {name: 'shekau'}
          ],
        },
        {
          id: 3,
          type: 'Robbery',
          date: '19/02/2021',
          time: '2:14am',
          evidence: 'Media Footage(Video/Audio)',
          suspects: [
            {name: 'Abduljabbar'}
          ],
        }

      ]
    }
  }
  }
</script>
