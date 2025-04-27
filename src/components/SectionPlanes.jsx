import { useRef } from "react";
import { TransformControls } from "@react-three/drei";
import * as THREE from "three";
import { useFrame } from "@react-three/fiber";
const SectionPlanes = () => {
    const planeRef = useRef(new THREE.Plane(new THREE.Vector3(0, -1, 0), 0));
    const meshRef = useRef(null);

    const planeXref = useRef(new THREE.Plane(new THREE.Vector3(-1, 0, 0), 0)); // X axis
    const meshXRef = useRef(null);

    useFrame(() => {
        if (!meshRef.current) return;
        meshRef.current.updateMatrixWorld();
        const position = new THREE.Vector3();
        meshRef.current.getWorldPosition(position);
        planeRef.current.constant = position.y; // because normal is (0, -1, 0)

        if (!meshXRef.current) return;
        meshXRef.current.updateMatrixWorld();
        const positionX = new THREE.Vector3();
        meshXRef.current.getWorldPosition(positionX);
        planeXref.current.constant = positionX.x; // because normal is (-1, 0, 0)
    })

    return (
        <>  
            <TransformControls mode="translate">
                <mesh ref={meshRef} visible={false}>
                    <boxGeometry args={[10, 10, 0.1]} />
                    <meshStandardMaterial color="red" />
                </mesh>
            </TransformControls>

            {/* Transform Controls for X clipping plane */}
            <TransformControls mode="translate">
                <mesh ref={meshXRef} visible={false}>
                    <boxGeometry args={[10, 10, 0.1]} />
                    <meshStandardMaterial color="green" />
                </mesh>
            </TransformControls>

            <mesh>
                <torusGeometry args={[1, 0.5, 16, 60]} />
                <meshStandardMaterial color="blue" clippingPlanes={[planeRef.current, planeXref.current]} />
            </mesh>
        </>
    );
}

export { SectionPlanes };