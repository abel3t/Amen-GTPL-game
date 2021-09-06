<template>
  <t-modal v-model="showObstacleBox" :escToClose="true" :hideCloseButton="false" @before-close="close">
    <div class="content" :style="{borderColor: cellColors[obstacle.id]}">
      <div class="content__header animate__animated" v-bind:class="{[animateHeader]: animateHeader}" :style="{backgroundColor: cellColors[obstacle.id]}">{{obstacle.header}}</div>
      <div class="content__body">
        <div class="content__body_title animate__animated" v-bind:class="{[animateTitle]: animateTitle}">
          {{obstacle.title}}
        </div>

        <div class="content__body_request animate__animated" v-bind:class="{[animateRequest]: animateRequest}">
          {{obstacle.request}}
        </div>
      </div>
    </div>
  </t-modal>
</template>

<style lang="scss" scoped>
t-modal {
  @apply items-center;
}

.content {
  @apply border-2 rounded-md select-none;
  &__header {
    @apply text-white text-3xl p-4;
    font-family: 'Alfa Slab One', serif;
  }

  &__body {
    &_title {
      @apply text-3xl p-4;
      font-family: 'Alfa Slab One', 'arial', sans-serif;
    }
    &_request {
      @apply text-2xl px-12 py-5;
      font-family: 'arial', sans-serif;
      font-size: 20px;
    }
  }
}
</style>

<script>
import { TOGGLE_OBSTACLE_BOX } from '~/store';

export default {
  components: {},
  computed: {
    cellColors: function () {
      return this.$store.getters.cellColors;
    },
    showObstacleBox: {
      get() {
        return this.$store.getters.showObstacleBox;
      },
      set() {}
    },
    obstacle: function () {
      return this.$store.getters.obstacle
    },
    animateHeader() {
      return this.animate();
    },
    animateTitle: function() {
      return this.animate();
    },
    animateRequest: function() {
      return this.animate();
    },
  },
  methods: {
    close: function () {
      this.$store.dispatch(TOGGLE_OBSTACLE_BOX, false);
    },
    animate: function() {
      const animates = this.$store.getters.animates;
      const rand = Math.floor(Math.random() * Object.keys(animates).length);
      return animates[rand];
    }
  }
};
</script>
