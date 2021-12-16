import React, { useRef } from "react";
import { useFrame } from "@react-three/fiber";

import * as THREE from "three";
import * as Math from "mathjs";

const Icosahedron = ({ color = "white", scale = 1, position }) => {
    const icoRef = useRef();

    useFrame(() => {
        icoRef.current.rotation.y -= 0.005;
    });
  

  const radius = (scale * Math.sqrt(1 + Math.phi * Math.phi)) / 2;
  return (
    <lineSegments position={position} ref={icoRef}>
      <edgesGeometry args={[new THREE.IcosahedronGeometry(radius, 0)]} />
      <lineBasicMaterial color={color} />
    </lineSegments>
  );
};

export default Icosahedron;
