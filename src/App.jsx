import { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { Environment, OrbitControls } from "@react-three/drei";
import Model from "./components/Model";
import "./App.css";

function App() {
  return (
    <div id="canvas-wrapper">
      <Canvas>
        <Suspense fallback={null}>
          <Model />
          <OrbitControls />
          <Environment
            preset="sunset"
            background
            backgroundBlurriness={0.5}
            intensity={0.4}
          />
        </Suspense>
      </Canvas>
    </div>
  );
}

export default App;
