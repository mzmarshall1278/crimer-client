<template>
  <div>
    <p class="text-center mb-4">Latest Crimes</p>

    <div class="md:grid grid-cols-2 xl:grid-cols-3 gap-5">
      <div class="shadow shadow-xl mb-4 py-6 px-10 rounded" v-for="i in 5">
        <p class="text-red-500 text-center">Case: Murder</p>
        <p class="py-2">Date: 2/12/2021</p>
        <p class="py-2">Time: 8:05pm</p>
        <p class="py-2">Suspects: 4</p>
        <p class="py-2">Witness: Media Footage(Video/Audio)</p>
        <button class="bg-white text-green-500 py-1 px-4 rounded hover:bg-green-500 hover:text-white">view</button>
      </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {}
</script>
