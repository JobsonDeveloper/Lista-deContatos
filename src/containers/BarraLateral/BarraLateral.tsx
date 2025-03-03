import { useEffect, useState } from 'react'
import { Aside, ContainerAside } from './Styles'
import FiltroButtons from '../../components/FiltroButtons/FiltroButtons'
import { UserInput } from '../../Styles/Styles'
import { useDispatch, useSelector } from 'react-redux'
import { alteraTermo } from '../../store/reducers/Filtro'
import { RootReducer } from '../../store/store'
import * as enums from '../../utils/Contato'

const BarraLateral = () => {
  const dispatch = useDispatch()
  const { termo } = useSelector((state: RootReducer) => state.filtro)
  const contatos = useSelector((state: RootReducer) => state.contatos.itens)
  const [numEmails, setNumEmails] = useState(0)
  const [numTelefones, setNumTelefones] = useState(0)

  useEffect(() => {
    let emails = 0
    let telefones = 0

    contatos.map((item) => {
      if (item.email != '') {
        emails++
        setNumEmails(emails)
      }
      if (item.telefone != '') {
        telefones++
        setNumTelefones(telefones)
      }
    })
  }, [contatos])

  return (
    <Aside>
      <ContainerAside>
        <UserInput
          type="text"
          placeholder="Nome do contato"
          value={termo}
          onChange={(ev) => dispatch(alteraTermo(ev.target.value))}
        />
        <FiltroButtons
          criterio="email"
          legenda="E-mail"
          valor={enums.Criterios.EMAIL}
          quantidade={numEmails}
        />
        <FiltroButtons
          criterio="telefone"
          legenda="Telefone"
          valor={enums.Criterios.TELEFONE}
          quantidade={numTelefones}
        />
        <FiltroButtons
          criterio="todos"
          legenda="Todos"
          quantidade={contatos.length}
        />
      </ContainerAside>
    </Aside>
  )
}

export default BarraLateral
