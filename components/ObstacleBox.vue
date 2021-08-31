<template>
  <t-modal v-model="showObstacleBox" :escToClose="true" :hideCloseButton="false" @before-close="close">
    <div class="content" :style="{borderColor: cellColors[obstacle.id]}">
      <div class="content__header" :style="{backgroundColor: cellColors[obstacle.id]}">{{obstacle.header}}</div>
      <div class="content__body">
        <div class="content__body_title">
          {{obstacle.title}}
        </div>

        <div class="content__body_request">
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
  @apply border-2 rounded-md;
  &__header {
    @apply text-white text-3xl p-4;
  }

  &__body {
    &_title {
      @apply text-4xl p-3;
    }
    &_request {
      @apply text-2xl p-5;
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
    }
  },
  methods: {
    close: function () {
      this.$store.dispatch(TOGGLE_OBSTACLE_BOX, false);
    }
  }
};
</script>
