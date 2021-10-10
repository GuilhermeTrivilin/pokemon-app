import styled from 'styled-components'

export const Container = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-image: linear-gradient(#000, transparent);
  flex-direction: column;
`
export const PokemonCardWrapper = styled.div`
  display: flex;
  background-color: white;
  border-radius: 0.3rem;
  flex-direction: column;

  max-width: 30rem;
  padding: 1rem;
`

export const PokemonImage = styled.img`
  width: 12rem;
  height: 12rem;
  z-index: 999;
`

export const TopicTitle = styled.p`
  font-weight: bold;
  margin-bottom: 0.5rem;
`

export const TopicText = styled.p`
`

export const BadgeWrapper = styled.div`
  background-color: ${props => props.color};
  padding: 0.3rem;
  border-radius: 0.1rem;
  margin-right: 0.25rem;
  
  &:last-child{
    margin-right: 0px;
  }
`

export const BadgeText = styled.p``

export const TopicValueWrapper = styled.div`
  display: flex;
  flex-direction: row;
  margin-bottom: 1rem;

  overflow-x: scroll;
  overflow-y: hidden;
  white-space:nowrap;

  &:last-child{
    margin-bottom: 0px;
  }
`

export const PokemonLogo = styled.img`
  width: 15rem;
`

export const ChangeButton = styled.button`
  background-color: #FECC00;
  color: #375CA8;
  font-weight: bold;
  font-size: 1rem;
  padding: 0.3rem 0.5rem;
  border-radius: 0.25rem;
`

export const ChangeButtonWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 2rem;
`