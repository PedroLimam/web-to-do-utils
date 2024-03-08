interface ILabelProps {
  className?: string,
  for: string,
  text: string
}

export function InputLabel({ className, for: htmlFor, text}:ILabelProps) {
  return (
      <label htmlFor={htmlFor} className={className}>{text}</label>
  )
}
