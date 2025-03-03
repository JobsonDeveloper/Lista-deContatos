import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import Contato from '../../models/contato'

type ContatoProps = {
  itens: Contato[]
}

const initialState: ContatoProps = {
  itens: [
    {
      id: 1,
      nome: 'Jobson',
      email: '',
      telefone: '(81) 9 2222-2222'
    },
    {
      id: 2,
      nome: 'Valter',
      email: 'Valter@gmail.com',
      telefone: ''
    },
    {
      id: 3,
      nome: 'Maria',
      email: 'Maria@gmail.com',
      telefone: '(81) 9 3333-3333'
    }
  ]
}

const contatosSlice = createSlice({
  name: 'contatos',
  initialState,
  reducers: {
    cadastrar: (state, action: PayloadAction<Omit<Contato, 'id'>>) => {
      const contatoJaExiste = state.itens.find(
        (contato) =>
          contato.nome.toLowerCase() === action.payload.nome.toLowerCase()
      )

      if (contatoJaExiste) {
        alert('Contato já existente!')
      } else {
        const novoContato = {
          ...action.payload,
          id: state.itens.length + 1
        }

        state.itens.push(novoContato)
      }
    },
    editar: (state, action: PayloadAction<Contato>) => {
      const idxContato = state.itens.findIndex(
        (item) => item.id === action.payload.id
      )

      if (idxContato >= 0) {
        state.itens[idxContato] = action.payload
      }
    },
    excluir: (state, action: PayloadAction<number>) => {
      state.itens = state.itens.filter((item) => item.id != action.payload)
    }
  }
})

export const { cadastrar, editar, excluir } = contatosSlice.actions
export default contatosSlice.reducer
