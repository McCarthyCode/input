import type { Input, InputProps } from "./Input"

interface NumberProps extends InputProps {
  placeholder?: string
  value?: string
}

export default function Number({ id, name, placeholder, value }: NumberProps): Input {
  return (
    <input type="number" id={id || name} name={name} placeholder={placeholder} value={value} className="
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
