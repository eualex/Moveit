import React, { ButtonHTMLAttributes } from 'react'

export type ButtonColorType = | 'primary' | 'danger' | 'disable'

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  color: ButtonColorType
}