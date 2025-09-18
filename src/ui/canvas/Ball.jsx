import React, { Suspense, useRef, useEffect } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import {
  Decal,
  Float,
  OrbitControls,
  Preload,
  useTexture,
} from "@react-three/drei";

import CanvasLoader from "../Loader";

const Ball = ({ imgUrl, isInView }) => {  // Add isInView as a prop
  const [decal] = useTexture([imgUrl]);
  const meshRef = useRef();

  // Set initial rotation to face forward
  // useEffect(() => {
  //   if (meshRef.current) {
  //     meshRef.current.rotation.y = Math.PI; // 180 degrees to face forward
  //   }
  // }, []);

  // useFrame((state, delta) => {
  //   if (meshRef.current && isInView) {
  //     meshRef.current.rotation.y += delta * 0.5;
  //   }
  // });

  return (
    <Float speed={1.75} rotationIntensity={1} floatIntensity={2}>
      <ambientLight intensity={0.25} />
      <directionalLight position={[0, 0, 0.05]} />
      <mesh ref={meshRef} castShadow receiveShadow scale={2.3}>
        <icosahedronGeometry args={[1, 1]} />
        <meshStandardMaterial
          color='#ffffff'
          polygonOffset
          polygonOffsetFactor={-5}
          flatShading
        />
        <Decal
          position={[0, 0, 1]}
          rotation={[2 * Math.PI, 0, 6.25]}
          scale={1}
          map={decal}
          flatShading
        />
      </mesh>
    </Float>
  );
};

const BallCanvas = ({ icon, isInView }) => {  // Accept isInView as a prop
  return (
    <Canvas
      frameloop={isInView ? 'always' : 'demand'}  // Change based on visibility
      dpr={[1, 2]}
      gl={{ preserveDrawingBuffer: true }}
    >
      <Suspense fallback={<CanvasLoader />}>
        <OrbitControls enableZoom={false} />
        <Ball imgUrl={icon} isInView={isInView} />  // Pass isInView to Ball
      </Suspense>
      <Preload all />
    </Canvas>
  );
};

export default BallCanvas;