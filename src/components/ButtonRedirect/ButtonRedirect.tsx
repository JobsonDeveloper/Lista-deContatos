import React from 'react'
import { LinkRedirect } from './Styles'

type Prop = {
  pagina: 'cadastro' | 'lista'
}

const ButtonRedirect = ({ pagina }: Prop) => {
  return (
    <>
      {pagina === 'cadastro' ? (
        <LinkRedirect to="/">Listar contatos</LinkRedirect>
      ) : (
        <LinkRedirect to="/cadastro">Novo contato</LinkRedirect>
      )}
    </>
  )
}

export default ButtonRedirect
