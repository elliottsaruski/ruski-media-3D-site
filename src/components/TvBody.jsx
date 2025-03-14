import React from "react";
import { useGLTF } from "@react-three/drei";

export function Model(props) {
  const { nodes, materials } = useGLTF("four/tv/staticmodels-tvbody.gltf");
  return (
    <group {...props} dispose={null}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.tvbody.geometry}
        material={materials.DefaultMaterial}
      />
    </group>
  );
}

useGLTF.preload("four/tv/staticmodels-tvbody.gltf");
