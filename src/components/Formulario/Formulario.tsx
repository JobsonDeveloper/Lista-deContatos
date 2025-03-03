import React, { FormEvent, useState } from 'react'
import { useDispatch } from 'react-redux'
import { UserInput } from '../../Styles/Styles'
import { ButtonCadastro, Form } from './Styles'
import { cadastrar } from '../../store/reducers/Contatos'
import { useNavigate } from 'react-router'

const Formulario = () => {
  const dispatch = useDispatch()
  const [nome, setNome] = useState('')
  const [email, setEmail] = useState('')
  const [telefone, setTelefone] = useState('')
  const redirect = useNavigate()

  const cadastraServico = (ev: FormEvent) => {
    ev.preventDefault()

    if (nome === '') {
      alert('Informe o nome da pessoa!')
    } else if (email === '' && telefone === '') {
      alert('Preencha pelo menos um dos dados de contato.')
    } else {
      dispatch(
        cadastrar({
          nome,
          email,
          telefone
        })
      )

      redirect('/')
    }
  }

  return (
    <>
      <Form onSubmit={cadastraServico}>
        <h3>Cadastrar novo contato</h3>

        <UserInput
          placeholder="Nome Completo"
          value={nome}
          onChange={(ev) => setNome(ev.target.value)}
        />
        <UserInput
          placeholder="E-mail"
          value={email}
          onChange={(ev) => setEmail(ev.target.value)}
        />
        <UserInput
          placeholder="Telefone"
          value={telefone}
          onChange={(ev) => setTelefone(ev.target.value)}
        />

        <ButtonCadastro>Cadastrar</ButtonCadastro>
      </Form>
    </>
  )
}

export default Formulario
