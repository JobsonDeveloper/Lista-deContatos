import styled, { createGlobalStyle } from 'styled-components'

const GlobalStyles = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    list-style: none;
    font-family: "Poppins", sans-serif;
  }
`

export default GlobalStyles

export const Container = styled.article`
  display: flex;
  justify-content: center;
  padding: 10px;
  max-width: 1400px;
  margin: 0 auto;
  gap: 15px;
`

export const UserInput = styled.input`
  font-size: 1rem;
  width: 300px;
  background-color: transparent;
  outline: none;
  border-radius: 5px;
  padding: 3px 5px;
  color: #000;
  border: 1px solid #000;
`
