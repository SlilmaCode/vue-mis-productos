<template>
  <header-main />
  <div class="contenido">
    <router-view/>
  </div>
</template>

<script>

  import HeaderMain from '@/components/includes/HeaderMain.vue'

  export default {
    name: 'App',
    components: {
      HeaderMain
    }
  }

</script>
<style lang="scss">
  * {
    margin: 0px;
    padding: 0px;
  }
  .contenido {
    padding: 1em;
  }
</style>
