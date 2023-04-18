import React from 'react'
import '../../components/public/css/ButtonStyle.css'

export const Button = ({handleClick}) => {
  return (
    <div className='boton-contenedor'>

        <button className='boton' onClick = {handleClick}>Haz click aqui!</button>

    </div>
  )
}
