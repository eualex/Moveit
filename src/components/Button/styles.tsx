import styled from 'styled-components'
import { checkColorButton } from '../../utils/checkColorButton'
import { ButtonColorType } from './types'

declare interface ButtonStylesProps {
  colorType: ButtonColorType
}

export const ButtonContainer = styled.button<ButtonStylesProps>`
  width: 100%;
  height: 8rem;
  margin-top: 3.2rem;

  display: flex;
  align-items: center;
  justify-content: center;

  border: none;
  border-radius: 0.5rem;

  background-color: ${({ colorType }) => checkColorButton(colorType).bg};
  color: ${({ colorType }) => checkColorButton(colorType).color};

  font-size: 2rem;
  font-weight: 600;

  transition: all 0.3s ease-in-out;

  &:not(:disabled):hover {
    background-color: ${({ colorType }) => checkColorButton(colorType).hover};
    color: ${({ colorType }) =>
      checkColorButton(colorType).hoverColor ||
      checkColorButton(colorType).color};
  }

  &:disabled {
    cursor: not-allowed;
  }
`
