import { Canvas } from "@react-three/fiber";

export default function TestCanvas() {
  return (
    <Canvas style={{ width: "100vw", height: "100vh" }}>
      <color attach="background" args={["black"]} />
    </Canvas>
  );
}
