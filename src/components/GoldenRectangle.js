import React from "react";

import { phi } from "mathjs";

const PLANE_WIDTH = 0.005;

const GoldenRectangle = ({
  color = "white",
  scale = 1,
  opacity = 1,
  handleClick,
  ...props
}) => {
  return (
    <mesh {...props} scale={scale}>
      <boxGeometry args={[1, phi, PLANE_WIDTH]} />
      <meshStandardMaterial
        color={color}
        opacity={opacity}
        transparent={true}
      />
    </mesh>
  );
};

export default GoldenRectangle;
