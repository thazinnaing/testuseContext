import React  from "react";
import { useContext } from "react";
import {nameContext} from "../App.jsx";



const Child2=()=>{
    const {username,setusername}=useContext(nameContext);


    const changeusername=()=>{
        setusername("Naing");
    }
    return(
        <>
            <div>
                <h6>{username} from child2</h6>
            </div>
            <button onClick={changeusername}>
                Click to change user name
            </button>
        </>
    )

}
export default Child2;