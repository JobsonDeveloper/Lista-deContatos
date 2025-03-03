import React, { useEffect, useState } from 'react'
import {
  Button,
  ButtonExcluir,
  ButtonSalvar,
  CampoDados,
  ContainerOptions,
  InputEditar
} from './Styles'
import { useDispatch } from 'react-redux'
import Contato from '../../models/contato'
import { editar, excluir } from '../../store/reducers/Contatos'

type Props = Contato

const CadContato = ({
  id,
  nome,
  email: emailOriginal,
  telefone: telefoneOriginal
}: Props) => {
  const [editando, setEditando] = useState(false)
  const [email, setEmail] = useState('')
  const [telefone, setTelefone] = useState('')
  const dispatch = useDispatch()

  const toggleEditando = () => {
    if (editando) {
      setEmail(emailOriginal)
      setTelefone(telefoneOriginal)
    }
    setEditando(!editando)
  }

  useEffect(() => {
    if (emailOriginal.length > 0) setEmail(emailOriginal)
    if (telefoneOriginal.length > 0) setTelefone(telefoneOriginal)
  }, [emailOriginal, telefoneOriginal])

  const salvarEdicao = () => {
    dispatch(
      editar({
        id,
        nome,
        email,
        telefone
      })
    )

    setEditando(false)
  }

  return (
    <>
      <h3>{nome}</h3>

      <CampoDados>
        <label htmlFor="">E-mail:</label>
        <InputEditar
          type="text"
          value={email}
          disabled={!editando}
          onChange={(ev) => setEmail(ev.target.value)}
        />

        <label htmlFor="">Telefone:</label>
        <InputEditar
          type="text"
          value={telefone}
          disabled={!editando}
          onChange={(ev) => setTelefone(ev.target.value)}
        />
      </CampoDados>

      <ContainerOptions>
        {editando === true ? (
          <>
            <ButtonSalvar onClick={salvarEdicao}>Salvar</ButtonSalvar>
            <Button onClick={toggleEditando}>Cancelar</Button>
          </>
        ) : (
          <>
            <Button onClick={toggleEditando}>Editar</Button>
            <ButtonExcluir onClick={() => dispatch(excluir(id))}>
              Excluir
            </ButtonExcluir>
          </>
        )}
      </ContainerOptions>
    </>
  )
}

export default CadContato
