import { ShoppingCart } from 'phosphor-react'
import { defaultTheme } from '../../styles/themes/default'
import { ButtonIcon } from '../Buttons/ButtonIcon'
import {
  CartButtonContainer,
  ProductQuantity,
  ProductQuantityContainer,
} from './styles'

type CartButtonProps = {
  quantity: number
}

export function CartButton({ quantity = 0 }: CartButtonProps) {
  return (
    <CartButtonContainer>
      {quantity > 0 && (
        <ProductQuantityContainer>
          <ProductQuantity>12</ProductQuantity>
        </ProductQuantityContainer>
      )}
      <ButtonIcon
        icon={
          <ShoppingCart
            color={defaultTheme['yellow-700']}
            weight="fill"
            size={24}
          />
        }
        variant="lightYellow"
      />
    </CartButtonContainer>
  )
}
