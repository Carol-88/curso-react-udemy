import React from 'react'
import { Fragment } from 'react'
import PropTypes from 'prop-types'

const newMessage = {
  message: 'Hola mundo',
  name: 'Carol'
}



//Lo que tenemos fuera del scope de la función
//es porque no cambia, sino, iria dentro para que cambie
//cuando se renderiza el componente.

export const FirstApp = ({tittle, subtittle, textmessage}) => {



const {message, name } = newMessage

  return (
    <Fragment> 
    <h1>{tittle}</h1>
    <h2>{subtittle}</h2>
    <p>{message} {name}</p>
    <p>{textmessage}</p>
    </Fragment>
  )
}

 //<></> es lo mismo que fragment y no necesita importación

 FirstApp.propTypes = {
  tittle: PropTypes.string.isRequired,
 }

 FirstApp.defaultProps = {
  subtittle: "Este es un subtitulo",
  textmessage: "Esto es una defaultprop"
 }