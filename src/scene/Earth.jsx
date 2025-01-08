import { useRef } from 'react';
import PropTypes from 'prop-types';
import { useFrame } from '@react-three/fiber';
import { useTexture } from '@react-three/drei';
import { Moon } from './Moon';
import { ISS } from './ISS';
import { Sun } from './Sun';

export const Earth = ({ displacementScale }) => {
  const ref = useRef();
  useFrame(() => {
    ref.current.rotation.y += 0.002;
  });
  const [earthTexture, earthNormalTexture, specularMap, displacementMap] =
    useTexture([
      '/2k_earth_daymap.jpg',
      '/2k_earth_normal_map.jpg',
      '/2k_earth_specular_map.jpg',
      '/displacement.jpg',
    ]);
  return (
    <group>
      <mesh ref={ref} receiveShadow>
        <sphereGeometry args={[1, 32, 32]} />
        <meshPhongMaterial
          map={earthTexture}
          normalMap={earthNormalTexture}
          specularMap={specularMap}
          displacementMap={displacementMap}
          displacementScale={displacementScale}
          shininess={1000}
        />
      </mesh>
      <ISS />
      <Moon />
      <Sun />
    </group>
  );
};

Earth.propTypes = {
  displacementScale: PropTypes.number.isRequired,
};
