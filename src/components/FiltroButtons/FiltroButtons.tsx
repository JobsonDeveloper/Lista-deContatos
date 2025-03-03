import React, { useEffect, useState } from 'react'
import { UserButton } from './Styles'
import { useDispatch, useSelector } from 'react-redux'
import { RootReducer } from '../../store/store'
import * as enums from '../../utils/Contato'
import { alteraFiltro } from '../../store/reducers/Filtro'

type Props = {
  legenda: string
  criterio: 'email' | 'telefone' | 'todos'
  valor?: enums.Criterios
  quantidade: number
}

const FiltroButtons = ({ legenda, criterio, valor, quantidade }: Props) => {
  const dispatch = useDispatch()
  const filtro = useSelector((state: RootReducer) => state.filtro)

  const filtrar = () => {
    dispatch(
      alteraFiltro({
        criterio,
        valor
      })
    )
  }

  const verificaAtivo = () => {
    const mesmoCriterio = filtro.criterio === criterio
    return mesmoCriterio
  }

  const ativo = verificaAtivo()

  return (
    <>
      <UserButton onClick={filtrar} ativo={ativo.toString()}>
        {legenda} <strong>{quantidade}</strong>
      </UserButton>
    </>
  )
}

export default FiltroButtons
