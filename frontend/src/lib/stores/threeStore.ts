// src/stores/UX/threeStore.js
import { writable } from 'svelte/store';
import * as THREE from 'three';

import { cameraService } from '$UITools/threeServices/CameraService';

function createThreeStore() {
	const { subscribe, set, update } = writable({
		camera: null
	});

	return {
		subscribe,
		initialize: () => {
			// Initialisation de la caméra
			cameraService.initCamera();

			// Mise à jour de l'état du store avec la caméra initialisée
			set({
				camera: cameraService.camera
			});

			return cameraService.camera; // Retourne la caméra initialisée
		},
		dispose: () => {
			// Réinitialisation de la caméra
			update(($state) => {
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

				// Retourne un nouvel état avec une caméra réinitialisée
				return {
					camera
				};
			});
		}
	};
}

export const threeStore = createThreeStore();