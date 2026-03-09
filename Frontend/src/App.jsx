import { useEffect, useState } from "react"
import { Character } from "./types/Character"
import { getCharacters, createCharacter, updateCharacter, deleteCharacter } from "./services/characterService"
import CharacterCard from "./components/CharacterCard"
import CharacterForm from "./components/CharacterForm"
import Button from "./components/Button"

export default function App() {

  const [characters, setCharacters] = useState<Character[]>([])
  const [editingCharacter, setEditingCharacter] = useState<Character | null>(null)
  const [showForm, setShowForm] = useState(false)

  // Cargar personajes
  const loadCharacters = async () => {
    const data = await getCharacters()
    setCharacters(data)
  }

  useEffect(() => {
    loadCharacters()
  }, [])

  // Crear personaje
  const handleCreate = async (character: Character) => {
    await createCharacter(character)
    setShowForm(false)
    loadCharacters()
  }

  // Editar personaje
  const handleUpdate = async (character: Character) => {
    if (!character._id) return
    await updateCharacter(character._id, character)
    setEditingCharacter(null)
    setShowForm(false)
    loadCharacters()
  }

  // Eliminar personaje
  const handleDelete = async (id?: string) => {
    if (!id) return
    await deleteCharacter(id)
    loadCharacters()
  }

  // Mostrar formulario (crear o editar)
  const handleEditClick = (character: Character) => {
    setEditingCharacter(character)
    setShowForm(true)
  }

  const handleNewClick = () => {
    setEditingCharacter(null)
    setShowForm(true)
  }

  return (
    <div style={{ padding: 20 }}>
      <h1>Mario Kart Characters</h1>

      {!showForm && <Button text="New Character" onClick={handleNewClick} />}

      {showForm && (
        <CharacterForm
          onSubmit={editingCharacter ? handleUpdate : handleCreate}
          initialData={editingCharacter ?? undefined}
        />
      )}

      <div style={{ display: "flex", flexWrap: "wrap", gap: 10, marginTop: 20 }}>
        {characters.map((char) => (
          <div key={char._id} style={{ border: "1px solid #ccc", padding: 10 }}>
            <CharacterCard character={char} />
            <Button text="Edit" onClick={() => handleEditClick(char)} />
            <Button text="Delete" onClick={() => handleDelete(char._id)} />
          </div>
        ))}
      </div>
    </div>
  )
}