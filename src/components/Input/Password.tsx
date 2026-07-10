interface PasswordProps {
  id?: string
  name: string
  placeholder?: string
  value?: string
}

export default function Password({ id, name, placeholder, value }: PasswordProps) {
  return (
    <input type="password" id={id || name} name={name} placeholder={placeholder} value={value} className="
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
