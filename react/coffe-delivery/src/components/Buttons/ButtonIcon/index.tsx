import { ButtonHTMLAttributes } from 'react'
import { ButtonContainer, VariantTypes } from './styles'

type ButtonIconProps = {
  icon: React.ReactNode
  variant?: VariantTypes
} & ButtonHTMLAttributes<HTMLButtonElement>
export function ButtonIcon({
  icon,
  variant = 'purple',
  ...props
}: ButtonIconProps) {
  return (
    <ButtonContainer variant={variant} {...props}>
      {icon}
    </ButtonContainer>
  )
}
