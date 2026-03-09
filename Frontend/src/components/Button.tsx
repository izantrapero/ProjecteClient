type Props = {
  text: string
  onClick?: () => void
  type?: "button" | "submit"
}

export default function Button({ text, onClick, type = "button" }: Props) {
  return (
    <button onClick={onClick} type={type}>
      {text}
    </button>
  )
}