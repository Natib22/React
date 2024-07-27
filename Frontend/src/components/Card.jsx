import React from 'react'

const Card = ( {title , subtitle , button_content  , button_back = 'black', bg = `#f7fafc`  } ) => {
  return (
    <div className='card' style={{ backgroundColor: bg }}>
      <h2> {title}</h2>
      <p>{subtitle}</p>
      <button className='Cardbutton' style={{ backgroundColor: button_back }} >{button_content}</button>
    </div>
  )
}

export default Card


