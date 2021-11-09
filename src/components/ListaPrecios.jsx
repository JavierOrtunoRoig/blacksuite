import React from 'react'
import { Precio } from './Precio'
import styles from '../styles/listaPrecios.module.css'
import translate from '../i18n/translate'

export const ListaPrecios = () => {
  return (
    <article id="precios" className={styles.precios} >
      <h2>{translate('precioTitulo')}</h2>
      <ul className={styles.listaPrecios}>
        <Precio euros="8,95" tiempo={20} corte={translate('precio1')}/>
        <Precio euros="10,95" tiempo={30} corte={translate('precio2')}/>
        <Precio euros="11,95" tiempo={40} corte={translate('precio3')}/>
        <Precio euros="34,95" tiempo={59} corte={translate('precio4')}/>
        <Precio euros="10,95" tiempo={30} corte={translate('precio5')}/>
        <Precio euros="9,95" tiempo={20} corte={translate('precio6')}/>
        <Precio euros="9,95" tiempo={30} corte={translate('precio7')}/>
        <Precio euros="15,95" tiempo={45} corte={translate('precio8')}/>
        <Precio euros="13,95" tiempo={40} corte={translate('precio9')}/>
        <Precio euros="49,95" tiempo={150} corte={translate('precio10')}/>
      </ul>
    </article>
  )
}
