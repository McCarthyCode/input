import type { Input, InputProps } from "./Input"

interface WeekProps extends InputProps {
  value?: string
}

export default function Week({ id, name, value }: WeekProps): Input {
  return (
    <input type="week" id={id || name} name={name} value={value} className="
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
