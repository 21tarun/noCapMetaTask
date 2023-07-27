import { OrbitControls,Html } from "@react-three/drei";
import { Room } from "./Room";

export const Vertual = (props) => {
    
  return (
    <>
      <OrbitControls />
      <ambientLight intensity={1} />
      <Room  info={props}/>

    </>
  );
};


