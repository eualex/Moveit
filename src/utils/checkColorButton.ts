import { ButtonColorType } from '../components/Button/types'

declare interface checkColorButtonProps {
  bg: string
  color: string
  hover: string
  hoverColor?: string
}

export const checkColorButton = (
  color: ButtonColorType
): checkColorButtonProps => {
  switch (color) {
    case 'primary':
      return {
        bg: 'var(--blue)',
        color: 'var(--white)',
        hover: 'var(--blue-dark)'
      }
    case 'danger':
      return {
        bg: 'var(--white)',
        color: 'var(--title)',
        hover: 'var(--red)',
        hoverColor: 'var(--white)'
      }
  }
}
