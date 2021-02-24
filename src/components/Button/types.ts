import React, { ButtonHTMLAttributes } from 'react'

export type ButtonColorType = | 'primary' | 'danger'

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  color: ButtonColorType
}