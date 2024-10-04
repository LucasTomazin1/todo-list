import React, { forwardRef, useRef } from 'react'
import { FaPlus } from 'react-icons/fa'

interface InputTextProps {
  onSubmit?: (text: string) => void
  placeholder?: string
  value?: string
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void
  ref: React.RefObject<HTMLInputElement>
  showButton?: boolean
  type?: string
}

export const InputText = forwardRef<HTMLInputElement, InputTextProps>(
  (
    {
      onSubmit,
      placeholder,
      value,
      onChange,
      showButton = false,
      type = 'text',
    },
    ref,
  ) => {
    const inputRef = useRef<HTMLInputElement>(null)

    const handleClick = () => {
      if (value?.trim() && onSubmit) {
        onSubmit(value)
        inputRef.current?.focus()
      }
    }

    const handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
      if (e.key === 'Enter') {
        handleClick()
      }
    }

    return (
      <div className="flex m-2 rounded-2xl overflow-hidden border border-zinc-400 bg-gray-800">
        <input
          className="bg-gray-800 p-1 pl-2 focus:outline-none"
          placeholder={placeholder}
          type={type}
          value={value}
          onChange={onChange}
          ref={ref}
          onKeyPress={handleKeyPress}
        />
        {showButton && (
          <button
            className="py-1 px-5 cursor-pointer border-l text-zinc-300 border-zinc-400"
            onClick={handleClick}
          >
            <FaPlus />
          </button>
        )}
      </div>
    )
  },
)
