import { cva, type VariantProps } from 'class-variance-authority'
import React, { ChangeEvent, FocusEvent, KeyboardEvent } from 'react'

const input = cva('input', {
  variants: {
    intent: {
      primary: [
        'focus:outline-none',
        'rounded-md',
        'p-2',
        'bg-indigo-950',
        'placeholder:text-slate-200 ',
        'px-4',
        'py-2',
        'transition duration-300 ease-in-out',
        'focus:outline-none',
        'focus:ring-2',
        'focus:ring-blue-400',
        'focus:border-transparent',
        'text-white',
      ],
      secondary: [
        'focus:outline-none',
        'rounded-md',
        'p-2',
        'bg-blue-100',
        'placeholder:text-blue-400',
        'border',
        'border-blue-300',
        'px-4',
        'py-2',
        'transition duration-300 ease-in-out',
        'focus:outline-none',
        'focus:ring-2',
        'focus:ring-blue-400',
        'focus:border-transparent',
        'text-blue-700',
      ],
    },
    size: {
      small: ['text-sm', 'p-3'],
      medium: ['text-base', 'p-4'],
      //   big: ['text-xl', 'p-3'],
    },
  },
  defaultVariants: {
    intent: 'primary',
    size: 'medium',
  },
})

type InputVariantProps = VariantProps<typeof input>
interface EnhancedInputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  errorMessage?: string
}
export interface InputProps
  extends Omit<EnhancedInputProps, keyof InputVariantProps>,
    InputVariantProps {}

const Input: React.FC<InputProps> = ({
  className,
  intent,
  size,
  type = 'text',
  onChange,
  onBlur,
  value,
  errorMessage = 'Please enter only numbers',
  ...props
}) => {
  const [error, setError] = React.useState<string | null>(null)

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    if (type === 'number') {
      const inputValue = e.target.value

      if (/^\d+$/.test(inputValue)) {
        setError(null)
        if ('onChange' in props) {
          ;(props as any).onChange(e)
        }
      } else {
        setError(errorMessage)
      }
    } else {
      if ('onChange' in props) {
        ;(props as any).onChange(e)
      }
    }
  }

  const handleInputKeyDown = (e: KeyboardEvent<HTMLInputElement>) => {
    if (type === 'number') {
      if (
        !(
          e.key === 'ArrowLeft' ||
          e.key === 'ArrowRight' ||
          e.key === 'Backspace' ||
          e.key === 'Delete' ||
          e.key === 'Tab' ||
          (e.key.length === 1 && /\d/.test(e.key))
        )
      ) {
        e.preventDefault()
      }
    }
  }

  const handleInputBlur = (e: FocusEvent<HTMLInputElement>) => {
    if (type === 'number') {
      const inputValue = e.target.value

      if (/^\d+$/.test(inputValue)) {
        setError(null)
        if ('onBlur' in props) {
          ;(props as any).onBlur(e)
        }
      } else {
        setError(errorMessage)
      }
    } else {
      if ('onBlur' in props) {
        ;(props as any).onBlur(e)
      }
    }
  }

  return (
    <>
      <input
        className={input({ intent, className })}
        type={type}
        placeholder="Enter numbers only"
        onChange={handleInputChange}
        onKeyDown={handleInputKeyDown}
        onBlur={handleInputBlur}
        value={value}
        {...props}
      />
      {error && <p className="text-red-500 text-sm mt-1">{error}</p>}
    </>
  )
}

export default Input
