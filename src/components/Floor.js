import React from "react";

import * as THREE from "three";

import * as Math from "mathjs";

const FLOOR_SIZE = 100;

const Floor = ({ color = "white", scale = 1, ...props }) => {
  return (
    <mesh {...props} scale={scale}>
      <planeGeometry args={[FLOOR_SIZE, FLOOR_SIZE]} />
      <meshStandardMaterial color="hsl( 0, 0%, 50% )" side={THREE.DoubleSide}/>
    </mesh>
  );
};

export default Floor;
