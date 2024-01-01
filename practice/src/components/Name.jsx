import React,{useState} from 'react'

const Name = () => {
    const users=["nati","ab","cd","ef"]
    const[name,setName]=useState("nati")
 let[index,setIndex]=useState(1)

    const Next= () => {
        if(index===4)
        index=0
        setName(users[index])
        setIndex(index+1)
    }
    const Prev= () => {
        if(index===-1)
        index=3
        setName(users[index])
        setIndex(index-1)
    }
  return (
    <div>
    <h1> User Name: {name}</h1>
    <button onClick={Prev}>prev</button>  
    <button onClick={Next}>Next</button>
    </div>
  )
}

export default Name
