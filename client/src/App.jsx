import { Canvas } from "@react-three/fiber";
import { Vertual } from "./components/Vertual";
import React from 'react'
import './App.css'


function App() {
  const [flag, setFlag] = React.useState(false)
  const [name, setName]= React.useState("")
  const [gender,setGender]= React.useState("")

  const onsubmit=()=>{
    if(name && gender){
      setFlag(true)
    }
    else{
      alert("name and gender is required")
    }
  }


  return (
    flag ?
      
      <Canvas shadows camera={{ position: [0, 2, 5] }}>
        <Vertual name={name} gender={gender} />
      </Canvas> :
      <div class="container">
        <div class="form-container">

          <label for="name">Name:</label>
          <input type="text" id="name" name="name" required onChange={(e)=>setName(e.target.value)}/>

          <label for="gender">Gender:</label>
          <select id="gender" name="gender" onChange={(e)=>setGender(e.target.value)} required>
            <option value="" disabled selected>Select your gender</option>
            <option value="male">male</option>
            <option value="female">female</option>

          </select>

          <input type="submit" value="Submit" onClick={()=>onsubmit()} />

        </div>
      </div>


  );
}

export default App;
