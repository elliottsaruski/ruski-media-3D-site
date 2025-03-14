import { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import {
  AccumulativeShadows,
  ContactShadows,
  Environment,
  OrbitControls,
  PerspectiveCamera,
  PresentationControls,
  RandomizedLight,
} from "@react-three/drei";
import { Model as Floor } from "./components/Floor";
import { Model as TvBody } from "./components/TvBody";
import { Model as Screen } from "./components/Screen";

import "./App.css";

function App() {
  return (
    <div id="canvas-wrapper">
      <Canvas style={{ background: "#000000" }}>
        <PerspectiveCamera
          makeDefault
          position={[0, 0.5, 8]}
          focus={100}
          far={1000}
          near={0.1}
        />
        {/* <ambientLight intensity={0.15} /> */}
        <spotLight position={[2, 3, 10]} color="blue" intensity={20} />
        <spotLight position={[0, 10, -5]} color="blue" intensity={20} />
        <spotLight position={[0, 0, 10]} color="white" intensity={50} />

        <PresentationControls
          enabled={true} // the controls can be disabled by setting this to false
          global={true} // Spin globally or by dragging the model
          cursor={true} // Whether to toggle cursor style on drag
          snap={true} // Snap-back to center (can also be a spring config)
          speed={1} // Speed factor
          zoom={1} // Zoom factor when half the polar-max is reached
          rotation={[0.2, 0.05, 0]} // Default rotation
          polar={[0, Math.PI / 2]} // Vertical limits
          azimuth={[-Infinity, Infinity]} // Horizontal limits
          config={{ mass: 1, tension: 170, friction: 26 }} // Spring config
          // domElement={events.connected} // The DOM element events for this controller will attach to
        >
          <Suspense fallback={null}>
            <Floor />
            <TvBody />
            <Screen />
            {/* <OrbitControls /> */}

            {/* <Environment
              preset="night"
              // background
              backgroundBlurriness={10}
              intensity={0}
            /> */}
            <AccumulativeShadows temporal frames={100} scale={10}>
              <RandomizedLight amount={10} position={[5, 5, -10]} />
            </AccumulativeShadows>
          </Suspense>
        </PresentationControls>
      </Canvas>
    </div>
  );
}

export default App;
