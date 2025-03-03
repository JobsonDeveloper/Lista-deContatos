import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import * as enums from '../../utils/Contato'

type Props = {
  termo?: string
  criterio: 'email' | 'telefone' | 'todos'
  valor?: enums.Criterios
}

const initialState: Props = {
  criterio: 'todos',
  termo: ''
}

const filtroSlice = createSlice({
  name: 'filtro',
  initialState,
  reducers: {
    alteraTermo: (state, action: PayloadAction<string>) => {
      state.termo = action.payload
    },
    alteraFiltro: (state, action: PayloadAction<Props>) => {
      state.criterio = action.payload.criterio
      state.valor = action.payload.valor
    }
  }
})

export const { alteraTermo, alteraFiltro } = filtroSlice.actions
export default filtroSlice.reducer
