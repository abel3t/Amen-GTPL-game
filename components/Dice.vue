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
        x: -Math.PI * Math.random() * 3,
        y: -Math.PI * Math.random() * 5,
        z: -Math.PI * Math.random() * 7
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
        this.rotation.x += Math.random();
        this.rotation.y += Math.random();
        this.rotation.z += Math.random();
        requestAnimationFrame( this.rotate );
      }
    }
  },
  components: {
    ModelGltf
  }
}
</script>
