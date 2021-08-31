<template>
    <model-gltf
      src="models/dice/scene.gltf"
      :rotation="rotation"
      @on-load="onLoad"
      :backgroundAlpha="0" backgroundColor="#FDF3CC"
      :scale="{x: 0.7, y: 0.7, z: 0.7}"
      style="width: 100%; cursor: pointer"
      @on-click="throwDice"
    ></model-gltf>
</template>

<script>
import { ModelGltf } from 'vue-3d-model'

export default {
  data() {
    return {
      rotation: {
        x: -Math.PI / 2,
        y: -Math.PI / 2,
        z: -Math.PI / 2
      },
      isThrowDice: false,
    }
  },
  methods: {
    onLoad () {
      this.rotate();
    },
    throwDice() {
      this.isThrowDice = !this.isThrowDice;
      this.rotate();
    },
    rotate () {
      if (this.isThrowDice) {
        this.rotation.x += Math.round(Math.random() * 4);
        this.rotation.y += Math.round(Math.random() * 4);
        this.rotation.z += Math.round(Math.random() * 4);
        requestAnimationFrame( this.rotate );
      }
    }
  },
  components: {
    ModelGltf
  }
}
</script>
