import React from 'react'
import Cliploader from 'react-spinners/ClipLoader';
const Spinner = ({loading}) => {

    const override = {
        display: 'block',
        margin: '100px auto',
    
    }
  return (
    <Cliploader loading={loading} color='blue' cssOverride={override} size={150}/>
  )
}

export default Spinner
