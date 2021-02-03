<template>
  <div class="header">
    <a href="/" class="header__title">Productos Favortios</a>
    <ul class="header__menu">
      <li class="header__menu__item">
        <router-link 
          :to="{name: 'productos'}"
          class="header__menu__item__link">
            Agregar
        </router-link>
      </li>
      <li class="header__menu__item">
        <router-link 
          :to="{name: 'favoritos'}"
          class="header__menu__item__link">
            Resultados
        </router-link>
      </li>
    </ul>
  </div>
</template>

<script>
  export default {
    name: 'HeaderMain'
  }
</script>

<style lang="scss" scoped>
  .header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 10px;
    &__title {
      font-size: 24px;
      font-weight: bold;
      text-decoration: none;
    }
    &__menu {
      list-style: none;
      display: flex;
      align-items: center;
      &__item {
        display: block;
        &__link {
          display: block;
          padding: 7px 14px;
          font-size: 18px;
          text-decoration: none;
        }
      }
    }
  }
</style>