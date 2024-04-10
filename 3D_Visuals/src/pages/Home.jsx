import React from "react";
import { Canvas } from "@react-three/fiber";
import { useState, Suspense, useEffect, useRef } from "react";
import Loader from "../components/Loader";
import Space from "../models/SpaceBoi";
import Sky from "../models/Sky";
import HomeInfo from "../components/HomeInfo";
import { soundoff, soundon } from "../assets/icons";
import interstellar from "../assets/Interstellar.mp3"

const Home = () => {
  const audioRef = useRef(new Audio(interstellar))
  audioRef.current.volume = 0.7
  audioRef.current.loop = true
  const [isRotating, setIsRotating] = useState(false);
  const [currentStage, setCurrentStage] = useState(1);
  const [isPlayingMusic, setIsPlayingMusic] = useState(false)

  useEffect(() => {
    if(isPlayingMusic){
      audioRef.current.play();
    }

    return()=>{
      audioRef.current.pause();
    }
  })

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
    <section className="w-full h-screen relative">
      <div className='absolute top-28 left-0 right-0 z-0 flex items-center justify-center'>
         {currentStage && <HomeInfo currentStage={currentStage}/>}
      </div>
      <Canvas
        className={`w-full h-screen bg-transparent ${isRotating ? 'cursor-grabbing' : 'cursor-grab'}`}
        camera={{ near: 0.1, far: 1000 }}
      >
      <Suspense fallback={<Loader />}>
          <directionalLight position={[1, 1, 1]} intensity={1}/>
          <ambientLight intensity={0.5}/>
          <hemisphereLight skyColor="#b1e1ff" groundColor="#000000" intensity={1}/>
        <Sky isRotating={isRotating}/>
        <Space
        position = {spacePositioin}
        scale = {spaceScale}
        rotation = {spaceRoation}
        isRotating = {isRotating}
        setIsRotating = {setIsRotating}
        setCurrentStage = {setCurrentStage}
        />
      </Suspense>
      </Canvas>

      <div className='absolute bottom-2 left-2'>
        <img
          src={!isPlayingMusic ? soundoff : soundon}
          alt='jukebox'
          onClick={() => setIsPlayingMusic(!isPlayingMusic)}
          className='w-10 h-10 cursor-pointer object-contain'
        />
      </div>
    </section>
  );
};

export default Home;
