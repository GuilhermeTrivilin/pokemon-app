import { getPokemon } from "../services/pokemon"
import { getRandomPokemonId } from "./randomPokemonId"

export const setNewPokemon = async (currentPokemon, setCurrentPokemon) => {
    const newPokemonId = getRandomPokemonId().toString()

    if (newPokemonId !== currentPokemon?.id) {
      const response = await getPokemon(newPokemonId)
      setCurrentPokemon(response.data)
    } else {
      await setNewPokemon()
    }
}