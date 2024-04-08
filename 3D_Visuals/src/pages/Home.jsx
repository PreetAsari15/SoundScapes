import React from "react";
import { Canvas } from "@react-three/fiber";
import { Suspense } from "react";
import Loader from "../components/Loader";
import Space from "../models/SpaceBoi";
const Home = () => {
  const adjustSpaceForScreenSize = () => {
    let screenScale = null;
   let screenPosition = [0, -6.5,-43];
   let rotation = [0.1, 4.7, 0];

    if(window.innerWidth < 768) {
      screenScale = [0.9, 0.9, 0.9];
    }else{
      screenScale = [3, 3, 3];
    }
    return [screenScale, screenPosition, rotation];
  }
  const [spaceScale, spacePositioin, spaceRoation] = adjustSpaceForScreenSize();
  return (
    // <div className='absolute top-28 left-0 right-0 z-0 flex items-center justify-center'>
    //   POPUP
    // </div>
    <section className="w-full h-screen relative">
      <Canvas
        className="w-full h-screen bg-transparent"
        camera={{ near: 0.1, far: 1000 }}
      >
      <Suspense fallback={<Loader />}>
          <directionalLight />
          <ambientLight />
          <pointLight />
          <spotLight />
          <hemisphereLight />
        <Space
        position = {spacePositioin}
        scale = {spaceScale}
        rotation = {spaceRoation}
        />
      </Suspense>
      </Canvas>
    </section>
  );
};

export default Home;
