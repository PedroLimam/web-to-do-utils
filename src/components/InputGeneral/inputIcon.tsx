import { ElementType } from "react"

export interface InputProps {
    icon?: ElementType,
    className?: string
}

export function InputIcon({ icon: Icon, className }: InputProps) {
  return (
   <>
    {Icon && <Icon className={`absolute bottom-2 left-1 ${className}`} />}
   </>
  )
}
