import { useTexture } from "@react-three/drei";

export default function Planet() {
  const texture = useTexture("/textures/earth.jpg");

  return (
    <mesh>
      <sphereGeometry args={[1, 64, 64]} />
      <meshStandardMaterial map={texture} />
    </mesh>
  );
}
