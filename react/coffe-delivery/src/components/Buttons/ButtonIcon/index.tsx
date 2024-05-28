import { ButtonHTMLAttributes } from 'react'
import { ButtonContainer } from './styles'

type ButtonIconProps = {
  icon: React.ReactNode
} & ButtonHTMLAttributes<HTMLButtonElement>
export function ButtonIcon({ icon, onClick, ...props }: ButtonIconProps) {
  return (
    <ButtonContainer onClick={onClick} {...props}>
      {icon}
    </ButtonContainer>
  )
}
