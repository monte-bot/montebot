"use client";

import { useRef } from "react";
import { useFrame } from "@react-three/fiber";
import { useGLTF } from "@react-three/drei";
import * as THREE from "three";

export default function RobotModel() {
    //Carrega o modelo GLTF
    const { scene } = useGLTF("/models/robot/scene.gltf");

    //Referência para o objeto 3D
    const modelRef = useRef<THREE.Group>(null);

    //Rotaciona o modelo continuamente
    useFrame(() => {
        if (modelRef.current) {
            modelRef.current.rotation.y += 0.005;
        }
    });

    //Renderiza o modelo
    return <primitive ref={modelRef} object={scene} scale={4} />;
}