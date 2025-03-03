import React, { useState } from 'react'
import { Container } from '../../Styles/Styles'
import { ContatosLista, Item } from './Styles'
import { useDispatch, useSelector } from 'react-redux'
import { RootReducer } from '../../store/store'
import CadContato from '../../components/CardContato/CardContato'

const Lista = () => {
  const { itens } = useSelector((state: RootReducer) => state.contatos)
  const { termo, criterio, valor } = useSelector(
    (state: RootReducer) => state.filtro
  )

  const filtrarContatos = () => {
    let contatos = itens

    if (termo !== undefined) {
      contatos = contatos.filter(
        (contato) => contato.nome.toLowerCase().search(termo.toLowerCase()) >= 0
      )

      if (criterio === 'email') {
        contatos = contatos.filter((contato) => contato.email !== '')
      }
      if (criterio === 'telefone') {
        contatos = contatos.filter((contato) => contato.telefone !== '')
      }

      return contatos
    } else {
      return itens
    }
  }

  const valorFiltro = filtrarContatos()

  return (
    <Container>
      <ContatosLista>
        {valorFiltro.map((contato) => (
          <Item key={contato.id}>
            <CadContato
              id={contato.id}
              nome={contato.nome}
              email={contato.email}
              telefone={contato.telefone}
            />
          </Item>
        ))}
      </ContatosLista>
    </Container>
  )
}

export default Lista
