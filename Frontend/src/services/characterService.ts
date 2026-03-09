import { Character } from "../types/Character"

const API_URL = "http://localhost:3000/characters"

export const getCharacters = async (): Promise<Character[]> => {
  const res = await fetch(API_URL)
  return res.json()
}

export const getCharacter = async (id: string): Promise<Character> => {
  const res = await fetch(`${API_URL}/${id}`)
  return res.json()
}

export const createCharacter = async (character: Character) => {
  const res = await fetch(API_URL, {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(character)
  })

  return res.json()
}

export const updateCharacter = async (id: string, character: Character) => {
  const res = await fetch(`${API_URL}/${id}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(character)
  })

  return res.json()
}

export const deleteCharacter = async (id: string) => {
  await fetch(`${API_URL}/${id}`, {
    method: "DELETE"
  })
}