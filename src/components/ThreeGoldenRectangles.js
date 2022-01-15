import { useRef, useState } from "react";
import { useFrame } from "@react-three/fiber";

import GoldenRectangle from "./GoldenRectangle";

import { COLORS } from "../constants/colors";
import { SEQUENCES } from "../constants/sequences";

const ThreeGoldenRectangles = ({
  opacity = 1,
  scale = 1,
  position = [0, 0, 0],
  autorotate,
  handlePlay,
  ...props
}) => {
  const tgrRef = useRef();

  const [hoveredState, setHoveredState] = useState(null);

  const handleEnter = (e, rect) => {
    e.stopPropagation();
    setHoveredState( rect );
    document.body.style.cursor = 'pointer';
  }

  const handleLeave = (e) => {
    e.stopPropagation();
    setHoveredState( null );
    document.body.style.cursor = 'default';
  }

  useFrame(() => {
    tgrRef.current.rotation.y -= 0.01 * autorotate;
  });

  return (
    <group ref={tgrRef} {...props}>
      <GoldenRectangle
        opacity={opacity}
        color={COLORS.Red}
        position={position}
        rotation={[0, 0, 0]}
        hovered={hoveredState===0}
        handleEnter={(e)=>handleEnter(e,0)}
        handleLeave={handleLeave}
        handleClick={()=>handlePlay( SEQUENCES.Godle )}
      />
      <GoldenRectangle
        opacity={opacity}
        color={COLORS.Blue}
        position={position}
        rotation={[0, Math.PI / 2, Math.PI / 2]}
        hovered={hoveredState===1}
        handleEnter={(e)=>handleEnter(e,1)}
        handleLeave={handleLeave}
        handleClick={()=>handlePlay( SEQUENCES.Escher )}
      />
      <GoldenRectangle
        opacity={opacity}
        color={COLORS.Yellow}
        position={position}
        rotation={[Math.PI / 2, 0, Math.PI / 2]}
        hovered={hoveredState===2}
        handleEnter={(e)=>handleEnter(e,2)}
        handleLeave={handleLeave}
        handleClick={()=>handlePlay( SEQUENCES.Bach )}
      />
    </group>
  );
};

export default ThreeGoldenRectangles;
