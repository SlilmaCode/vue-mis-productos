<template>
  <div class="productos">
    <listar-productos />
  </div>
</template>

<script>

  import ListarProductos from '@/components/productos/ListarProductos.vue'

  export default {
    name: 'Productos',
    components: {
      ListarProductos
    }
  }
</script>

<style lang="scss" scoped>

</style>