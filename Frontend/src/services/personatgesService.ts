// src/services/personatgesService.ts
import axios from "axios";
import type { Personatge } from "../types/types";

const baseUrl = "http://localhost:3000/api/personatges";

export const getAllPersonatges = async (): Promise<Personatge[]> => {
  const res = await axios.get<Personatge[]>(baseUrl);
  return res.data;
};

export const getPersonatgeById = async (id: string): Promise<Personatge> => {
  const res = await axios.get<Personatge>(`${baseUrl}/${id}`);
  return res.data;
};

export const createPersonatge = async (p: Omit<Personatge, "_id">): Promise<Personatge> => {
  const res = await axios.post(baseUrl, p);
  return res.data;
};

export const updatePersonatge = async (id: string, p: Partial<Personatge>): Promise<Personatge> => {
  const res = await axios.put(`${baseUrl}/${id}`, p);
  return res.data;
};

export const deletePersonatge = async (id: string): Promise<void> => {
  await axios.delete(`${baseUrl}/${id}`);
};