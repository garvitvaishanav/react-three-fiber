import { useRef, useEffect } from "react";
import { TransformControls } from "@react-three/drei";
import * as THREE from "three";

const SectionPlanes = () => {
    const planeRef = useRef(new THREE.Plane(new THREE.Vector3(0, -1, 0), 0));
    const helperRef = useRef(null);

    // useEffect(() => {
    //     if (!helperRef.current) return;
        
    //     // On every frame we sync helper position to plane constant
    //     const updatePlane = () => {
    //         if (!helperRef.current) return;
            
    //         // Get helper's world position
    //         helperRef.current.updateMatrixWorld();
    //         const position = new THREE.Vector3();
    //         helperRef.current.getWorldPosition(position);

    //         // Update the plane's constant
    //         planeRef.current.constant = -position.y; // because normal is (0, -1, 0)
    //     };

    //     helperRef.current.addEventListener('change', updatePlane);

    //     return () => {
    //         helperRef.current?.removeEventListener('change', updatePlane);
    //     };
    // }, []);

    return (
        <>
            <TransformControls mode="translate">
                <mesh ref={helperRef} position={[0, 0, 0]}>
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