import React, { useRef, useState } from "react";
import { Canvas, useFrame, useThree, extend } from "@react-three/fiber";
import * as THREE from "three";

import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";
import InfiniteGridHelper from "./lib/InfiniteGridHelper";

import "./App.css";

import ThreeGoldenRectangles from "./components/ThreeGoldenRectangles";
import Icosahedron from "./components/Icosahedron";
import Floor from "./components/Floor";
import Controls from "./components/Controls";

import * as Math from "mathjs";

extend({ OrbitControls });

const ICO_START_OPACITY = 0;
const RECT_START_OPACITY = 1;
const START_SPIN_SPEED = 0.5;

// From https://codeworkshop.dev/blog/2020-04-03-adding-orbit-controls-to-react-three-fiber/
const CameraControls = ({ target = [0, 0, 0] }) => {
  const {
    camera,
    gl: { domElement },
  } = useThree();
  const controls = useRef();
  useFrame(() => {
    controls.current.update();
  });
  return (
    <orbitControls ref={controls} args={[camera, domElement]} target={target} />
  );
};

const App = () => {
  const [icoOpacity, setIcoOpacity] = useState(ICO_START_OPACITY);
  const [rectOpacity, setRectOpacity] = useState(RECT_START_OPACITY);
  const [spinSpeed, setSpinSpeed] = useState(START_SPIN_SPEED);

  const handleUpdateControls = (e) => {
    if (e.target.name === "icosahedronOpacity") {
      setIcoOpacity(e.target.value);
    }
    if (e.target.name === "rectanglesOpacity") {
      setRectOpacity(e.target.value);
    }
    if (e.target.name === "spinSpeed") {
      setSpinSpeed(e.target.value);
    }
  };

  return (
    <>
      <Canvas
        camera={{
          position: [0, 1.5, 2.5],
        }}
      >
        <CameraControls target={[0, 1, 0]} />
        <directionalLight position={[-10, 20, 40]} />
        <directionalLight position={[2, -3, -4]} />
        <ThreeGoldenRectangles
          position={[0, 1, 0]}
          opacity={rectOpacity}
          spinSpeed={spinSpeed}
        />
        <Icosahedron
          position={[0, 1, 0]}
          opacity={icoOpacity}
          spinSpeed={spinSpeed}
        />
        <InfiniteGridHelper color={new THREE.Color(0x00ccff)} />
        <Floor
          color={new THREE.Color(0x444444)}
          position={[0, -0.01, 0]}
          rotation={[Math.pi / 2, 0, 0]}
        />
      </Canvas>
      <Controls
        icoValue={icoOpacity}
        rectValue={rectOpacity}
        spinSpeed={spinSpeed}
        handleUpdateControls={handleUpdateControls}
      />
      <div className="source">
        <a href="https://github.com/jessefischer/react-three-golden-rectangles">
          Source
        </a>
      </div>
    </>
  );
};

export default App;
