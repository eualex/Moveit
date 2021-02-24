import React, { ButtonHTMLAttributes } from 'react'

export type ButtonColorType = | 'primary' | 'danger' | 'disable' | 'success' | 'secondary'

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  color: ButtonColorType
}