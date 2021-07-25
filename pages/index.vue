<template>
  <div>
    <p class="text-center mb-4">Latest Crimes</p>

    <div class="md:grid grid-cols-2 xl:grid-cols-3 gap-5">
      <crime-thumbnail-card v-for="crime in crimes" :key="crime.id" :crime="crime"/>
      </div>
    </div>
</template>

<script>
import crimeThumbnailCard from '~/components/crime-thumbnail-card.vue'
export default {
  components: { crimeThumbnailCard },
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
