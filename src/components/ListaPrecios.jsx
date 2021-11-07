import React from 'react'
import { Precio } from './Precio'

export const ListaPrecios = () => {
  return (
    <article id="precios">
      <h2>Lista de precios</h2>
      <ul className="listaPrecios">
        <Precio euros="8,95" tiempo={20} corte="Arreglo barba premium"/>
        <Precio euros="10,95" tiempo={30} corte="Corte basico"/>
        <Precio euros="11,95" tiempo={40} corte="Corte personalizado + Lavado + peinado productos"/>
        <Precio euros="34,95" tiempo={59} corte="Reflejos y corte"/>
        <Precio euros="10,95" tiempo={30} corte="Ritual Afeitado de Barba Clásico"/>
        <Precio euros="9,95" tiempo={20} corte="Corte + Lavado + Acondicionado Senior - Jubilado"/>
        <Precio euros="9,95" tiempo={30} corte="Corte personalizado infantil + Peinado productos (hasta 8 años)"/>
        <Precio euros="15,95" tiempo={45} corte="Corte personalizado y barba premium + Lavado + Peinado productos"/>
        <Precio euros="13,95" tiempo={40} corte="Corte personalizado + perfilado de barba + lavado + peinado productos"/>
        <Precio euros="49,95" tiempo={150} corte="Decoloración + Matiz"/>
      </ul>
    </article>
  )
}
