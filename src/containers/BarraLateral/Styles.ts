import styled from 'styled-components'
import { Container } from '../../Styles/Styles'

export const Aside = styled.aside`
  width: 100%;
  height: max-content;
  box-shadow: 1px 0 5px #000;
`

export const ContainerAside = styled(Container)`
  @media (max-width: 768px) {
    display: grid;
    justify-items: center;
  }
`
