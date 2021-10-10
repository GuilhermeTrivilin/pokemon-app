import { get } from "./axiosInstance";

export const getPokemon = async (id) => await get(`pokemon/${id}`)