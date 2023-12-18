'use client'
import { cva, type VariantProps } from 'class-variance-authority'
import React from 'react'

const button = cva('button', {
  variants: {
    intent: {
      primary: [
        'bg-white',
        'text-black',
        'border-transparent',
        'hover:bg-slate-100',
        'rounded-lg',
      ],
      secondary: [
        'bg-[#23252c]',
        'text-white',
        'border-transparent',
        'rounded-lg',
      ],
    },
    size: {
      small: ['text-sm', 'py-1', 'px-2'],
      medium: ['text-base', 'py-2', 'px-4'],
      big: ['text-xl', 'py-3', 'px-8'],
    },
  },
  defaultVariants: {
    intent: 'primary',
    size: 'medium',
  },
})

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof button> {}

const Button: React.FC<ButtonProps> = ({
  className,
  intent,
  size,
  ...props
}) => <button className={button({ intent, size, className })} {...props} />
export default Button
