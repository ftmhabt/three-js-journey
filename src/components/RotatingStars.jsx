import { Stars } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { useRef } from "react";

export default function RotatingStars({ speed = 0.001 }) {
  const ref = useRef();

  useFrame(() => {
    ref.current.rotation.y += speed;
  });

  return (
    <group ref={ref}>
      <Stars
        radius={100}
        depth={50}
        count={5000}
        factor={4}
        saturation={0}
        fade
      />
    </group>
  );
}
