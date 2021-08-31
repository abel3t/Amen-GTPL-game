<template>
  <UploadFile />
</template>

<style>
.dropdown {
  @apply p-3 text-3xl;
  background: transparent;
}
</style>

<script>
import UploadFile from '../components/UploadFile.vue';
export default {
  components: { UploadFile }
}
</script>
