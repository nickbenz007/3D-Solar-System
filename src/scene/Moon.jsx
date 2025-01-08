import { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { useTexture } from '@react-three/drei';

export const Moon = () => {
  const ref = useRef();
  const [moonTexture] = useTexture(['/moon.jpg']);

  useFrame(({ clock }) => {
    const time = clock.getElapsedTime() * 0.2;
    const radius = 5;

    ref.current.position.x = Math.cos(time) * radius;
    ref.current.position.z = Math.sin(time) * radius;

    ref.current.rotation.y += 0.007;
  });

  return (
    <mesh ref={ref} castShadow>
      <sphereGeometry args={[0.7, 64, 64]} />
      <meshPhongMaterial map={moonTexture} />
    </mesh>
  );
};
