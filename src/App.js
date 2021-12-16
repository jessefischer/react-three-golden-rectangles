import React, { useRef } from "react";
import { Canvas, useFrame, useThree, extend } from "@react-three/fiber";
import * as THREE from "three";

import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";
import InfiniteGridHelper from "./lib/InfiniteGridHelper";

import "./App.css";

import ThreeGoldenRectangles from "./components/ThreeGoldenRectangles";
import Icosahedron from "./components/Icosahedron";
import Floor from "./components/Floor";

import * as Math from "mathjs";

extend({ OrbitControls });

// From https://codeworkshop.dev/blog/2020-04-03-adding-orbit-controls-to-react-three-fiber/
const CameraControls = ({target = [0,0,0]}) => {
  const {
    camera,
    gl: { domElement },
  } = useThree();
  const controls = useRef();
  useFrame(() => {
    controls.current.update();
  });
  return <orbitControls ref={controls} args={[camera, domElement]} target={target}/>;
};

const App = () => {
  return (
    <>
      <Canvas
        camera={{
          position: [0, 1.5, 2.5],
        }}
      >
        <CameraControls target={[0,1,0]}/>
        <directionalLight position={[-10, 20, 40]} />
        <directionalLight position={[2, -3, -4]} />
        <ThreeGoldenRectangles position={[0,1,0]}/>
        <InfiniteGridHelper color={new THREE.Color(0x00ccff)}/>
        <Icosahedron position={[0,1,0]} />
        <Floor
          color={new THREE.Color(0x444444)}
          position={[0, -0.01, 0]}
          rotation={[Math.pi / 2, 0, 0]}
        />
      </Canvas>
    </>
  );
};

export default App;
