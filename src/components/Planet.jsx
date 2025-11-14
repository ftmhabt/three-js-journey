import { useTexture } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { useRef } from "react";
import { Quaternion, Vector3 } from "three";

export default function Planet() {
  const meshRef = useRef();
  const texture = useTexture("/textures/earth.jpg");

  const axis = new Vector3(0, 1, 0);
  const q = new Quaternion();

  useFrame(() => {
    if (meshRef.current) {
      q.setFromAxisAngle(axis, 0.001);
      meshRef.current.quaternion.multiply(q);
    }
  });

  return (
    <mesh ref={meshRef}>
      <sphereGeometry args={[1, 64, 64]} />
      <meshStandardMaterial map={texture} />
    </mesh>
  );
}
