<template>
  <h1>
    Selecciona tus productos favoritos
  </h1>
  <div class="productos">
    <div 
      class="productos__item"
      v-for="producto in listaProductos"
      :key="producto.id">
        <p class="productos__item__title">
          {{ producto.name }}
          <strong>$/ {{ producto.price }}</strong>
        </p>
        <a href="#">Agregar a Favoritos</a>
    </div>
  </div>
</template>

<script>

  import apiProductos from '@/api/Productos'

  export default {
    name: 'ListarProductos',
    data() {
      return {
        listaProductos: []
      }
    },
    methods: {
      listarProductos: function () {
        apiProductos.productosPopulares().then(
          (response) => {
            this.listaProductos = response.data.results
          }
        )
      }
    },
    beforeMount () {
      this.listarProductos()
    }
  }
</script>

<style lang="scss" scoped>
  .productos {
    &__item {
      margin: 10px;
      border: 1px solid;
      padding: 10px;
    }
  }
</style>