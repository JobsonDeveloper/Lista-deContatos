import styled from 'styled-components'

type Props = {
  ativo: string
}
export const UserButton = styled.button<Props>`
  border: 1px solid #000;
  border-radius: 5px;
  background-color: ${({ ativo }) =>
    ativo === 'true' ? '#25b8f1' : '#b6e5f7'};
  color: rgb(65, 65, 65);
  cursor: pointer;
  padding-left: 10px;
  font-size: 1rem;

  strong {
    padding: 3px 10px;
    color: #37b700;
    border-left: 1px solid #000;
    margin-left: 5px;
  }

  @media (max-width: 768px) {
    width: 200px;
    height: 50px;

    strong {
      height: 100%;
    }
  }
`
