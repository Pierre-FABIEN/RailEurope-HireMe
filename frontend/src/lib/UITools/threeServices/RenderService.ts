import * as THREE from 'three';

class RenderService {
  private renderer: THREE.WebGLRenderer | null = null;

  public initRenderer() {
    // Check that you are on the client side
    if (typeof window !== 'undefined') {
      this.renderer = new THREE.WebGLRenderer({ antialias: true });
      this.renderer.setSize(window.innerWidth, window.innerHeight);
      this.renderer.shadowMap.enabled = true;
      this.renderer.shadowMap.needsUpdate = true;
      this.renderer.shadowMap.type = THREE.PCFSoftShadowMap;
      this.renderer.setPixelRatio(Math.min(window.devicePixelRatio, 1));
    }
  }

  public getRenderer(): THREE.WebGLRenderer | null {
    return this.renderer;
  }

  public render(scene: THREE.Scene, camera: THREE.PerspectiveCamera) {
    if (this.renderer) {
      this.renderer.render(scene, camera);
    }
  }
}

export const renderService = new RenderService();
