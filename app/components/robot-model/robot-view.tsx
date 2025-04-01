"use client";

import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import { Suspense, useState, useEffect } from "react";
import RobotModel from "./index";

export default function RobotViewer() {
    const [canvasSize, setCanvasSize] = useState({ width: "35vw", height: "45vh" });

    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth <= 1024) {
                // Ajuste para telas menores (mobile)
                setCanvasSize({ width: "75vw", height: "45vh" });
            } else {
                // Ajuste para telas maiores
                setCanvasSize({ width: "35vw", height: "45vh" });
            }
        };

        // Chama a função inicialmente e adiciona o listener de resize
        handleResize();
        window.addEventListener("resize", handleResize);

        // Remove o listener ao desmontar o componente
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    return (
        <Canvas
            camera={{ position: [0, 2, 5], fov: 50 }}
            style={{ width: canvasSize.width, height: canvasSize.height }}
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