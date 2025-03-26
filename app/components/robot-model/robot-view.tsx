"use client";

import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import { Suspense } from "react";
import RobotModel from "./index";

export default function RobotViewer() {
    return (
        <Canvas
            camera={{ position: [0, 2, 5], fov: 50 }}
            style={{ width: "35vw", height: "45vh" }}
        >
            <ambientLight intensity={0.5} />
            <directionalLight position={[5, 5, 5]} />

            <Suspense fallback={null}>
                <RobotModel />
            </Suspense>

            <OrbitControls enableZoom={false} enableRotate />
        </Canvas>
    );
}