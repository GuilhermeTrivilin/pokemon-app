export const getOfficialPokemonArtwork = (currentPokemon) => {
    if (currentPokemon?.sprites?.other?.["official-artwork"].length === 0) return null

    const officialArtworkKey = Object.keys(currentPokemon?.sprites?.other?.["official-artwork"])[0] || ""
    return currentPokemon?.sprites?.other?.["official-artwork"][officialArtworkKey]
}