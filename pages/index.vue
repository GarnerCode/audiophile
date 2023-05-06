<template>
  <div>
    <Landing></Landing>
    <Categories></Categories>
    <div class="product-features">
      <ProductFeaturePrimary></ProductFeaturePrimary>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  name: 'IndexPage'
})
</script>

<style lang="scss">
  @media screen and (min-width: 0px) {
    .product-features {
      display: flex;
      flex-direction: column;
      gap: 2rem;
    }
  }
</style>
