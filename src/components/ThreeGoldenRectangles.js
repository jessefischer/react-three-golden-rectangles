import React, { useRef } from "react";
import { useFrame } from "@react-three/fiber";

import GoldenRectangle from "./GoldenRectangle";

import * as Math from "mathjs";

const ThreeGoldenRectangles = ({
  opacity = 1,
  scale = 1,
  position = [0, 0, 0],
  spinSpeed = 0.5,
  ...props
}) => {
  const tgrRef = useRef();

  useFrame(() => {
    tgrRef.current.rotation.y -= 0.01 * spinSpeed;
  });

  return (
    <group ref={tgrRef}>
      <GoldenRectangle
        opacity={opacity}
        color="blue"
        position={position}
        rotation={[0, 0, 0]}
      />
      <GoldenRectangle
        opacity={opacity}
        color="red"
        position={position}
        rotation={[0, Math.pi / 2, Math.pi / 2]}
      />
      <GoldenRectangle
        opacity={opacity}
        color="yellow"
        position={position}
        rotation={[Math.pi / 2, 0, Math.pi / 2]}
      />
    </group>
  );
};

export default ThreeGoldenRectangles;
