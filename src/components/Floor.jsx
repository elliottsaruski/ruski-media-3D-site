import React from "react";
import { useGLTF } from "@react-three/drei";

export function Model(props) {
  const { nodes, materials } = useGLTF("four/floor/staticmodels-floor.gltf");
  return (
    <group {...props} dispose={null}>
      <mesh
      scale={2}
        receiveShadow
        geometry={nodes.floor.geometry}
        material={materials["Wood Floor.001"]}
      />
      {/* SHADOW CATCHER */}
    </group>
  );
}

useGLTF.preload("four/floor/staticmodels-floor.gltf");
