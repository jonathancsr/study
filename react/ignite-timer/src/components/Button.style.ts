import styled from "styled-components";
export type ButtonVariants =  'primary' | 'secondary' | 'danger' | 'success'

type ButtonContainerProps = {
  variant: ButtonVariants
}

const buttonVariants = {
  primary: 'purple',
  secondary: 'orange',
  danger: 'red',
  success: 'green'
}

export const ButtonContainer = styled.button<ButtonContainerProps>`
  width: 100px;
  height: 40px;

  cursor: pointer;
  color: white;

  ${({variant}) => `background-color: ${buttonVariants[variant]};`}


`;