import type { Input, InputProps } from "./Input"

interface ButtonProps extends InputProps {
  value: string
}

export default function Button({ id, name, value }: ButtonProps): Input {
  return (
    <input type="button" id={id || name} name={name} value={value} className="
      bg-emerald-700
      cursor-pointer
      h-8
      mb-8
      placeholder-gray-400
      rounded
      shadow-lg
      shrink
      sm:m-0
      text-white
      w-56
    " />
  )
}
