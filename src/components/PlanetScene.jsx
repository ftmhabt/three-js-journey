import { Canvas } from "@react-three/fiber";
import Inspector from "./Inspector";
import Planet from "./Planet";
import RotatingStars from "./RotatingStars";

export default function PlanetScene() {
  return (
    <div style={{ width: "100vw", height: "100vh" }}>
      <Canvas camera={{ position: [0, 0, 4], fov: 50 }}>
        <color attach="background" args={["black"]} />

        <ambientLight intensity={0.4} />
        <directionalLight position={[5, 5, 5]} intensity={1.2} />

        <RotatingStars speed={0.0005} />

        <Inspector>
          <Planet />
        </Inspector>
      </Canvas>
    </div>
  );
}
