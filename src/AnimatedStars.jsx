import { useRef } from 'react';
import { Stars as DreiStars } from '@react-three/drei';
import { useFrame } from '@react-three/fiber';

export const AnimatedStars = () => {
  const ref = useRef();
  useFrame(({ clock }) => {
    if (ref.current) {
      ref.current.rotation.z = clock.getElapsedTime() / 40;

      const twinkle = Math.sin(clock.getElapsedTime() * 4) * 0.5 + 0.5;
      ref.current.material.opacity = 0.7 + twinkle * 0.1;
    }
  });
  return (
    <DreiStars
      ref={ref}
      radius={100}
      depth={60}
      count={10000}
      factor={5}
      saturation={5}
      fade
    />
  );
};
