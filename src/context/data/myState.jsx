import React, { useState } from 'react'
import MyContext from './myContext'


function myState(props) {
    // const state ={
    //     name:"keshav",
    //     rollno:21
    // }
    const [mode,setmode]=useState('light')
    const toggleMode=() =>{
        if (mode==='light'){
            setmode('dark');
            document.body.style.backgroundColor="rgb(17,24,39)"
        }
        else{
            setmode('light');
            document.body.style.backgroundColor="white"
        } 
    } 
  return (
    // <MyContext.Provider value ={state} ></MyContext.Provider>
    
    <MyContext.Provider value ={{mode,toggleMode}} >
        {props.children}
    </MyContext.Provider>
  )
}

export default myState