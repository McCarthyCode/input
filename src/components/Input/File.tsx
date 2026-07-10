import type { ChangeEventHandler } from "react"

import type { Input, InputProps } from "./Input"

interface FileProps extends InputProps {
  accept?: string
  multiple?: boolean
  onChange?: ChangeEventHandler<HTMLInputElement>
}

export default function File({ id, name, accept, multiple, onChange }: FileProps): Input {
  return (
    <input type="file" id={id || name} name={name} accept={accept} multiple={multiple} onChange={onChange} className="
      cursor-pointer
      file:bg-gray-300
      file:border
      file:border-gray-400
      file:cursor-pointer
      file:mr-3
      file:px-2
      file:rounded
      file:text-black
      mb-8
      rounded
      sm:m-0
      w-56
    " />
  )
}
