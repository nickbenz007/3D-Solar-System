import { useRef } from 'react';
import { AnimatedStars } from './AnimatedStars';
import { useHelper } from '@react-three/drei';
import { Earth } from './scene/Earth';
import * as THREE from 'three';

export const MainContainer = () => {
  const directionalLightRef = useRef();
  const directionalLightRefTwo = useRef();
  useHelper(directionalLightRef, THREE.DirectionalLightHelper, 1, 'red');
  useHelper(directionalLightRefTwo, THREE.DirectionalLightHelper, 1, 'cyan');

  return (
    <>
      <color attach="background" args={['black']} />
      <AnimatedStars />
      <directionalLight
        castShadow
        // ref={directionalLightRef}
        position={[0, 0, 10]}
        intensity={5}
      />
      <directionalLight
        castShadow
        // ref={directionalLightRefTwo}
        position={[0, 0, -15]}
      />
      <Earth displacementScale={0.15} />
    </>
  );
};
