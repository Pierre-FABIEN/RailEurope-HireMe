// src/stores/UX/threeStore.js
import { writable } from 'svelte/store';
import * as THREE from 'three';

import { animationService } from '$UITools/threeServices/AnimationService';
import { cameraService } from '$UITools/threeServices/CameraService';
import { eventService } from '$UITools/threeServices/EventService';
import { helperService } from '$UITools/threeServices/HelperService';

import { renderService } from '$UITools/threeServices/RenderService';
import { sceneService } from '$UITools/threeServices/SceneService';

const MAX_WEBGL_CONTEXTS = 5;
let renderers = []; // Stocker les instances de renderer

function createThreeStore() {
  const { subscribe, set, update } = writable({
    renderer: null,
    scene: sceneService.scene,
    camera: null,
    animationService,
    eventService,
    helperService,
    
    renderService,
  });

  function manageRenderers(newRenderer) {
    if (renderers.length >= MAX_WEBGL_CONTEXTS) {
      const oldRenderer = renderers.shift(); // Retirez le renderer le plus ancien
      disposeRenderer(oldRenderer);
    }
    renderers.push(newRenderer); // Ajoutez le nouveau renderer
  }

  function disposeRenderer(renderer) {
    if (!renderer) return;
    renderer.dispose();
    if (renderer.forceContextLoss) {
      renderer.forceContextLoss(); // Force la libération du contexte WebGL
    }
  }

  return {
    subscribe,
    initialize: () => {
      cameraService.initCamera();
      renderService.initRenderer();
      manageRenderers(renderService.getRenderer()); // Gérez les renderers pour ne pas dépasser le maximum

      set({
        renderer: renderService.getRenderer(),
        scene: sceneService.scene,
        camera: cameraService.camera,
        animationService,
        eventService,
        helperService,
        
        renderService,
      });

      return sceneService.scene; // Return the initialized scene
    },
    dispose: () => {
      // Use update here since we're modifying the store based on its current state
      update(($state) => {
        renderers.forEach(disposeRenderer); // Disposez tous les renderers
        renderers = []; // Réinitialisez le tableau des renderers

        // Initialize variables
        let camera;
        if (typeof window !== 'undefined') {
          camera = new THREE.PerspectiveCamera(
            75,
            window.innerWidth / window.innerHeight,
            0.1,
            1000
          );
        } else {
          camera = new THREE.PerspectiveCamera(75, 1, 0.1, 1000);
        }

        // Réinitialiser l'état du store
        return {
          renderer: null,
          scene: new THREE.Scene(),
          camera,
          animationService,
          eventService,
          helperService,
          
          renderService,
        };
      });
    },
  };
}

export const threeStore = createThreeStore();
