import { a, useSpring } from "@react-spring/three";
import { useMemo } from "react";
import { useDrag } from "react-use-gesture";
import * as THREE from "three";

export default function Inspector({ children }) {
  const euler = useMemo(() => new THREE.Euler(), []);

  const [spring, set] = useSpring(() => ({
    rotation: [0, 0, 0],
  }));

  const bind = useDrag(({ delta: [dx, dy] }) => {
    euler.y += dx * 0.002;
    euler.x += dy * 0.002;
    euler.x = THREE.MathUtils.clamp(euler.x, -Math.PI / 2, Math.PI / 2);
    set({ rotation: euler.toArray().slice(0, 3) });
  });

  return (
    <group>
      <a.group {...spring} {...bind()}>
        {children}
      </a.group>
    </group>
  );
}
