<template>
  <div class="app">
    <section class="hero is-medium is-primary is-bold">
      <div class="hero-body">
        <div class="container">
          <h1 class="title">Primary bold title</h1>
          <h2 class="subtitle">Primary bold subtitle</h2>
        </div>
      </div>
    </section>
    <div class="container">
      <pdf-form></pdf-form>
    </div>
  </div>
</template>
<script>
import PdfForm from "./components/PdfForm.vue";

export default {
  components: { PdfForm }
};
</script>

<style lang="scss">
.app {
  width: 100%;
  height: 100%;
}
</style>

