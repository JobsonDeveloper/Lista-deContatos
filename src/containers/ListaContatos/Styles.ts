import styled from 'styled-components'
import { UserInput } from '../../Styles/Styles'

export const ContatosLista = styled.ul`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  padding: 5px;
  gap: 15px;
  width: 100%;
`

export const Item = styled.li`
  border-radius: 5px 5px 25px 25px;
  overflow: hidden;
  border: 1px solid #000;
  box-shadow: 3px 3px 5px #949494;

  h3 {
    padding: 0 5px;
    border-bottom: 1px solid #000;
    color: #4a4a4a;
    text-transform: uppercase;
  }
`
