import styled from 'styled-components'
export type VariantTypes = 'purple' | 'yellow' | 'lightYellow'

type ButtonProps = { variant: VariantTypes }

const color = {
  purple: 'purple-700',
  yellow: 'yellow-700',
  lightYellow: 'yellow-300',
}
const hoverColor = {
  purple: 'purple-500',
  yellow: 'yellow-500',
  lightYellow: 'yellow-500',
}

export const ButtonContainer = styled.button<ButtonProps>`
  width: 2.5rem;
  height: 2.5rem;
  padding: 0.5rem;

  color: ${(props) => props.theme.white};
  background-color: ${(props) => props.theme[color[props.variant]]};

  border: none;
  border-radius: 6px;
  cursor: pointer;

  transition: 0.1s linear;

  &:hover {
    background-color: ${(props) => props.theme[hoverColor[props.variant]]};
  }
`
