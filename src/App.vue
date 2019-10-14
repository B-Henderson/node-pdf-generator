<template>
  <div class="app">
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

