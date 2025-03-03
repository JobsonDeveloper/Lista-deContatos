import React from 'react'
import { Container } from '../../Styles/Styles'
import BarraLateral from '../../containers/BarraLateral/BarraLateral'
import Lista from '../../containers/ListaContatos/Lista'
import ButtonRedirect from '../../components/ButtonRedirect/ButtonRedirect'

const Home = () => {
  return (
    <>
      <BarraLateral />
      <Lista />
      <ButtonRedirect pagina="lista" />
    </>
  )
}

export default Home
