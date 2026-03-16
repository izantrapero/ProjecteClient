// src/services/vehiclesService.ts
import axios from "axios";
import type { Vehicle } from "../types/types";

const baseUrl = "http://localhost:3000/api/vehicles";

export const getAllVehicles = async (): Promise<Vehicle[]> => {
  const res = await axios.get<Vehicle[]>(baseUrl);
  return res.data;
};

export const getVehicleById = async (id: string): Promise<Vehicle> => {
  const res = await axios.get<Vehicle>(`${baseUrl}/${id}`);
  return res.data;
};

export const createVehicle = async (v: Omit<Vehicle, "_id">): Promise<Vehicle> => {
  const res = await axios.post(baseUrl, v);
  return res.data;
};

export const updateVehicle = async (id: string, v: Partial<Vehicle>): Promise<Vehicle> => {
  const res = await axios.put(`${baseUrl}/${id}`, v);
  return res.data;
};

export const deleteVehicle = async (id: string): Promise<void> => {
  await axios.delete(`${baseUrl}/${id}`);
};