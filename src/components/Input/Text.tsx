import type { Input, InputProps } from "./Input"

interface TextProps extends InputProps {
  placeholder?: string
  value?: string
}

export default function Text({ id, name, placeholder, value }: TextProps): Input {
  return (
    <input id={id || name} name={name} placeholder={placeholder} type='text' value={value} className="
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
