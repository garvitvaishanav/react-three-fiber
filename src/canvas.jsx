import { SectionPlanes } from './components/SectionPlanes';
import { TransformControls } from '@react-three/drei';
import { Canvas } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import { Suspense } from 'react';
export const ThreejsCanvas = () => {
    return (
        <div
            style={{
                backgroundColor: 'grey',
                height: '100vh',
                width: '100vw',
            }}
        >
            <Suspense fallback={<div>Loading...</div>}>
                <Canvas gl={{ localClippingEnabled: true }}>
                    <ambientLight intensity={0.5} />
                    <directionalLight position={[10, 10, 10]} intensity={0.5} />
                    <directionalLight
                        position={[-10, -10, -10]}
                        intensity={0.5}
                    />
                    
                        <mesh position={[2, 2, 2]}>
                            <torusGeometry args={[1, 0.5, 16, 60]} />
                            <meshStandardMaterial color="red" > 
                                <plane attach="clippingPlanes-0" normal={[0, -1, 0]} constant={0} />
                            </meshStandardMaterial>
                        </mesh>
                    
                    <OrbitControls makeDefault/>
                    <SectionPlanes/>
                </Canvas>
            </Suspense>
        </div>
    );
};