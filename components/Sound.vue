<template>
  <button class="rounded-lg cursor-pointer download-file" @click="turnOffSound" v-if="isPlaySound">
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
      <path
        d="M3 9v6h-1v-6h1zm13-7l-9 5v2.288l7-3.889v13.202l-7-3.889v2.288l9 5v-20zm-11 5h-5v10h5v-10zm13.008 2.093c.742.743 1.2 1.77 1.198 2.903-.002 1.133-.462 2.158-1.205 2.9l1.219 1.223c1.057-1.053 1.712-2.511 1.715-4.121.002-1.611-.648-3.068-1.702-4.125l-1.225 1.22zm2.142-2.135c1.288 1.292 2.082 3.073 2.079 5.041s-.804 3.75-2.096 5.039l1.25 1.254c1.612-1.608 2.613-3.834 2.616-6.291.005-2.457-.986-4.681-2.595-6.293l-1.254 1.25z"/>
    </svg>
  </button>
  <button class="rounded-lg cursor-pointer download-file" @click="turnOnSound" v-else>
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
      <path
        d="M3 9v6h-1v-6h1zm13-7l-9 5v2.288l7-3.889v13.202l-7-3.889v2.288l9 5v-20zm-11 5h-5v10h5v-10zm17.324 4.993l1.646-1.659-1.324-1.324-1.651 1.67-1.665-1.648-1.316 1.318 1.67 1.657-1.65 1.669 1.318 1.317 1.658-1.672 1.666 1.653 1.324-1.325-1.676-1.656z"/>
    </svg>
  </button>
</template>

<style lang="scss">
.download-file {
  @apply w-1/3 h-1/3;
}
</style>

<script>
import { TOGGLE_SOUND } from '~/store';

export default {
  computed: {
    isPlaySound: {
      get() {
        return this.$store.getters.settings.sound;
      },
      set() {}
    }
  },
  methods: {
    turnOffSound() {
      this.$store.dispatch(TOGGLE_SOUND, false);
      this.$store.getters?.obstacleSound?.load();
    },
    turnOnSound() {
      this.$store.dispatch(TOGGLE_SOUND, true);
    }
  }
};
</script>
