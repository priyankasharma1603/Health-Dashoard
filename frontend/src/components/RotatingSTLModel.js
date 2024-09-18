import React, { useRef, useEffect } from 'react';
import * as THREE from 'three';
import { STLLoader } from 'three/examples/jsm/loaders/STLLoader';

const RotatingSTLModel = () => {
  const mountRef = useRef(null);

  useEffect(() => {
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, 1, 0.1, 1000);
    const renderer = new THREE.WebGLRenderer();

    // Set the size of the renderer
    renderer.setSize(mountRef.current.clientWidth, mountRef.current.clientHeight);
    mountRef.current.appendChild(renderer.domElement);

    // Load the STL model
    const loader = new STLLoader();
    loader.load('/models/model.glb', (geometry) => {
      const material = new THREE.MeshStandardMaterial({ color: 0x0055ff });
      const mesh = new THREE.Mesh(geometry, material);
      scene.add(mesh);

      // Center the model
      geometry.computeBoundingBox();
      const boundingBox = geometry.boundingBox;
      mesh.position.x = -0.5 * (boundingBox.max.x + boundingBox.min.x);
      mesh.position.y = -0.5 * (boundingBox.max.y + boundingBox.min.y);
      mesh.position.z = -0.5 * (boundingBox.max.z + boundingBox.min.z);
    }, undefined, (error) => {
      console.error('An error happened:', error);
    });

    // Add a basic light
    const light = new THREE.PointLight(0xffffff, 1, 100);
    light.position.set(10, 10, 10);
    scene.add(light);

    // Set up camera position
    camera.position.z = 5;

    // Animation loop
    const animate = () => {
      requestAnimationFrame(animate);

      // Rotate the model
      if (scene.children.length > 0) {
        scene.children[0].rotation.y += 0.01;
      }

      renderer.render(scene, camera);
    };

    animate();

    // Cleanup on unmount
    return () => {
      mountRef.current.removeChild(renderer.domElement);
    };
  }, []);

  return <div ref={mountRef} style={{ width: '100%', height: '100%' }} />;
};

export default RotatingSTLModel;
