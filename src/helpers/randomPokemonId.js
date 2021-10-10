export const getRandomPokemonId = () => {
    const MIN_POKEMON_ID = 1
    const MAX_POKEMON_ID = 894

    return Math.round(
        Math.random() * (MAX_POKEMON_ID - MIN_POKEMON_ID) + MIN_POKEMON_ID
    );
}