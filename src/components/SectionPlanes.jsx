import { TransformControls } from "@react-three/drei";

const SectionPlanes = () => {
    return (
        <>
        <TransformControls mode="translate" >
                                <mesh>
                                    <torusGeometry args={[1, 0.5, 16, 60]} />
                                    <meshStandardMaterial color="blue" > 
                                        <plane attach="clippingPlanes-0" normal={[0, -1, 0]} constant={0} />
                                    </meshStandardMaterial>
                                </mesh>
                            </TransformControls>
        </>
    );
    }

    export {SectionPlanes}