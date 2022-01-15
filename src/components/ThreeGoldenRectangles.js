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

  const handleEnter = (rect) => {
    setHoveredState( rect );
    document.body.style.cursor = 'pointer';
  }

  const handleLeave = () => {
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
        color={"red"}
        position={position}
        rotation={[0, 0, 0]}
        hovered={hoveredState===0}
        handleEnter={()=>handleEnter(0)}
        handleLeave={handleLeave}
        handleClick={()=>handlePlay( SEQUENCES.Godle )}
      />
      <GoldenRectangle
        opacity={opacity}
        color={"blue"}
        position={position}
        rotation={[0, Math.PI / 2, Math.PI / 2]}
        hovered={hoveredState===1}
        handleEnter={()=>handleEnter(1)}
        handleLeave={handleLeave}
        handleClick={()=>handlePlay( SEQUENCES.Escher )}
      />
      <GoldenRectangle
        opacity={opacity}
        color={"yellow"}
        position={position}
        rotation={[Math.PI / 2, 0, Math.PI / 2]}
        hovered={hoveredState===2}
        handleEnter={()=>handleEnter(2)}
        handleLeave={handleLeave}
        handleClick={()=>handlePlay( SEQUENCES.Bach )}
      />
    </group>
  );
};

export default ThreeGoldenRectangles;
