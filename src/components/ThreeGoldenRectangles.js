import { useRef, useState, forwardRef } from "react";
import { useFrame } from "@react-three/fiber";

import GoldenRectangle from "./GoldenRectangle";

import { COLORS } from "../constants/colors";
import { SEQUENCES } from "../constants/sequences";

const ThreeGoldenRectangles = forwardRef(({
  opacity = 1,
  scale = 1,
  position = [0, 0, 0],
  playingRect = null,
  autorotate,
  handlePlay,
  ...props
}, refs) => {
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
        ref={refs[0]}
        color={COLORS.Godel}
        position={position}
        rotation={[0, 0, 0]}
        hovered={hoveredState===0}
        playing={playingRect===0}
        handleEnter={(e)=>handleEnter(e,0)}
        handleLeave={handleLeave}
        handleClick={()=>handlePlay( 0, SEQUENCES.Godle )}
      />
      <GoldenRectangle
        ref={refs[1]}
        opacity={opacity}
        color={COLORS.Escher}
        position={position}
        rotation={[0, Math.PI / 2, Math.PI / 2]}
        hovered={hoveredState===1}
        playing={playingRect===1}
        handleEnter={(e)=>handleEnter(e,1)}
        handleLeave={handleLeave}
        handleClick={()=>handlePlay( 1, SEQUENCES.Escher )}
      />
      <GoldenRectangle
        ref={refs[2]}
        opacity={opacity}
        color={COLORS.Bach}
        position={position}
        rotation={[Math.PI / 2, 0, Math.PI / 2]}
        hovered={hoveredState===2}
        playing={playingRect===2}
        handleEnter={(e)=>handleEnter(e,2)}
        handleLeave={handleLeave}
        handleClick={()=>handlePlay( 2, SEQUENCES.Bach )}
      />
    </group>
  );
});

export default ThreeGoldenRectangles;
