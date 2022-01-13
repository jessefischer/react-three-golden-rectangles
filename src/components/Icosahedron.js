import { useRef } from "react";
import { useFrame } from "@react-three/fiber";

import * as THREE from "three";
import { phi as PHI } from "mathjs";

const Icosahedron = ({
  color = "white",
  scale = 1,
  opacity = 1,
  position = [0, 0, 0],
  autorotate,
  ...props
}) => {
  const icoRef = useRef();

  useFrame(() => {
    icoRef.current.rotation.y -= 0.01 * autorotate;
  });

  const radius = (scale * Math.sqrt(1 + PHI * PHI)) / 2;
  return (
    <lineSegments position={position} ref={icoRef} {...props}>
      <edgesGeometry args={[new THREE.IcosahedronGeometry(radius, 0)]} />
      <lineBasicMaterial color={color} transparent={true} opacity={opacity} />
    </lineSegments>
  );
};

export default Icosahedron;
