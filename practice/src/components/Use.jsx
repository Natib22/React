import React,{useState} from 'react'
  


const Use = () => {

  const[count,setCount]=useState(0)
  const increament= ()=>{
    setCount(count+1)
  }

  const decreament= ()=> {
    setCount(count-1)
  }
  return (
    <div>
      <h1>count : {count} </h1>
      <button onClick={increament}>INC</button>
      <button onClick={decreament}>DEC</button>
    </div>
  )
}

export default Use
