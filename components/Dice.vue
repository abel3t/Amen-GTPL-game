<template>
  <div id="sceneSpace">

  </div>
</template>


<script>

import {
  PerspectiveCamera, AmbientLight, Scene, WebGLRenderer, Color
} from 'three';
import { GLTFLoader } from '../node_modules/three/examples/jsm/loaders/GLTFLoader.js';
import { OrbitControls } from '../node_modules/three/examples/jsm/controls/OrbitControls.js';

export default {
  name: 'Dice',
  data() {
    return {
      sceneSpace: null,
      camera: null,
      scene: null,
      mesh: null,
      renderer: null,
      controls: null,
      targetRotationX: 0,
      targetRotationY: 0,
      targetRotationZ: 0,
      isThrowDice: false
    };
  },
  methods: {
    init() {
      this.sceneSpace = document.getElementById('sceneSpace');
      this.sceneSpace.name = 'Scene Space';

      // WebGL Renderer
      {
        this.renderer = new WebGLRenderer({ alpha: true });
        this.renderer.name = 'Renderer';
        this.renderer.domElement.addEventListener('click', this.throwDice, true);
        this.renderer.domElement.style.cursor = 'pointer';
        this.renderer.setSize(150, 150);

        this.renderer.shadowMap.enabled = true;
        this.sceneSpace.appendChild(this.renderer.domElement);
      }

      // Scene
      {
        this.scene = new Scene();
        this.scene.name = 'Scene';
        this.scene.background = new Color(0xfdf3cc);
      }

      // Camera
      {
        const fov = 75;
        const aspect = 1;
        const near = 0.1;
        const far = 1000;
        this.camera = new PerspectiveCamera(fov, aspect, near, far);
        this.camera.name = 'Camera';
        this.camera.position.set(0, 35, 30);
        this.camera.rotation.y = -Math.PI;
      }

      // Light
      {
        const color = 0x777777;
        const intensity = 4;
        const ambientLight = new AmbientLight(color, intensity);
        ambientLight.name = 'Ambient Light';
        this.scene.add(ambientLight);
      }

      // Load GLTF
      {
        const loader = new GLTFLoader();

        loader.load(
          'models/dice/scene.gltf',

          // Call once loaded
          (gltf) => {
            gltf.scene.name = 'GLTF Scene';
            gltf.scene.scale.set(1.4, 1.4, 1.4);
            this.scene.add(gltf.scene);

            this.mesh = gltf.scene.children[0];
          },

          // Call while loading
          (xhr) => {
            console.log((xhr.loaded / xhr.total * 100) + '% loaded');
          },

          // Call when errors
          (error) => {
            console.log('An error happened');
          }
        );
      }

      // Orbit Controls
      {
        this.controls = new OrbitControls(this.camera, this.renderer.domElement);
        this.controls.target.set(0, 0, 0);
        this.controls.minDistance = 10;
        this.controls.maxDistance = 100;
        this.controls.update();
      }

      this.renderer.setAnimationLoop(this.animate);
    },

    animate() {
      this.renderer.render(this.scene, this.camera);
    },
    throwDice() {
      this.isThrowDice = !this.isThrowDice;
      this.rotate();
    },
    rotate() {
      if (this.isThrowDice && this.mesh) {
        this.mesh.rotation.x += 0.2;
        this.mesh.rotation.y += 0.2;
        this.mesh.rotation.z += 0.2;

        this.renderer.render( this.scene, this.camera );
        requestAnimationFrame(this.rotate);
      }
    }
  },

  mounted() {
    this.init();
  },

  created() {
  }
};
</script>
