import { Character } from "../types/Character"

type Props = {
  character: Character
}

export default function CharacterCard({ character }: Props) {
  return (
    <div>
      <h3>{character.name}</h3>
      <p>Weight: {character.weight}</p>
      <p>{character.isVillain ? "Villain" : "Hero"}</p>
    </div>
  )
}