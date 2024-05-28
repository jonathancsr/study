import { ButtonHTMLAttributes } from 'react'
import { ButtonContainer } from './styles'

type ButtonSecondaryProps = {
  label: string
  rightIcon: React.ReactElement
} & ButtonHTMLAttributes<HTMLButtonElement>
export function ButtonSecondary({
  label,
  rightIcon,
  onClick,
  ...props
}: ButtonSecondaryProps) {
  return (
    <ButtonContainer onClick={onClick} {...props}>
      {rightIcon}
      {label}
    </ButtonContainer>
  )
}
