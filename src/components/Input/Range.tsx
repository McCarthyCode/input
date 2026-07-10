import type { ChangeEventHandler } from "react"

import type { Input, InputProps } from "./Input"

interface RangeProps extends InputProps {
  min?: number
  max?: number
  step?: number
  value?: number
  onChange?: ChangeEventHandler<HTMLInputElement>
}

export default function Range({ id, name, min, max, step, value, onChange }: RangeProps): Input {
  return (
    <input type="range" id={id || name} name={name} min={min} max={max} step={step} value={value} onChange={onChange} className="
      accent-emerald-700
      bg-transparent
      mb-8
      range
      sm:m-0
      w-56
    " />
  )
}
