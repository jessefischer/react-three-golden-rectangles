import { useRef, useState } from "react";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import * as THREE from "three";

import { OrbitControls } from "@react-three/drei";
import InfiniteGridHelper from "./lib/InfiniteGridHelper";

import "./App.css";

import ThreeGoldenRectangles from "./components/ThreeGoldenRectangles";
import Icosahedron from "./components/Icosahedron";
import Floor from "./components/Floor";
import Controls from "./components/Controls";

import { COLORS } from "./constants/colors";
import { DEFAULTS } from "./constants/defaults";

const App = () => {
  const [icoOpacity, setIcoOpacity] = useState(DEFAULTS.icoOpacity);
  const [rectOpacity, setRectOpacity] = useState(DEFAULTS.rectOpacity);
  const [autorotate, setAutorotate] = useState(DEFAULTS.autorotate);

  const handleUpdateControls = (e) => {
    if (e.target.name === "icosahedronOpacity") {
      setIcoOpacity(e.target.value);
    }
    if (e.target.name === "rectanglesOpacity") {
      setRectOpacity(e.target.value);
    }
    if (e.target.name === "autorotate") {
      setAutorotate(e.target.value);
    }
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
          opacity={rectOpacity}
          autorotate={autorotate}
        />
        <Icosahedron
          position={[0, 1, 0]}
          opacity={icoOpacity}
          autorotate={autorotate}
        />
        <InfiniteGridHelper color={new THREE.Color(0x00ccff)} />
      </Canvas>
      <Controls
        icoOpacity={icoOpacity}
        rectOpacity={rectOpacity}
        autorotate={autorotate}
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
