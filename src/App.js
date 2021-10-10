import React, { useEffect, useState, useRef } from 'react';
import sadPokemon from './assets/images/pokemonTriste.png'
import pokemonLogo from './assets/images/pokemonLogo.png'
import setBackgroundColorFactory from './factories/setBackgroundColorFactory';
import { getOfficialPokemonArtwork } from './helpers/getOfficialPokemonArtwork';
import { setNewPokemon } from './helpers/setNewPokemon';
import RenderFactory from './factories/renderFactory';
import { ChangeButton, ChangeButtonWrapper, Container, PokemonCardWrapper, PokemonImage, PokemonLogo } from './styles';

function App() {
  const containerRef = useRef(null)

  const [currentPokemon, setCurrentPokemon] = useState(null)

  const { call: callSetBackgroundColorFactory } = setBackgroundColorFactory({
    containerRef,
    currentPokemon
  })

  const { renderTopics } = RenderFactory({ currentPokemon })

  useEffect(() => { changePokemon() }, [])
  useEffect(() => { currentPokemon && callSetBackgroundColorFactory() }, [currentPokemon])

  const changePokemon = async () => setNewPokemon(currentPokemon, setCurrentPokemon)

  const pokemonImageSrc = () => getOfficialPokemonArtwork(currentPokemon) || sadPokemon

  return !currentPokemon
    ? <React.Fragment />
    : <Container ref={containerRef}>
      <PokemonLogo src={pokemonLogo} />
      <PokemonImage src={pokemonImageSrc()} />
      <PokemonCardWrapper>
        {renderTopics()}

        <ChangeButtonWrapper>
          <ChangeButton type="button" onClick={changePokemon}>
            ALTERAR POKEMON
          </ChangeButton>
        </ChangeButtonWrapper>

      </PokemonCardWrapper>
    </Container>
}

export default App;
