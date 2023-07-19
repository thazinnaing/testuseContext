import React, { useState, createContext, useContext } from "react";
import Child1 from "./components/child1"

export const nameContext = createContext();

const App=()=>{
  const [username, setusername]= useState("Thazin");
  const name ="Alex";
  return(
    <div>
      <h1>
        <nameContext.Provider value={{username, setusername}}>

        <Child1/>


        </nameContext.Provider>

        

      </h1>

    </div>

    

  )

}
export default App;





