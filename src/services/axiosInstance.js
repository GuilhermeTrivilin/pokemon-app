import axios from "axios";

export const { get, post, put, patch, ...restInstance } = axios.create({
    baseURL: 'https://pokeapi.co/api/v2',
});