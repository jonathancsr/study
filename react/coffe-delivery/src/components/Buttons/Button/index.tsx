import { ButtonHTMLAttributes } from 'react'
import { ButtonContainer } from './styles'

type ButtonProps = {
  label: string
} & ButtonHTMLAttributes<HTMLButtonElement>
export function Button({ label, onClick, ...props }: ButtonProps) {
  return (
    <ButtonContainer onClick={onClick} {...props}>
      {label}
    </ButtonContainer>
  )
}
