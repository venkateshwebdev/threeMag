import { Canvas } from "@react-three/fiber";
import Experience from "./Experience";
import { Html, OrbitControls } from "@react-three/drei";
import { useEffect, useRef } from "react";
const App = () => {
  return (
    <div style={{ height: "100vh", position: "relative" }}>
      <Canvas shadows camera={{ position: [0, 2, 5] }}>
        <OrbitControls makeDefault />
        <Experience />
      </Canvas>
      <div style={{ position: "absolute", bottom: 0, right: 0,display:"flex",flexDirection:"column",alignItems:"end",gap:5,margin:5}}>
        <div style={{ display: "flex", alignItems: "center",gap:5,fontWeight:"600" }}>
          Move Forward{" "}
          <div
            style={{
              fontSize: "30px",
              border: "2px solid black",
              padding: "2px",
              textAlign: "center",
              height:"35px",
              width:"35px",
            }}
          >
            ↑
          </div>
        </div>
        <div style={{ display: "flex", alignItems: "center",gap:5,fontWeight:"600" }}>
          Move Left{" "}
          <div
            style={{
              fontSize: "30px",
              border: "2px solid black",
              padding: "2px",
              textAlign: "center",
              height:"35px",
              width:"35px",
            }}
          >
            ←
          </div>
        </div>
        <div style={{ display: "flex", alignItems: "center",gap:5,fontWeight:"600" }}>
          Move Right{" "}
          <div
            style={{
              fontSize: "30px",
              border: "2px solid black",
              padding: "2px",
              textAlign: "center",
              height:"35px",
              width:"35px",
            }}
          >
            →
          </div>
        </div>
        <div style={{ display: "flex", alignItems: "center",gap:5,fontWeight:"600" }}>
          Move Backward{" "}
          <div
            style={{
              fontSize: "30px",
              border: "2px solid black",
              padding: "2px",
              textAlign: "center",
              height:"35px",
              width:"35px",
            }}
          >
            ↓
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
