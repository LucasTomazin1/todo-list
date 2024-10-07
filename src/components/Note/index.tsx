import { useEffect, useRef, useState } from 'react'

export const Note: React.FC = () => {
  const [isEditing, setIsEditing] = useState(false)
  const [text, setText] = useState('Clique para editar')
  const inputRef = useRef<HTMLTextAreaElement>(null)
  const handleClick = () => {
    setIsEditing(true)
  }

  const handleBlur = () => {
    setIsEditing(false)
  }

  const handleChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    setText(event.target.value)
  }
  useEffect(() => {
    if (isEditing && inputRef.current) {
      inputRef.current.select()
    }
  }, [isEditing])
  return (
    <div className="w-full max-h-96  overflow-hidden">
      {/* <textarea className="w-full min-h-20 max-h-64 px-1 bg-gray-800 rounded-md text-sm focus:outline-none focus:border-none resize-none" /> */}
      {isEditing ? (
        <textarea
          ref={inputRef}
          value={text}
          onChange={handleChange}
          onBlur={handleBlur}
          autoFocus
          className="w-full h-64 px-1 bg-gray-800 rounded-md text-sm focus:outline-none focus:border-none resize-none"
        />
      ) : (
        <div className="w-full min-h-10 cursor-text" onClick={handleClick}>
          {text.split('\n').map((paragraph, index) => (
            <p key={index} className="break-all hyphens">
              {paragraph}
            </p>
          ))}
        </div>
      )}
    </div>
  )
}
