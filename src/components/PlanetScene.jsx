import { Stars } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import Planet from "./Planet";

export default function PlanetScene() {
  return (
    <div style={{ width: "100vw", height: "100vh" }}>
      <Canvas camera={{ position: [0, 0, 4], fov: 50 }}>
        {/* Lights (static) */}
        <ambientLight intensity={0.4} />
        <directionalLight position={[5, 5, 5]} intensity={1.2} />

        {/* Stars (static) */}
        <Stars
          radius={100}
          depth={50}
          count={5000}
          factor={4}
          saturation={0}
          fade
        />

        {/* Planet (rotates independently) */}
        <Planet />
      </Canvas>
    </div>
  );
}
