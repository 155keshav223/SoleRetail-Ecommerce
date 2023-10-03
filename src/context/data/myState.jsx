import React, { useState } from 'react'
import MyContext from './myContext'


function myState(props) {
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
    const [loading,setLoading]=useState(false);
  return (
    <MyContext.Provider value ={{mode,toggleMode,loading,setLoading}} >
        {props.children}
    </MyContext.Provider>
  )
}
export default myState