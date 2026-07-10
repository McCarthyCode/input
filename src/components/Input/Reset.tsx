import type { Input, InputProps } from "./Input"

interface ResetProps extends InputProps {
  value: string
}

export default function Reset({ id, name, value }: ResetProps): Input {
  return (
    <input type="reset" id={id || name} name={name} value={value} className="
      bg-gray-300
      border
      border-gray-400
      cursor-pointer
      h-8
      mb-8
      rounded
      shadow-lg
      shrink
      sm:m-0
      text-black
      w-56
    " />
  )
}
