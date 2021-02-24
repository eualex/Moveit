import React from 'react'

import * as Styles from './styles'
import { ButtonProps } from './types'

const Button = ({ children, color, ...rest }: ButtonProps): JSX.Element => {
  return (
    <Styles.ButtonContainer colorType={color} {...rest}>
      {children}
    </Styles.ButtonContainer>
  )
}

export default Button
