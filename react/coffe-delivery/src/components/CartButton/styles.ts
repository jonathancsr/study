import styled from 'styled-components'

export const CartButtonContainer = styled.div`
  position: absolute;
`

export const ProductQuantityContainer = styled.div`
  width: 1.25rem;
  height: 1.25rem;

  position: absolute;
  top: -0.5rem;
  right: -0.5rem;

  border-radius: 50%;

  background-color: ${(props) => props.theme['yellow-700']};
`

export const ProductQuantity = styled.span`
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 700;
  font-size: 12px;
  color: ${(props) => props.theme.white};
`
