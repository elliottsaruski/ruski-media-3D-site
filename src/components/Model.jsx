import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";

export default function Model(props) {
  const { nodes, materials } = useGLTF("four/tableRM.gltf");
  const group = useRef();

  return (
    <group ref={group} {...props} dispose={null}>
      <group position={[0, 0.781, 0]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Handles.geometry}
          material={materials.BlackPlastic}
          position={[0.145, 0.2, 0.018]}
          rotation={[-0.217, 0, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Screen.geometry}
          material={materials.Screen}
          position={[0, 0.244, 0.013]}
          rotation={[1.353, 0, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Screen_frame.geometry}
          material={materials.BlackPlastic}
          position={[0, 0.244, 0.013]}
          rotation={[1.353, 0, 0]}>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cutter.geometry}
            material={nodes.Cutter.material}
            position={[0.145, -0.012, 0]}
            rotation={[0, 0, Math.PI]}
            scale={[1, 1, 0.872]}
          />
        </mesh>
      </group>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.TABLE.geometry}
        material={materials["Black Painted Wood"]}
      />
    </group>
  );
}

useGLTF.preload("four/tableRM.gltf");
