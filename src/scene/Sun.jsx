// import { useRef } from 'react';
// import { useFrame } from '@react-three/fiber';
// import { useTexture } from '@react-three/drei';

// export const Sun = () => {
//   const ref = useRef();
//   const [sunTexture] = useTexture(['/2k_sun.jpg']);

//   useFrame(({ clock }) => {
//     const time = clock.getElapsedTime() * 0.1;
//     const radius = 10;

//     ref.current.position.x = Math.cos(time) * radius;
//     ref.current.position.z = Math.sin(time) * radius;

//     ref.current.rotation.y += 0.007;
//   });

//   return (
//     <mesh ref={ref} castShadow>
//       <sphereGeometry args={[0.7, 128, 128]} />
//       <meshPhongMaterial map={sunTexture} />
//     </mesh>
//   );
// };

import { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { useTexture } from '@react-three/drei';
import * as THREE from 'three';

// Shader for the flames
const FlameShader = {
  uniforms: {
    uTime: { value: 0 },
    uTexture: { value: null }, // Base texture for the Sun
  },
  vertexShader: `
    varying vec2 vUv;
    void main() {
      vUv = uv;
      gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
    }
  `,
  fragmentShader: `
    uniform float uTime;
    uniform sampler2D uTexture;
    varying vec2 vUv;

    void main() {
      vec2 uv = vUv;

      // Animated noise effect
      float noise = sin(uv.x * 10.0 + uTime) * cos(uv.y * 10.0 + uTime * 0.5);
      noise += sin(uv.x * 20.0 - uTime * 1.5) * 0.5;

      vec4 texColor = texture2D(uTexture, uv);
      vec3 color = texColor.rgb + vec3(noise * 0.5, noise * 0.2, 0.0); // Add fiery effect
      gl_FragColor = vec4(color, 1.0);
    }
  `,
};

export const Sun = () => {
  const ref = useRef();
  const sunTexture = useTexture('/2k_sun.jpg');

  // Custom shader material
  const shaderMaterial = new THREE.ShaderMaterial({
    uniforms: {
      uTime: { value: 0 },
      uTexture: { value: sunTexture },
    },
    vertexShader: FlameShader.vertexShader,
    fragmentShader: FlameShader.fragmentShader,
  });

  useFrame(({ clock }) => {
    const time = clock.getElapsedTime();
    const radius = 10;

    // Orbit animation
    if (ref.current) {
      ref.current.position.x = Math.cos(time * 0.1) * radius;
      ref.current.position.z = Math.sin(time * 0.1) * radius;
      ref.current.rotation.y += 0.01;

      // Update shader uniform
      shaderMaterial.uniforms.uTime.value = time;
    }
  });

  return (
    <mesh ref={ref} castShadow>
      <sphereGeometry args={[0.7, 32, 32]} />
      <primitive object={shaderMaterial} attach="material" />
    </mesh>
  );
};
