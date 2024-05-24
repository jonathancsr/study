import styled from 'styled-components'
export type ButtonVariants =
  | 'primary'
  | 'green'
  | 'secondary'
  | 'danger'
  | 'success'

type ButtonContainerProps = {
  variant: ButtonVariants
}

export const ButtonContainer = styled.button<ButtonContainerProps>`
  width: 100px;
  height: 40px;
  border-radius: 8px;
  border: 0;
  margin: 8px;
  cursor: pointer;

  color: ${(props) => props.theme.white};
  background-color: ${({ theme, variant }) => theme[variant]};
`
