interface SubmitProps {
  id?: string
  name: string
  value: string
}

export default function Submit({ id, name, value }: SubmitProps) {
  return (
    <input type="submit" id={id || name} name={name} value={value} className="
      bg-emerald-700
      cursor-pointer
      h-8
      mb-8
      placeholder-gray-400
      rounded
      shadow-lg
      shrink
      sm:m-0
      text-white
      w-56
    " />
  )
}
