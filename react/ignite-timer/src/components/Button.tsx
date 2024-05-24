import { ButtonContainer, ButtonVariants } from "./Button.style";

type ButtonProps = {
  variant?: ButtonVariants;
}

export const Button = ({
  variant = 'green'
}: ButtonProps) => {
  return (
    <ButtonContainer
      variant={variant}
    >
      Enviar
    </ButtonContainer>
  )
}