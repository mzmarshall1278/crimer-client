<template>
  <!-- <div> -->
    <div class="shadow shadow-xl my-4 py-6 px-10 rounded border">
        <p class="text-red-500 text-center font-bold text-green-900 text-lg"> {{crime.type}}</p>
        <p class="py-2">Date: <span class="text-green-500">{{crime.date}}</span></p>
        <p class="py-2">Time: <span class="text-green-500">{{crime.time}}</span></p>
        <p class="py-2">Suspects: <span class="text-green-500">{{crime.suspects.length}}</span></p>
        <p class="py-2">Witness:  <span class="text-green-500">{{crime.evidence}}</span></p>
        <div class="flex justify-end sm:px-12 md:px-2">
          <nuxt-link :to="`/crime/${crime.id}`"><button class="bg-white text-green-500 py-1 px-4 rounded hover:bg-green-500 hover:text-white"> view</button></nuxt-link>
        </div>
      </div>
  <!-- </div> -->
</template>
<script>
export default {
  props: {
    crime: {
      type: Object,
      required: true
    }
  }
}
</script>