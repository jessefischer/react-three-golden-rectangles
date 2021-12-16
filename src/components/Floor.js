import React from "react";

import * as THREE from "three";

const FLOOR_SIZE = 100;

const Floor = ({ color = "white", scale = 1, ...props }) => {
  return (
    <mesh {...props} scale={scale}>
      <planeGeometry args={[FLOOR_SIZE, FLOOR_SIZE]} />
      <shaderMaterial
        args={[
          {
            side: THREE.DoubleSide,
            uniforms: {
              uSize1: { value: 10 },
              uSize2: { value: 100 },
              uColor: { value: "white" },
              uDistance: { value: 8000 },
            },
            extensions: { derivatives: true },
            transparent: true,
            vertexShader: `
           
           varying vec3 worldPosition;
		   
           uniform float uDistance;
           
           void main() {
           
                vec3 pos = position.xzy * uDistance;
                pos.xz += cameraPosition.xz;
                
                worldPosition = pos;
                
                gl_Position = projectionMatrix * modelViewMatrix * vec4(pos, 1.0);
           
           }
           `,

            fragmentShader: `
           
           varying vec3 worldPosition;
           
           uniform float uSize1;
           uniform float uSize2;
           uniform vec3 uColor;
           uniform float uDistance;
            
            
            
            float getGrid(float size) {
            
                vec2 r = worldPosition.xz / size;
                
                
                vec2 grid = abs(fract(r - 0.5) - 0.5) / fwidth(r);
                float line = min(grid.x, grid.y);
                
            
                return 1.0 - min(line, 1.0);
            }
            
           void main() {
           
                
                  float d = 1.0 - min(distance(cameraPosition.xz, worldPosition.xz) / uDistance, 1.0);
                
                  float g1 = getGrid(uSize1);
                  float g2 = getGrid(uSize2);
                  
                  
                  gl_FragColor = vec4(uColor.rgb, mix(g2, g1, g1) * pow(d, 3.0));
                  gl_FragColor.a = mix(0.5 * gl_FragColor.a, gl_FragColor.a, g2);
                
                  if ( gl_FragColor.a <= 0.0 ) discard;
                
           
           }
           
           `,
          },
        ]}
      />
      {/* <meshStandardMaterial color="hsl( 0, 0%, 50% )" side={THREE.DoubleSide}/> */}
    </mesh>
  );
};

export default Floor;
