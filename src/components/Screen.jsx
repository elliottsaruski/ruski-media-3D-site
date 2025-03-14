import React, { useRef } from "react";
import { Html, useGLTF } from "@react-three/drei";

export function Model(props) {
  const { nodes, materials } = useGLTF("four/screen/staticmodels-screen.gltf");

  const screenRef = useRef();

  return (
    <group {...props} dispose={null}>
      <mesh
        ref={screenRef}
        castShadow
        receiveShadow
        geometry={nodes.screen.geometry}
        material={materials.DefaultMaterial}
      />
      <Html
        distanceFactor={1.1}
        occlude
        wrapperClass="screen"
        prepend
        transform
        position={[0, 1.07, 0.799]}>
        <iframe
          width={600}
          height={550}
          src="https://www.youtube.com/embed/Ze5kqhsB-ZQ?si=3V9Fljtw5r7h-PVv"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerpolicy="strict-origin-when-cross-origin"
          allowfullscreen></iframe>
      </Html>
    </group>
  );
}

useGLTF.preload("four/screen/staticmodels-screen.gltf");
