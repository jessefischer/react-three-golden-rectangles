import { useMemo } from "react";

import { useSpring, animated } from "@react-spring/three";

import { phi as PHI } from "mathjs";
import { PLANE_WIDTH } from "../constants/defaults";

import { COLORS } from "../constants/colors";

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
  const lightenColor = useMemo(() => {
    switch (color) {
      case COLORS.Red:
        return COLORS.BrightRed;
      case COLORS.Blue:
        return COLORS.BrightBlue;
      case COLORS.Yellow:
        return COLORS.BrightYellow;
      default:
        return color;
    }
  }, [color]);

  const { animatedColor } = useSpring({
    animatedColor: hovered ? lightenColor : color,
  });

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
      <animated.meshStandardMaterial
        color={animatedColor}
        opacity={opacity}
        transparent={true}
      />
    </mesh>
  );
};

export default GoldenRectangle;
