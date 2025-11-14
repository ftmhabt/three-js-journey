import { useFrame } from "@react-three/fiber";
import { useRef } from "react";
import Inspector from "./Inspector";
import Planet from "./Planet";

export default function RotatingPlanet({ autoSpeed = 0.0005 }) {
  const autoRef = useRef();

  useFrame(() => {
    if (autoRef.current) {
      autoRef.current.rotation.y += autoSpeed;
    }
  });

  return (
    <group ref={autoRef}>
      <Inspector>
        <Planet />
      </Inspector>
    </group>
  );
}
