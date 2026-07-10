import type { Input, InputProps } from "./Input"

interface EmailProps extends InputProps {
  placeholder?: string
  value?: string
}

export default function Email({ id, name, placeholder, value }: EmailProps): Input {
  return (
    <input type="email" id={id || name} name={name} placeholder={placeholder} value={value} className="
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
