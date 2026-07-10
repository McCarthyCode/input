interface SearchProps {
  id?: string
  name: string
  placeholder?: string
  value?: string
}

export default function Search({ id, name, placeholder, value }: SearchProps) {
  return (
    <input type="search" id={id || name} name={name} placeholder={placeholder} value={value} className="
      bg-white
      border
      border-gray-400
      indent-2
      placeholder-gray-400
      rounded
      shadow-lg
      shrink
      text-black
      w-56
    " />
  )
}
