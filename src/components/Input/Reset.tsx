interface ResetProps {
  id?: string
  name: string
  value: string
}

export default function Reset({ id, name, value }: ResetProps) {
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
