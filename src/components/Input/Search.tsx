import type { Input, InputProps } from "./Input"

interface SearchProps extends InputProps {
  placeholder?: string
  value?: string
}

export default function Search({ id, name, placeholder, value }: SearchProps): Input {
  return (
    <input type="search" id={id || name} name={name} placeholder={placeholder} value={value} className="
      bg-white
      border
      border-gray-400
      h-8
      indent-2
      mb-8
      placeholder-gray-400
      rounded
      shadow-lg
      shrink
      sm:m-0
      text-black
      w-56
    " />
  )
}
