import { pokemonTypeColors } from "../assets/pokemonTypeColors"

export default function setBackgroundColorFactory({
    containerRef,
    currentPokemon
}) {

    const call = () => setBackgroundColor()

    const setBackgroundColor = () => {
        containerRef.current.style.background = getBackgroundColorValue()
    }

    const getBackgroundColorValue = () => currentPokemon.types.length > 1
        ? `linear-gradient(${getLinearGradientValues().toString()})`
        : pokemonTypeColors[currentPokemon.types.shift().type.name]

    const getLinearGradientValues = () => currentPokemon
        .types
        .map(pokemonType => pokemonType.type.name)
        .map(pokemonType => pokemonTypeColors[pokemonType])

    return { call }
}