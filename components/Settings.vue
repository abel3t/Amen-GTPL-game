<template>
  <div class="setting">
    <UploadFile/>
    <DownloadFile/>
    <Sound />
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
import Sound from '../components/Sound.vue';

export default {
  components: { UploadFile, DownloadFile, Sound }
};
</script>
