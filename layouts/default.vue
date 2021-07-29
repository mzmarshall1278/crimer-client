<template>
  <div>
    <navbar/>
    <search/>
    <div class="pt-8 w-4/5 mx-auto">
      <Nuxt/>
    </div>
  </div>
</template>
<script>
export default {
  middleware: ['check']
}
</script>