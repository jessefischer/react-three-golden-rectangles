import { useMemo, forwardRef } from "react";

import { useSpring, animated } from "@react-spring/three";

import { phi as PHI } from "mathjs";
import { PLANE_WIDTH } from "../constants/defaults";

import { COLORS } from "../constants/colors";

const GoldenRectangle = forwardRef(
  (
    {
      color = "white",
      scale = 1,
      opacity = 1,
      hovered,
      playing,
      handleClick,
      handleEnter,
      handleLeave,
      ...props
    },
    ref
  ) => {
    const lightenColor = useMemo(() => {
      switch (color) {
        case COLORS.Godel:
          return COLORS.BrightGodel;
        case COLORS.Escher:
          return COLORS.BrightEscher;
        case COLORS.Bach:
          return COLORS.BrightBach;
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
      animatedColor: hovered || playing ? lightenColor : color,
      config: {
        duration: 500
      }
    });

    return (
      <>
        <mesh
          {...props}
          ref={ref}
          scale={scale}
          onClick={handleClick}
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
      </>
    );
  }
);

export default GoldenRectangle;
