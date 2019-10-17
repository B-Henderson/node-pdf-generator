<template>
  <div class="app">
    <section class="hero is-medium is-primary is-bold">
      <div class="hero-body">
        <div class="container">
          <h1 class="title">Node PDF generator</h1>
          <h2 class="subtitle">Generate a PDF from a URL or html file</h2>
        </div>
      </div>
    </section>
    <div class="form-container">
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
  display: flex;

  flex-direction: column;

  justify-content: space-around;
}
.form-container {
  width: 100%;
}
</style>

