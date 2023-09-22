import { Canvas } from "@react-three/fiber";
import Experience from "./Experience";
import { Html, OrbitControls, Text3D } from "@react-three/drei";
import { useEffect, useRef, useState } from "react";
const App = () => {
  const [dx, setDx] = useState(0);
  const [dy, setDy] = useState(0);
  const handleMove = (moveDx, moveDy) => {
    // Accumulate the movement values
    setDx((prevDx) => prevDx + moveDx);
    setDy((prevDy) => prevDy + moveDy);
  };
  return (
    <div style={{ height: "100vh", position: "relative" }}>
      <Canvas shadows camera={{ position: [0, 2, 5] }}>
        <OrbitControls makeDefault />
        <Experience dx={dx} dy={dy} />
      </Canvas>
      <div
        style={{
          position: "absolute",
          bottom: 0,
          right: 0,
          display: "flex",
          flexDirection: "column",
          alignItems: "end",
          gap: 5,
          margin: 5,
        }}
      >
        <h3>Click on the screen to start</h3>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 5,
            fontWeight: "600",
          }}
        >
          Move Forward{" "}
          <div
            style={{
              fontSize: "30px",
              border: "2px solid black",
              padding: "2px",
              textAlign: "center",
              height: "35px",
              width: "35px",
            }}
            onClick={() =>handleMove(0,-0.6)}
          >
            ↑
          </div>
        </div>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 5,
            fontWeight: "600",
          }}
        >
          Move Left{" "}
          <div
            style={{
              fontSize: "30px",
              border: "2px solid black",
              padding: "2px",
              textAlign: "center",
              height: "35px",
              width: "35px",
            }}
            onClick={() =>handleMove(0.6,0)}
          >
            ←
          </div>
        </div>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 5,
            fontWeight: "600",
          }}
        >
          Move Right{" "}
          <div
            style={{
              fontSize: "30px",
              border: "2px solid black",
              padding: "2px",
              textAlign: "center",
              height: "35px",
              width: "35px",
            }}
            onClick={() =>handleMove(0.6,0)}

          >
            →
          </div>
        </div>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 5,
            fontWeight: "600",
          }}
        >
          Move Backward{" "}
          <div
            style={{
              fontSize: "30px",
              border: "2px solid black",
              padding: "2px",
              textAlign: "center",
              height: "35px",
              width: "35px",
            }}
            onClick={() =>handleMove(0,0.6)}

          >
            ↓
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
