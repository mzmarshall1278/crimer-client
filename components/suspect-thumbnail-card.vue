<template>
  <div class="shadow shadow-xl mb-4 py-6 px-10 rounded border" >
            <p class="py-2">Full Name: <span class="text-green-500">{{suspect.fullName}}</span></p>
            <p class="py-2"> DOB: <span class="text-green-500">{{suspect.dob}}</span></p>
            <p class="py-2">Gender: <span class="text-green-500">{{suspect.gender}}</span></p>
            <p class="py-2">{{suspect.identificationType}}: <span class="text-green-500">{{suspect.IdentificationNumber}}</span></p>
            <div class="mt-3 flex justify-end">
              <nuxt-link :to="`/suspect/${suspect.id}`"><button class="bg-white text-green-500 py-1 px-4 rounded hover:bg-green-500 hover:text-white">View</button></nuxt-link>
            </div>
          </div>
</template>

<script>
export default {
  props: {
    suspect: {
      type: Object,
      required: true
    }
  }
}
</script>