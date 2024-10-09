<script lang="ts">
	import { onMount, onDestroy } from 'svelte';
	import * as THREE from 'three';
	import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';
	import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';
	import { DRACOLoader } from 'three/examples/jsm/loaders/DRACOLoader'; // Importation de DRACOLoader

    import { RectAreaLightUniformsLib } from 'three/examples/jsm/lights/RectAreaLightUniformsLib';
import { RectAreaLightHelper } from 'three/examples/jsm/helpers/RectAreaLightHelper';


	let container: HTMLElement;
	let scene: THREE.Scene;
	let renderer: THREE.WebGLRenderer;
	let camera: THREE.PerspectiveCamera;
	let controls: OrbitControls;
	let animationFrameId: number;

	// Initial setup for device pixel ratio
	const devicePixelRatio = 1.3;

	// On component mount, setup scene, camera, renderer, and load the GLTF model
	onMount(() => {
		if (typeof window !== 'undefined') {
			// Scene setup
			scene = new THREE.Scene();

			// Camera setup
			camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
			camera.position.set(15, 3, 0);

			// Renderer setup
			renderer = new THREE.WebGLRenderer({ antialias: true });
			renderer.setSize(window.innerWidth, window.innerHeight);
			renderer.setPixelRatio(window.devicePixelRatio * devicePixelRatio);
			renderer.shadowMap.enabled = true;
			renderer.shadowMap.type = THREE.PCFSoftShadowMap;
			container.appendChild(renderer.domElement);
            

            // Initialiser RectAreaLightUniformsLib pour permettre l'utilisation des lumières rectangulaires
            RectAreaLightUniformsLib.init();

            // Création d'une lumière rectangulaire
            const rectLightLeft = new THREE.RectAreaLight(0xffffff, 2, 10, 10);  // Largeur 4, Hauteur 4
            rectLightLeft.position.set(0, 5, 8);  // Position de la lumière
            rectLightLeft.lookAt(5, 5, 0);         // Diriger la lumière vers le centre de la scène

            // Ajouter la lumière à la scène
            scene.add(rectLightLeft);

            const rectLightLeftHelper = new RectAreaLightHelper(rectLightLeft);
            scene.add(rectLightLeftHelper);

            // Création d'une lumière rectangulaire
            const rectLightRight = new THREE.RectAreaLight(0xffffff, 2, 10, 10);  // Largeur 4, Hauteur 4
            rectLightRight.position.set(0, 5, -8);  // Position de la lumière
            rectLightRight.lookAt(5, 5, 0);         // Diriger la lumière vers le centre de la scène

            // Ajouter la lumière à la scène
            scene.add(rectLightRight);

            const rectLightRightHelper = new RectAreaLightHelper(rectLightRight);
            scene.add(rectLightRightHelper);



            const rectLightPhareRight = new THREE.RectAreaLight(0xffffff, 1000, .2, .15);  // Largeur 4, Hauteur 4
            rectLightPhareRight.position.set(10.89, 1.68, 1.3);  // Position de la lumière
            rectLightPhareRight.rotation.y = 80;      // Diriger la lumière vers le centre de la scène

            // Ajouter la lumière à la scène
            scene.add(rectLightPhareRight);

            const rectLightPhareRightHelper = new RectAreaLightHelper(rectLightPhareRight);
            scene.add(rectLightPhareRightHelper);


            const rectLightPhareLeft = new THREE.RectAreaLight(0xffffff, 1000, .2, .15);  // Largeur 4, Hauteur 4
            rectLightPhareLeft.position.set(10.89, 1.68, -1.3);  // Position de la lumière
            rectLightPhareLeft.rotation.y = 80;      // Diriger la lumière vers le centre de la scène

            // Ajouter la lumière à la scène
            scene.add(rectLightPhareLeft);

            const rectLightPhareLeftHelper = new RectAreaLightHelper(rectLightPhareLeft);
            scene.add(rectLightPhareLeftHelper);







			// Orbit controls for interaction
			controls = new OrbitControls(camera, renderer.domElement);
			controls.enableDamping = true;
            // controls.enableZoom = false;
            // controls.enablePan = false;
            // controls.autoRotate = false;
            // controls.enabled = false;

			// Load GLTF model with DRACO loader
			const loader = new GLTFLoader();
			const dracoLoader = new DRACOLoader();
			dracoLoader.setDecoderPath('/draco/'); // Chemin vers le décodeur Draco
			loader.setDRACOLoader(dracoLoader);

            loader.load(
                'modeles/train.glb',
                (gltf: any) => {
                    gltf.scene.traverse((node: any) => {
                        if (node.isMesh) {
                            node.castShadow = true;
                            node.receiveShadow = true;
                            // Vérifier et recalculer les normales
                            node.geometry.computeVertexNormals(); 
                        }
                    });
                    scene.add(gltf.scene);
                    animate();
                },
                undefined,
                (error: any) => {
                    console.error('Erreur lors du chargement du modèle GLTF :', error);
                }
            );

			// Resize handling
			window.addEventListener('resize', onWindowResize);
		}
	});

	// Animation loop
	const animate = () => {
		animationFrameId = requestAnimationFrame(animate);
		controls.update();
		renderer.render(scene, camera);
	};

	// Resize event handler
	const onWindowResize = () => {
		if (typeof window !== 'undefined') {
			camera.aspect = window.innerWidth / window.innerHeight;
			camera.updateProjectionMatrix();
			renderer.setSize(window.innerWidth, window.innerHeight);
		}
	};

	// Clean up resources on component destroy
	onDestroy(() => {
		if (animationFrameId) cancelAnimationFrame(animationFrameId);
		if (typeof window !== 'undefined') {
			window.removeEventListener('resize', onWindowResize);
		}

		// Vérification avant le nettoyage
		if (renderer) renderer.dispose();
		if (controls) controls.dispose();
	});
</script>

<!-- Container for the Three.js renderer -->
<div bind:this={container}></div>

<style>
	div {
		width: 100vw;
		height: 100vh;
		display: block;
        position: absolute;
	}

	body {
		margin: 0;
		overflow: hidden;
	}
</style>
