import React from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, Environment, useGLTF } from '@react-three/drei';


function CarModel() {
    // Load the GLTF model using useGLTF hook
    const { scene } = useGLTF('/3D-images/toon_car_3.glb'); // Replace with your model path

    return <primitive object={scene} scale={1.5} position={[0, -1, 0]} />;
}

const View3D = () => {
    return (
        <div className='page-margin'>
            <Canvas camera={{ position: [5, 2, 5], fov: 50 }}>
                {/* Lighting */}
                <ambientLight intensity={0.3} />
                <directionalLight position={[10, 10, 5]} intensity={1.5} />

                {/* 3D Model */}
                <CarModel />

                {/* Controls */}
                <OrbitControls enableZoom={true} />

                {/* Environment */}
                <Environment preset="city" />
            </Canvas>
            </div>
    )
}

export default View3D
