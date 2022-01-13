import { useState } from "react";
import { Canvas } from "@react-three/fiber";
import * as THREE from "three";

import { OrbitControls } from "@react-three/drei";
import InfiniteGridHelper from "./lib/InfiniteGridHelper";

import "./App.css";

import ThreeGoldenRectangles from "./components/ThreeGoldenRectangles";
import Icosahedron from "./components/Icosahedron";
import Controls from "./components/Controls";

import { COLORS } from "./constants/colors";
import { DEFAULTS } from "./constants/defaults";

const App = () => {
  const [appState, setAppState] = useState( DEFAULTS );

  const handleUpdateControls = (e) => {
    setAppState( currentState => ({...currentState, [e.target.name]: e.target.value}) );
  };

  return (
    <>
      <Canvas
        camera={{
          position: [0, 1.5, 2.5],
        }}
      >
        <OrbitControls target={[0, 1, 0]} />
        <directionalLight position={[-10, 20, 40]} />
        <directionalLight position={[2, -3, -4]} />
        <ThreeGoldenRectangles
          position={[0, 1, 0]}
          opacity={appState.rectOpacity}
          autorotate={appState.autorotate}
        />
        <Icosahedron
          position={[0, 1, 0]}
          opacity={appState.icoOpacity}
          autorotate={appState.autorotate}
        />
        <InfiniteGridHelper color={new THREE.Color( COLORS.Cyan)} />
      </Canvas>
      <Controls
        icoOpacity={appState.icoOpacity}
        rectOpacity={appState.rectOpacity}
        autorotate={appState.autorotate}
        handleUpdateControls={handleUpdateControls}
      />
      <div className="source">
        <a href="https://github.com/jessefischer/three-golden-rectangles">
          Source / Credits
        </a>
      </div>
    </>
  );
};

export default App;
