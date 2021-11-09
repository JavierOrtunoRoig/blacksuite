import React from 'react'
import { FormattedMessage } from 'react-intl'

/**
 * 
 * @param {string} id 
 * @param {*} value es un elemento JSX
 * @returns Un string en el idioma del provider y formateado con los parametros pasados
 * 
 * Para poder meter códgio jsx hay que poner en el string del archivo de idiomas metemos {valor} y cuando usemos translate hacemos tranlate(id, {valor: jsx element})
 */
const translate = (id, value={}) => <FormattedMessage id={id} values={{...value}} />

export default translate;