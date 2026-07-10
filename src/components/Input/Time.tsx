import type { Input, InputProps } from "./Input"

interface TimeProps extends InputProps {
  value?: string
}

export default function Time({ id, name, value }: TimeProps): Input {
  return (
    <input type="time" id={id || name} name={name} value={value} className="
      bg-white
      border
      border-gray-400
      h-8
      indent-2
      mb-8
      placeholder-gray-400
      rounded
      shadow-lg
      sm:m-0
      text-black
      w-56
    " />
  )
}
