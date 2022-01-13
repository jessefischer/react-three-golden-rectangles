import React from "react";

import { phi as PHI } from "mathjs";
import { PLANE_WIDTH } from "../constants/defaults"

const GoldenRectangle = ({
  color = "white",
  scale = 1,
  opacity = 1,
  handleClick,
  ...props
}) => {
  return (
    <mesh {...props} scale={scale}>
      <boxGeometry args={[1, PHI, PLANE_WIDTH]} />
      <meshStandardMaterial
        color={color}
        opacity={opacity}
        transparent={true}
      />
    </mesh>
  );
};

export default GoldenRectangle;
