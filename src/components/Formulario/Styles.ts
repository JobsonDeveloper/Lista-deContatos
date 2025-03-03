import styled from 'styled-components'

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-top: 40px;
  padding: 5px;
  align-items: center;
  gap: 20px;

  h3 {
    text-transform: uppercase;
    font-size: 1.3rem;
  }
`

export const ButtonCadastro = styled.button`
  background-color: #25b8f1;
  padding: 5px;
  color: #000;
  font-size: 1rem;
  outline: none;
  border: 1px solid #000;
  border-radius: 5px;
  cursor: pointer;

  &:hover {
    background-color: rgb(26, 160, 213);
  }
`
