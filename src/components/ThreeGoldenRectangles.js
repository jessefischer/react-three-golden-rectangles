import React, { useRef } from "react";
import { useFrame } from "@react-three/fiber";

import GoldenRectangle from "./GoldenRectangle";

import { COLORS } from "../constants/colors";

const ThreeGoldenRectangles = ({
  opacity = 1,
  scale = 1,
  position = [0, 0, 0],
  autorotate,
  ...props
}) => {
  const tgrRef = useRef();

  useFrame(() => {
    tgrRef.current.rotation.y -= 0.01 * autorotate;
  });

  return (
    <group ref={tgrRef} {...props}>
      <GoldenRectangle
        opacity={opacity}
        color={COLORS.Godle}
        position={position}
        rotation={[0, 0, 0]}
      />
      <GoldenRectangle
        opacity={opacity}
        color={COLORS.Escher}
        position={position}
        rotation={[0, Math.PI / 2, Math.PI / 2]}
      />
      <GoldenRectangle
        opacity={opacity}
        color={COLORS.Bach}
        position={position}
        rotation={[Math.PI / 2, 0, Math.PI / 2]}
      />
    </group>
  );
};

export default ThreeGoldenRectangles;
