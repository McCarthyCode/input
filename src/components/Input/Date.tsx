import type { Input, InputProps } from "./Input"

interface DateProps extends InputProps {
  value?: string
}

export default function Date({ id, name, value }: DateProps): Input {
  return (
    <input type="date" id={id || name} name={name} value={value} className="
      bg-white
      border
      border-gray-400
      h-8
      indent-2
      placeholder-gray-400
      rounded
      shadow-lg
      text-black
      w-56
    " />
  )
}
