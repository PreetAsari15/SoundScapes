import React from "react";
import { Canvas } from "@react-three/fiber";
import { Suspense } from "react";
import Loader from "../components/Loader";

const Home = () => {
  return (
    // <div className='absolute top-28 left-0 right-0 z-0 flex items-center justify-center'>
    //   POPUP
    // </div>
    <section className="w-full h-screen relative">
      <Canvas
        className="w-full h-screen bg-transparent"
        camera={{ near: 0.1, far: 1000 }}
      ></Canvas>
      <Suspense fallback={<Loader />}>
          <directionalLight />
          <ambientLight />
          <pointLight />
          <spotLight />
          <hemisphereLight />

      </Suspense>
    </section>
  );
};

export default Home;
