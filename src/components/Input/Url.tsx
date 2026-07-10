interface UrlProps {
  id?: string
  name: string
  placeholder?: string
  value?: string
}

export default function Url({ id, name, placeholder, value }: UrlProps) {
  return (
    <input type="url" id={id || name} name={name} placeholder={placeholder} value={value} className="
      bg-white
      border
      border-gray-400
      indent-2
      placeholder-gray-400
      rounded
      shadow-lg
      text-black
      w-56
    " />
  )
}
