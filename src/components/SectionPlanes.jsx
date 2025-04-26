import { useRef } from "react";
import { TransformControls } from "@react-three/drei";
import * as THREE from "three";
import { useFrame } from "@react-three/fiber";
const SectionPlanes = () => {
    const planeRef = useRef(new THREE.Plane(new THREE.Vector3(0, -1, 0), 0));
    const meshRef = useRef(null);

    useFrame(() => {
        if (!meshRef.current) return;
        meshRef.current.updateMatrixWorld();
        const position = new THREE.Vector3();
        meshRef.current.getWorldPosition(position);
        planeRef.current.constant = position.y; // because normal is (0, -1, 0)
    })

    return (
        <>  
            <TransformControls mode="translate">
                <mesh ref={meshRef} visible={false}>
                    <boxGeometry args={[10, 10, 0.1]} />
                    <meshStandardMaterial color="red" />
                </mesh>
            </TransformControls>

            <mesh>
                <torusGeometry args={[1, 0.5, 16, 60]} />
                <meshStandardMaterial color="blue" clippingPlanes={[planeRef.current]} />
            </mesh>
        </>
    );
}

export { SectionPlanes };