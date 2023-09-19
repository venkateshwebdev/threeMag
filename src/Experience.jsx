import {OrbitControls,Sky,useGLTF,useAnimations,Scroll,useScroll, PivotControls, Environment, Text, Float, MeshReflectorMaterial, ScrollControls, SoftShadows, AccumulativeShadows, Stars, Cloud, Html, useTexture} from "@react-three/drei"
import { useEffect, useRef, useState } from "react";
import {easing} from "maath"
import { useFrame } from "@react-three/fiber";
import { Model } from "./Adveturer";
import { Village } from "./village";
const Experience = () => {
  const [message,setMeassge] = useState(false)
  const [startGame,setStartGame] = useState(false)
  const handleClick =()=>{
    setMeassge(prev=>!prev)
  }
  const aoTexture = useTexture("/3d/textures/park_sand_ao_1k.png");
  const disp = useTexture("/3d/textures/park_sand_disp_1k.png")
  const roughMap = useTexture("/3d/textures/park_sand_rough_1k.png")
  return (
    <>
    <ambientLight intensity={1} />
    <Sky  />
    <directionalLight position={[1,5,5]} intensity={10} castShadow />
      <Village />
      <Model  />
    <mesh position={[0,0,-1]} scale={2000} rotation-x={-Math.PI/2} receiveShadow>
      <planeGeometry receiveShadow/>
      <meshStandardMaterial receiveShadow color={"#C2B280"}  map={aoTexture} roughnessMap={roughMap} />
    </mesh>
    </>
  );
};

export default Experience;
