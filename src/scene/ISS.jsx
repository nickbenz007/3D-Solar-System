// import { useMemo } from 'react';
import { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { useGLTF } from '@react-three/drei';

export const ISS = () => {
  const issGltf = useGLTF('/ISSModel/ISS_stationary.gltf');
  const ref = useRef();

  useFrame(({ clock }) => {
    const time = clock.getElapsedTime() * 0.2;
    const radius = 5;

    ref.current.position.x = Math.cos(time) * radius;
    ref.current.position.z = Math.sin(time) * radius;
  });

  return (
    <mesh ref={ref}>
      <primitive object={issGltf.scene} position={[2, 0, 0]} scale={0.01} />
    </mesh>
  );
};
