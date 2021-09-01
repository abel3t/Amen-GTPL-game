<template>
  <div class="setting">
    <UploadFile/>
    <DownloadFile/>
  </div>
</template>

<style>
.setting {
  @apply flex flex-col flex-col-reverse items-center content-center;
}
</style>

<script>
import UploadFile from '../components/UploadFile.vue';
import DownloadFile from '../components/DownloadFile.vue';

export default {
  components: { UploadFile, DownloadFile }
};
</script>
