import styled from 'styled-components'
import { UserInput } from '../../Styles/Styles'

export const CampoDados = styled.div`
  display: grid;
  grid-template-columns: 1fr auto;
  padding: 5px;

  label {
    display: flex;
    align-items: center;
    font-weight: 550;
  }
`

export const InputEditar = styled(UserInput)`
  border-color: transparent;
  height: 45px;
`

export const ContainerOptions = styled.article`
  display: flex;
  background-color: aliceblue;
  justify-content: space-between;
`

export const Button = styled.button`
  border: none;
  outline: none;
  width: 100%;
  text-align: center;
  cursor: pointer;
  padding: 5px;
  background-color: rgb(80, 210, 54);
  color: #fff;
  font-weight: bold;

  &:hover {
    background-color: rgb(70, 189, 46);
  }
`

export const ButtonSalvar = styled(Button)`
  background-color: #00be00;

  &:hover {
    background-color: #01a501;
  }
`

export const ButtonExcluir = styled(Button)`
  background-color: rgb(236, 63, 63);

  &:hover {
    background-color: #e90707;
  }
`
