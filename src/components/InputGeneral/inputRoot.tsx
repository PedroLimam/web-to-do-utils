import { ReactNode } from "react"

interface IInputRootProps {
  children: ReactNode
}

export function InputRoot({ children }: IInputRootProps) {
  return (
    <div className="relative w-full input__box rounded-md">
      { children }
    </div>
  )
}
