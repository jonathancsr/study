import styled from 'styled-components'

export const ButtonContainer = styled.button`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  padding: 0.5rem 0.5rem;
  font-size: 0.875rem;
  font-weight: 700;

  color: ${(props) => props.theme['gray-800']};
  background-color: ${(props) => props.theme['gray-500']};

  border: none;
  border-radius: 6px;
  cursor: pointer;

  transition: 0.1s linear;

  &:hover {
    background-color: ${(props) => props.theme['gray-600']};
  }
`
