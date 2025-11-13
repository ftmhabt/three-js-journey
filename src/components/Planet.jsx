import { a, useSpring } from "@react-spring/three";
import { useTexture } from "@react-three/drei";
import { useMemo, useRef } from "react";
import { useDrag } from "react-use-gesture";
import * as THREE from "three";

export default function Planet() {
  const planetRef = useRef < THREE.Group > null;
  const texture = useTexture("/textures/earth.jpg");

  // Spring for smooth rotation
  const [spring, set] = useSpring(() => ({ rotation: [0, 0, 0] }));

  // Euler to track rotation
  const euler = useMemo(() => new THREE.Euler(), []);

  // Drag handler
  const bind = useDrag(({ delta: [dx, dy] }) => {
    euler.y += dx * 0.002; // adjust sensitivity here
    euler.x += dy * 0.002;
    euler.x = THREE.MathUtils.clamp(euler.x, -Math.PI / 2, Math.PI / 2);
    set({ rotation: euler.toArray().slice(0, 3) });
  });

  return (
    <a.group ref={planetRef} {...spring} {...bind()}>
      <mesh>
        <sphereGeometry args={[1, 64, 64]} />
        <meshStandardMaterial map={texture} />
      </mesh>
    </a.group>
  );
}
