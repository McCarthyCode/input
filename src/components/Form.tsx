import type { FormEventHandler, ReactNode } from "react"

interface FormProps {
  onSubmit?: (values: Record<string, FormDataEntryValue>) => void
  children: ReactNode
}

export default function Form({ onSubmit, children }: FormProps) {
  const handleSubmit: FormEventHandler<HTMLFormElement> = (e) => {
    e.preventDefault()

    const values = Object.fromEntries(new FormData(e.currentTarget).entries())

    if (onSubmit) {
      onSubmit(values)
    } else {
      console.log(values)
    }
  }

  return (
    <form onSubmit={handleSubmit}>
      {children}
    </form>
  )
}
