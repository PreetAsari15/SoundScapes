/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Author: silvercrow101 (https://sketchfab.com/silvercrow101)
License: CC-BY-NC-4.0 (http://creativecommons.org/licenses/by-nc/4.0/)
Source: https://sketchfab.com/3d-models/space-boi-f6a8c6a6727b4f2cb020c8b50bb2ee60
Title: space boi
*/

import { useRef, useEffect } from "react";
import { useGLTF } from "@react-three/drei";
import { useFrame, useThree } from "@react-three/fiber";
import { a } from "@react-spring/three";

import spaceScene from "../assets/3d/space_boi.glb";
// import { space } from "postcss/lib/list";
const Space = ({isRotating, setIsRotating, ...props}) => {
  const spaceRef = useRef();

  const{gl, viewport} = useThree();
  const { nodes, materials } = useGLTF(spaceScene);

  const lastX = useRef(0);
  const rotationSpeed = useRef(0);
  const dampingFactor = 0.95;

  const handlePointerDown = (e) => {
    e.stopPropagation();
    e.preventDefault();
    setIsRotating(true);

    const clientX = e.touches
    ? e.touches[0].clientX
    : e.clientX;

    lastX.current = clientX;
  }
  const handlePointerUp = (e) => {
    e.stopPropagation();
    e.preventDefault();
    setIsRotating(false);
  }
  const handlePointerMove = (e) => {
    e.stopPropagation();
    e.preventDefault();

    if(isRotating)
    {
        const clientX = e.touches
    ? e.touches[0].clientX
    : e.clientX;

    const delta = (clientX - lastX.current) / viewport.width;

    spaceRef.current.rotation.y += delta * 0.01 * Math.PI;

    lastX.current = clientX;

    rotationSpeed.current = delta * 0.01 * Math.PI;
    }
  }

  const handleKeyDown = (e) => {
    if(e.key === 'ArrowLeft'){
        if(!isRotating) setIsRotating(true);
        spaceRef.current.rotation.y += 0.01 * Math.PI;
    }else if(e.key === 'ArrowRight'){
        if(!isRotating) setIsRotating(true);
        spaceRef.current.rotation.y -= 0.01 * Math.PI;
    }
  }

  const handleKeyUp = (e) => {
    if(e.key === 'ArrowLeft' || e.key === 'ArrowRight'){
        setIsRotating(false);
    }
  }
  useFrame (() => {
    if(!isRotating){
        rotationSpeed.current *= dampingFactor;

        if(Math.abs(rotationSpeed.current)<1){
            rotationSpeed.current = 0;
            spaceRef.current.rotation.y += rotationSpeed.current;
        }
        else{
            const rotation = spaceRef.current.rotation.y;
            const normalizedRotation =
        ((rotation % (2 * Math.PI)) + 2 * Math.PI) % (2 * Math.PI);

      // Set the current stage based on the island's orientation
      switch (true) {
        case normalizedRotation >= 5.45 && normalizedRotation <= 5.85:
          setCurrentStage(4);
          break;
        case normalizedRotation >= 0.85 && normalizedRotation <= 1.3:
          setCurrentStage(3);
          break;
        case normalizedRotation >= 2.4 && normalizedRotation <= 2.6:
          setCurrentStage(2);
          break;
        case normalizedRotation >= 4.25 && normalizedRotation <= 4.75:
          setCurrentStage(1);
          break;
        default:
          setCurrentStage(null);
      }
        }
    }
  })
// useFrame(() => {
//     // If not rotating, apply damping to slow down the rotation (smoothly)
//     if (!isRotating) {
//       // Apply damping factor
//       rotationSpeed.current *= dampingFactor;

//       // Stop rotation when speed is very small
//       if (Math.abs(rotationSpeed.current) < 0.001) {
//         rotationSpeed.current = 0;
//       }

//       spaceRef.current.rotation.y += rotationSpeed.current;
//     } else {
//       // When rotating, determine the current stage based on island's orientation
//       const rotation = spaceRef.current.rotation.y;

//       /**
//        * Normalize the rotation value to ensure it stays within the range [0, 2 * Math.PI].
//        * The goal is to ensure that the rotation value remains within a specific range to
//        * prevent potential issues with very large or negative rotation values.
//        *  Here's a step-by-step explanation of what this code does:
//        *  1. rotation % (2 * Math.PI) calculates the remainder of the rotation value when divided
//        *     by 2 * Math.PI. This essentially wraps the rotation value around once it reaches a
//        *     full circle (360 degrees) so that it stays within the range of 0 to 2 * Math.PI.
//        *  2. (rotation % (2 * Math.PI)) + 2 * Math.PI adds 2 * Math.PI to the result from step 1.
//        *     This is done to ensure that the value remains positive and within the range of
//        *     0 to 2 * Math.PI even if it was negative after the modulo operation in step 1.
//        *  3. Finally, ((rotation % (2 * Math.PI)) + 2 * Math.PI) % (2 * Math.PI) applies another
//        *     modulo operation to the value obtained in step 2. This step guarantees that the value
//        *     always stays within the range of 0 to 2 * Math.PI, which is equivalent to a full
//        *     circle in radians.
//        */
//       const normalizedRotation =
//         ((rotation % (2 * Math.PI)) + 2 * Math.PI) % (2 * Math.PI);

//       // Set the current stage based on the island's orientation
//       switch (true) {
//         case normalizedRotation >= 5.45 && normalizedRotation <= 5.85:
//           setCurrentStage(4);
//           break;
//         case normalizedRotation >= 0.85 && normalizedRotation <= 1.3:
//           setCurrentStage(3);
//           break;
//         case normalizedRotation >= 2.4 && normalizedRotation <= 2.6:
//           setCurrentStage(2);
//           break;
//         case normalizedRotation >= 4.25 && normalizedRotation <= 4.75:
//           setCurrentStage(1);
//           break;
//         default:
//           setCurrentStage(null);
//       }
//     }
//   });
  useEffect(() => {
    const canvas = gl.domElement;
    canvas.addEventListener('pointerdown', handlePointerDown);
    canvas.addEventListener('pointerup', handlePointerUp);
    canvas.addEventListener('pointermove', handlePointerMove);
    document.addEventListener('keydown', handleKeyDown);
    document.addEventListener('keyup', handleKeyUp);

    return () => {
    canvas.removeEventListener('pointerdown', handlePointerDown);
    canvas.removeEventListener('pointerup', handlePointerUp);
    canvas.removeEventListener('pointermove', handlePointerMove);
    document.removeEventListener('keydown', handleKeyDown);
    document.removeEventListener('keyup', handleKeyUp);
}
  }, [gl, handlePointerDown, handlePointerUp, handlePointerMove])
  return (
    <a.group {...props} ref={spaceRef}>
      <group scale={0.01}>
        <group rotation={[-Math.PI / 2, 0, 0]} scale={100}>
          <mesh
            geometry={nodes.body_Material001_0.geometry}
            material={materials["Material.001"]}
          />
          <mesh
            geometry={nodes.body_Material002_0.geometry}
            material={materials["Material.002"]}
          />
        </group>
        <group
          position={[-357.404, 392.646, 0]}
          rotation={[-Math.PI / 2, 0, 0]}
          scale={39.706}
        >
          <mesh
            geometry={nodes.Sphere002_Material001_0.geometry}
            material={materials["Material.001"]}
          />
          <mesh
            geometry={nodes.Sphere002_Material002_0.geometry}
            material={materials["Material.002"]}
          />
        </group>
        <group
          position={[199.634, 566.883, -221.001]}
          rotation={[-Math.PI / 2, 0, 0]}
          scale={39.706}
        >
          <mesh
            geometry={nodes.Sphere007_Material001_0.geometry}
            material={materials["Material.001"]}
          />
          <mesh
            geometry={nodes.Sphere007_Material002_0.geometry}
            material={materials["Material.002"]}
          />
        </group>
        <mesh
          geometry={nodes.waves_Material002_0.geometry}
          material={materials["Material.002"]}
          rotation={[-Math.PI / 2, 0, 0]}
          scale={[100, 100, 1.891]}
        />
        <mesh
          geometry={nodes.waves1_Material002_0.geometry}
          material={materials["Material.002"]}
          rotation={[-Math.PI / 2, 0, 0]}
          scale={[100, 100, 1.891]}
        />
        <mesh
          geometry={nodes.waves2_Material002_0.geometry}
          material={materials["Material.002"]}
          position={[92.464, 15.529, 2.112]}
          rotation={[-Math.PI / 2, 0, 0]}
          scale={[100, 100, 1.891]}
        />
        <mesh
          geometry={nodes.particles_Material002_0.geometry}
          material={materials["Material.002"]}
          position={[489.69, 793.811, 355.293]}
          rotation={[-Math.PI / 2, 0, -Math.PI / 2]}
          scale={20.408}
        />
        <mesh
          geometry={nodes.Sphere_Material001_0.geometry}
          material={materials["Material.001"]}
          position={[375.469, 427.948, 0]}
          rotation={[-Math.PI / 2, 0, 0]}
          scale={62.402}
        />
        <mesh
          geometry={nodes.Sphere001_Material002_0.geometry}
          material={materials["Material.002"]}
          position={[375.469, 427.948, 0]}
          rotation={[-Math.PI / 2, 0, 0]}
          scale={60.324}
        />
        <mesh
          geometry={nodes.Sphere004_Material002_0.geometry}
          material={materials["Material.002"]}
          position={[375.469, 427.948, 0]}
          rotation={[-0.688, 0, 0]}
          scale={[104.129, 81.609, 0]}
        />
        <mesh
          geometry={nodes.Sphere005_Material001_0.geometry}
          material={materials["Material.001"]}
          position={[-341.988, 460.196, -117.028]}
          rotation={[-Math.PI / 2, 0, 0]}
          scale={62.402}
        />
        <mesh
          geometry={nodes.Sphere006_Material002_0.geometry}
          material={materials["Material.002"]}
          position={[-341.988, 460.196, -117.028]}
          rotation={[-Math.PI / 2, 0, 0]}
          scale={60.324}
        />
        <mesh
          geometry={nodes.Sphere009_Material002_0.geometry}
          material={materials["Material.002"]}
          position={[507.522, 667.594, -214.475]}
          rotation={[-Math.PI / 2, 0, 0]}
          scale={16.881}
        />
        <mesh
          geometry={nodes.Sphere010_Material002_0.geometry}
          material={materials["Material.002"]}
          position={[-287.442, 585.792, -311.857]}
          rotation={[-Math.PI / 2, 0, 0]}
          scale={16.881}
        />
        <mesh
          geometry={nodes.Sphere011_Material002_0.geometry}
          material={materials["Material.002"]}
          position={[-553.462, 331.074, -379.067]}
          rotation={[-Math.PI / 2, 0, 0]}
          scale={11.437}
        />
        <mesh
          geometry={nodes.Cube_Material001_0.geometry}
          material={materials["Material.001"]}
          position={[0, -101.673, 0]}
          rotation={[-Math.PI / 2, 0, 0]}
          scale={[1120.013, 1120.013, 100]}
        />
        <mesh
          geometry={nodes.Sphere003_Material002_0.geometry}
          material={materials["Material.002"]}
          position={[-357.404, 392.646, 0]}
          rotation={[-Math.PI / 2, 0, 0]}
          scale={41.075}
        />
        <mesh
          geometry={nodes.Sphere008_Material002_0.geometry}
          material={materials["Material.002"]}
          position={[199.634, 566.883, -221.001]}
          rotation={[-Math.PI / 2, 0, 0]}
          scale={41.075}
        />
      </group>
    </a.group>
  );
};

export default Space;
