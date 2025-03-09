'use client';

import React, { useEffect, Suspense } from 'react';
import * as THREE from 'three';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, useGLTF } from '@react-three/drei';

export default function Model3DScene() {
  return (
    <div className="w-2/3 h-96">
      <Canvas camera={{ position: [10, 10, 0], fov: 30 }}>
        <ambientLight intensity={0.5} />
        <pointLight position={[0, 2, 0]} />
        
        <Suspense fallback={null}>
          <Model url="/models/lotus.gltf" scale={0.9}/>
          <OrbitControls 
            autoRotate 
            autoRotateSpeed={15} 
            enableDamping 
            dampingFactor={0.05}
            enableZoom={false}
          />
        </Suspense>
      </Canvas>
    </div>
  );
}

function Model({ url, scale = 1 }: { url: string; scale?: number }) {
  const { scene } = useGLTF(url);
  
  useEffect(() => {
    scene.traverse((child) => {
      if (child instanceof THREE.Mesh) {
        child.castShadow = true;
        child.receiveShadow = true;
      }
    });

    scene.scale.set(scale, scale, scale);
  }, [scene, scale]);
  
  return <primitive object={scene} />;
}