import React from 'react'
import BarraLateral from '../../containers/BarraLateral/BarraLateral'
import Formulario from '../../components/Formulario/Formulario'
import ButtonRedirect from '../../components/ButtonRedirect/ButtonRedirect'
import { Container } from '../../Styles/Styles'

const Cadastro = () => {
  return (
    <Container>
      <Formulario />
      <ButtonRedirect pagina="cadastro" />
    </Container>
  )
}

export default Cadastro
