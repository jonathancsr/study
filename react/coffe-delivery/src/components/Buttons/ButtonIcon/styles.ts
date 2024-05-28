import styled from 'styled-components'

export const ButtonContainer = styled.button`
  width: 2rem;
  height: 2rem;
  padding: 0.5rem;

  color: ${(props) => props.theme.white};
  background-color: ${(props) => props.theme['purple-700']};

  border: none;
  border-radius: 6px;
  cursor: pointer;

  transition: 0.1s linear;

  &:hover {
    background-color: ${(props) => props.theme['purple-500']};
  }
`
