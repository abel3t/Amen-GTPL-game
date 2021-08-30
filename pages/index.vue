<template>
  <BoardGame />
</template>

<script lang="ts">
import Vue from 'vue'
import BoardGame from '~/features/BoardGame.vue';

export default Vue.extend({
  components: { BoardGame }
})
</script>
