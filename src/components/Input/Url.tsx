import type { Input, InputProps } from "./Input"

interface UrlProps extends InputProps {
  placeholder?: string
  value?: string
}

export default function Url({ id, name, placeholder, value }: UrlProps): Input {
  return (
    <input type="url" id={id || name} name={name} placeholder={placeholder} value={value} className="
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
