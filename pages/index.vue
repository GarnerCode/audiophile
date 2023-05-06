<template>
  <div>
    <Landing></Landing>
    <Categories></Categories>
    <section class="section-product-features">
      <ProductFeaturePrimary></ProductFeaturePrimary>
      <ProductFeatureSecondary></ProductFeatureSecondary>
      <ProductFeatureTertiary></ProductFeatureTertiary>
    </section>
    <About></About>
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
    .section-product-features {
      display: flex;
      flex-direction: column;
      gap: 5rem;
      margin: 20rem 0;
    }
  }
</style>
