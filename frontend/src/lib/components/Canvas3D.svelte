<script lang="ts">
	import { onMount, onDestroy } from 'svelte';
	import * as THREE from 'three';

	import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';
	import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';
	import { DRACOLoader } from 'three/examples/jsm/loaders/DRACOLoader'; // Importation de DRACOLoader

	import { RectAreaLightUniformsLib } from 'three/examples/jsm/lights/RectAreaLightUniformsLib';
	import { RectAreaLightHelper } from 'three/examples/jsm/helpers/RectAreaLightHelper';

	import { threeStore } from '$stores/threeStore';

	let controls;
	let container;
	let animationFrameId;
	let unsubscribe;

	let scene;
	let renderer;
	let camera;

	onMount(() => {
		if (typeof window !== 'undefined') {
			threeStore.initialize();

			unsubscribe = threeStore.subscribe(($state) => {
				({ renderer, camera, scene } = $state);

				if (renderer && container && !container.firstChild) {
					container.appendChild(renderer.domElement);

					// Camera setup (only if camera is not already set up)
					camera.position.set(10, 13, 0);

					// Orbit controls for interaction
					controls = new OrbitControls(camera, renderer.domElement);
					controls.enableDamping = true;
					controls.dampingFactor = 0.1;
					controls.target.set(-20, 0, 0);

					// Initialize RectAreaLightUniformsLib
					RectAreaLightUniformsLib.init();

					// Add lights to the scene
					addLights(scene);

					// Load GLTF model
					loadModel(scene);

					// Resize handling
					window.addEventListener('resize', onWindowResize);

					// Start animation loop
					animate();
				}
			});
		}
	});

	function addLights(scene) {
		// Création des lumières
		const rectLightLeft = new THREE.RectAreaLight(0xffffff, 2, 10, 10);
		rectLightLeft.position.set(0, 6, 8);
		rectLightLeft.lookAt(5, 5, 0);
		scene.add(rectLightLeft);
		scene.add(new RectAreaLightHelper(rectLightLeft));

		const rectLightRight = new THREE.RectAreaLight(0xffffff, 2, 10, 10);
		rectLightRight.position.set(0, 6, -8);
		rectLightRight.lookAt(5, 5, 0);
		scene.add(rectLightRight);
		scene.add(new RectAreaLightHelper(rectLightRight));

		const rectLightPhareRight = new THREE.RectAreaLight(0xffffff, 1000, 0.24, 0.15);
		rectLightPhareRight.position.set(10.887, 1.666, 1.287);
		rectLightPhareRight.name = 'rectLightPhareRight';
		rectLightPhareRight.rotation.y = 80.1;
		scene.add(rectLightPhareRight);
		scene.add(new RectAreaLightHelper(rectLightPhareRight));

		const rectLightPhareLeft = new THREE.RectAreaLight(0xffffff, 1000, 0.24, 0.15);
		rectLightPhareLeft.position.set(10.887, 1.666, -1.287);
		rectLightPhareLeft.name = 'rectLightPhareLeft';
		rectLightPhareLeft.rotation.y = 80.1;
		scene.add(rectLightPhareLeft);
		scene.add(new RectAreaLightHelper(rectLightPhareLeft));
	}

	function loadModel(scene) {
		const loader = new GLTFLoader();
		const dracoLoader = new DRACOLoader();
		dracoLoader.setDecoderPath('/draco/');
		loader.setDRACOLoader(dracoLoader);

		loader.load(
			'modeles/train.glb',
			(gltf: any) => {
				gltf.scene.traverse((node: any) => {
					if (node.isMesh) {
						node.castShadow = true;
						node.receiveShadow = true;
						node.geometry.computeVertexNormals();
					}
				});
				scene.add(gltf.scene);
				console.log(scene);
			},
			undefined,
			(error: any) => {
				console.error('Erreur lors du chargement du modèle GLTF :', error);
			}
		);
	}

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

		if (renderer) renderer.dispose();
		if (controls) controls.dispose();
		if (unsubscribe) unsubscribe();

		// Dispose threeStore resources
		threeStore.dispose();
	});
</script>

<div bind:this={container}></div>

<style>
	div {
		width: 100vw;
		height: 100vh;
		position: fixed;
		top: 0;
		left: 0;
		z-index: -1;
	}
</style>
