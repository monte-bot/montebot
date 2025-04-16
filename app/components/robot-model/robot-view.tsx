"use client";

import { Canvas, useThree } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import { Suspense, useEffect } from "react";
import RobotModel from "./index";

export default function RobotViewer() {
    const handleResize = () => {
        const canvasContainer = document.getElementById("canvas-container");
        if (canvasContainer) {
            const width = window.innerWidth <= 1024 ? "90vw" : "35vw";
            const height = "45vh";
            canvasContainer.style.width = width;
            canvasContainer.style.height = height;
        }
    };

    useEffect(() => {
        // Chama a função inicialmente e adiciona o listener de resize
        handleResize();
        window.addEventListener("resize", handleResize);

        // Remove o listener ao desmontar o componente
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    return (
        <div id="canvas-container" style={{ width: "35vw", height: "45vh" }}>
            <Canvas
                camera={{ position: [0, 2, 5], fov: 50 }}
            >
                <ambientLight intensity={0.5} />
                <directionalLight position={[5, 5, 5]} />

                <Suspense fallback={null}>
                    <RobotModel />
                </Suspense>

                <OrbitControls enableZoom={false} enableRotate />
            </Canvas>
        </div>
    );
}