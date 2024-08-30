import React, { useRef, useState } from 'react'
import { FaPlus } from 'react-icons/fa'

interface InputTextProps {
  onSubmit: (text: string) => void
  placeholder?: string
}

export const InputText: React.FC<InputTextProps> = ({
  onSubmit,
  placeholder,
}) => {
  const [text, setText] = useState('')
  const inputRef = useRef<HTMLInputElement>(null)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setText(e.target.value)
  }

  const handleClick = () => {
    if (text.trim()) {
      onSubmit(text)
      setText('')
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
        type="text"
        value={text}
        onChange={handleChange}
        ref={inputRef}
        onKeyPress={handleKeyPress}
      />
      <button
        className="py-1 px-5 cursor-pointer border-l border-zinc-400"
        onClick={handleClick}
      >
        <FaPlus />
      </button>
    </div>
  )
}
