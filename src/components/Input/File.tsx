import type { ChangeEventHandler } from "react"

interface FileProps {
  id?: string
  name: string
  accept?: string
  multiple?: boolean
  onChange?: ChangeEventHandler<HTMLInputElement>
}

export default function File({ id, name, accept, multiple, onChange }: FileProps) {
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
      rounded
      w-56
    " />
  )
}
