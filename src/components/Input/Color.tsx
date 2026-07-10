import { useState, type ChangeEventHandler, type InputEventHandler } from "react"

import type { Input, InputProps } from "./Input"

interface ColorProps extends InputProps {
  value: string
}


export default function Color({ id, name, value }: ColorProps): Input {
  const [color, setColor] = useState(value)

  const pickColor: InputEventHandler<HTMLInputElement> = (e) => {
    setColor(e.currentTarget.value)
  }
  const typeColor: ChangeEventHandler<HTMLInputElement> = (e) => {
    setColor(e.currentTarget.value)
  }

  return (
    <span className="flex gap-2 w-56">
      <input type="color" id={id || name} name={name} value={color} className="
        bg-white
        border
        border-gray-400
        h-8
        px-0.5
        rounded
        shadow-lg
        w-8
      " onInput={pickColor} />
      <input type="text" id={`${id || name}-val`} name={`${name}-val`} value={color} placeholder="Hex Value" className="
        bg-white
        border
        border-gray-400
        h-8
        indent-2
        px-0.5
        rounded
        shadow-lg
        text-black
        w-46
      " onChange={typeColor} />
    </span>
  )
}
