// LoaderService.ts
import * as THREE from 'three';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';
import { DRACOLoader } from 'three/examples/jsm/loaders/DRACOLoader';

class LoaderService {
  private textureLoader = new THREE.TextureLoader();
  private gltfLoader = new GLTFLoader();
  private dracoLoader = new DRACOLoader();

  constructor() {
    this.dracoLoader.setDecoderPath('/draco/');
    this.gltfLoader.setDRACOLoader(this.dracoLoader);
  }

  public loadTexture(url: string): Promise<THREE.Texture> {
    return new Promise((resolve, reject) => {
      this.textureLoader.load(url, resolve, undefined, reject);
    });
  }

  public loadGLTFWithDRACO(url: string): Promise<THREE.GLTF> {
    return new Promise((resolve, reject) => {
      this.gltfLoader.load(url, resolve, undefined, reject);
    });
  }
}

export const loaderService = new LoaderService();
