import {
  OrbitControls,
  Sky,
  useGLTF,
  useAnimations,
  Scroll,
  useScroll,
  PivotControls,
  Environment,
  Text,
  Float,
  MeshReflectorMaterial,
  ScrollControls,
  SoftShadows,
  AccumulativeShadows,
  Stars,
  Cloud,
  Html,
  useTexture,
  Text3D,
} from "@react-three/drei";
import { Model } from "./Adveturer";
import { Village } from "./village";
const Experience = (props) => {


  const aoTexture = useTexture("/3d/textures/park_sand_ao_1k.png");
  const disp = useTexture("/3d/textures/park_sand_disp_1k.png");
  const roughMap = useTexture("/3d/textures/park_sand_rough_1k.png");
  return (
    <>
      <ambientLight intensity={1} />
      <Sky />
      <directionalLight position={[1, 5, 5]} intensity={10} castShadow />
      <Village />
      <Model dx={props.dx} dy={props.dy} />
      <mesh
        position={[0, 0, -1]}
        scale={2000}
        rotation-x={-Math.PI / 2}
        receiveShadow
      >
        <planeGeometry receiveShadow />
        <meshStandardMaterial
          receiveShadow
          color={"#C2B280"}
          map={aoTexture}
          roughnessMap={roughMap}
        />
      </mesh>
    </>
  );
};

export default Experience;
