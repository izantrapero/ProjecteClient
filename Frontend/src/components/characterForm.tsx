import { useState, useEffect } from "react"
import { Character } from "../types/Character"
import Button from "./Button"

type Props = {
  onSubmit: (character: Character) => void
  initialData?: Character
}

export default function CharacterForm({ onSubmit, initialData }: Props) {

  const [name, setName] = useState(initialData?.name ?? "")
  const [weight, setWeight] = useState(initialData?.weight ?? 0)
  const [isVillain, setIsVillain] = useState(initialData?.isVillain ?? false)

  useEffect(() => {
    if (initialData) {
      setName(initialData.name)
      setWeight(initialData.weight)
      setIsVillain(initialData.isVillain)
    }
  }, [initialData])

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()

    if (!name) {
      alert("Name required")
      return
    }

    onSubmit({
      _id: initialData?._id,
      name,
      weight,
      isVillain,
      firstAppearance: initialData?.firstAppearance ?? new Date().toISOString(),
      abilities: initialData?.abilities ?? []
    })
  }

  return (
    <form onSubmit={handleSubmit} style={{ marginTop: 20 }}>
      <input
        type="text"
        placeholder="Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        style={{ marginRight: 10 }}
      />
      <input
        type="number"
        placeholder="Weight"
        value={weight}
        onChange={(e) => setWeight(Number(e.target.value))}
        style={{ marginRight: 10 }}
      />
      <label style={{ marginRight: 10 }}>
        Villain
        <input
          type="checkbox"
          checked={isVillain}
          onChange={(e) => setIsVillain(e.target.checked)}
          style={{ marginLeft: 5 }}
        />
      </label>
      <Button text="Save" type="submit" />
    </form>
  )
}