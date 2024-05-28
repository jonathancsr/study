import styled from 'styled-components'

export const ButtonContainer = styled.button`
  width: 100%;

  padding: 0.75rem 2rem;
  font-size: 0.875rem;
  font-weight: 700;

  color: ${(props) => props.theme.white};
  background-color: ${(props) => props.theme['yellow-500']};

  border: none;
  border-radius: 6px;
  cursor: pointer;

  transition: 0.1s linear;

  &:hover {
    background-color: ${(props) => props.theme['yellow-700']};
  }
`
