<template>
    <t-modal class="animate__animated" v-bind:class="{[animateBox]: animateBox}" v-model="showContingencyBox" :escToClose="true" :hideCloseButton="false" @before-close="close">
      <div class="content" :style="{borderColor: cellColors[5]}">
        <div class="content__header animate__animated" :style="{backgroundColor: cellColors[5]}" v-bind:class="{[animateHeader]: animateHeader}">{{contingency.header}}</div>
        <div class="content__body">
          <div class="content__body_title animate__animated" v-bind:class="{[animateTitle]: animateTitle}">
            {{contingency.title}}
          </div>

          <div class="content__body_request animate__animated" v-bind:class="{[animateRequest]: animateRequest}">
            {{contingency.request}}
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
import { TOGGLE_CONTINGENCY_BOX } from '~/store';

export default {
  components: {},
  computed: {
    cellColors: function () {
      return this.$store.getters.cellColors;
    },
    showContingencyBox: {
      get() {
        return this.$store.getters.showContingencyBox;
      },
      set() {}
    },
    contingency: function () {
      let contingencies = this.$store.getters.contingencies;
      contingencies = Object.values(contingencies || {});
      const rand = Math.floor(Math.random() * contingencies.length);
      console.log({ rand })
      return contingencies[rand] || {};
    },
    animateBox() {
      return this.animate();
    },
    animateHeader() {
      return this.animate();
    },
    animateTitle: function() {
      return this.animate();
    },
    animateRequest: function() {
      return this.animate();
    }
  },
  methods: {
    close: function () {
      this.$store.dispatch(TOGGLE_CONTINGENCY_BOX, false);
    },
    animate: function() {
      const animates = this.$store.getters.animates;
      const rand = Math.floor(Math.random() * Object.keys(animates).length);
      return animates[rand];
    }
  }
};
</script>
