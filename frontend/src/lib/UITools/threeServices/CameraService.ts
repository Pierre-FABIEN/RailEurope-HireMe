import * as THREE from 'three';

class CameraService {
	public camera: THREE.PerspectiveCamera | null = null;

	public initCamera() {
		if (typeof window !== 'undefined') {
		  const aspectRatio = window.innerWidth / window.innerHeight;
		  this.camera = new THREE.PerspectiveCamera(75, aspectRatio, 0.1, 1000);
		  this.camera.position.set(-10, 15, 0);
		} else {
		  this.camera = new THREE.PerspectiveCamera(75, 1, 0.1, 1000);
		}
	  }

	public adjustAspectRatio() {
		if (this.camera && typeof window !== 'undefined') {
			const aspectRatio = window.innerWidth / window.innerHeight;
			this.camera.aspect = aspectRatio;
			this.camera.updateProjectionMatrix();
		}
	}
}

export const cameraService = new CameraService();
