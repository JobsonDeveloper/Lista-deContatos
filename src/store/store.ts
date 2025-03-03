import { configureStore } from '@reduxjs/toolkit'
import constosSlice from './reducers/Contatos'
import filtro from './reducers/Filtro'

const store = configureStore({
  reducer: {
    contatos: constosSlice,
    filtro: filtro
  }
})

export type RootReducer = ReturnType<typeof store.getState>
export default store
