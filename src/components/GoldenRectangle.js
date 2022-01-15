import { useMemo } from "react";

import { phi as PHI } from "mathjs";
import * as THREE from "three";
import { PLANE_WIDTH } from "../constants/defaults";

const GoldenRectangle = ({
  color = "white",
  scale = 1,
  opacity = 1,
  hovered,
  playing,
  handleClick,
  handleEnter,
  handleLeave,
  ...props
}) => {
  const lightenColor = useMemo( () =>
    new THREE.Color(color).addScalar(0.1), [color] );

  return (
    <mesh
      {...props}
      scale={scale}
      onClick={handleClick}
      onPointerEnter={handleEnter}
      onPointerOver={handleEnter}
      onPointerLeave={handleLeave}
    >
      <boxGeometry args={[1, PHI, PLANE_WIDTH]} />
      <meshStandardMaterial
        color={hovered ? lightenColor : color}
        opacity={opacity}
        transparent={true}
      />
    </mesh>
  );
};

export default GoldenRectangle;
