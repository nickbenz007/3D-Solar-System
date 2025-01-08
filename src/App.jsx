import * as THREE from 'three';
import { Canvas } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import { Perf } from 'r3f-perf';
import { MainContainer } from './MainContainer';
// import { EffectComposer, Bloom } from '@react-three/postprocessing';

const App = () => {
  return (
    <div className="flex h-screen w-full justify-center items-center">
      <Canvas
        shadows={{ type: THREE.PCFSoftShadowMap }}
        camera={{ fov: 110, position: [0, 3, 7], near: 0.5, far: 500 }}
        dpr={[1, 1.5]}
      >
        <Perf openByDefault trackGPU={true} position="bottom-left" />
        <OrbitControls />
        <MainContainer />
        {/* Post-Processing Effects */}
        {/* <EffectComposer>
          <Bloom threshold={0.2} strength={1.0} radius={0.1} />
        </EffectComposer> */}
      </Canvas>
    </div>
  );
};

export default App;
