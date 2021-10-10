import React from 'react'

import { extractAttributeName } from '../helpers/extractAttributeName';
import { colorGenerator } from '../helpers/colorGenerator';
import { pokemonTypeColors } from '../assets/pokemonTypeColors';
import { BadgeText, BadgeWrapper, TopicText, TopicTitle, TopicValueWrapper } from '../styles';

export default function RenderFactory({ currentPokemon }) {
    const abilitiesArray = () => extractAttributeName(currentPokemon.abilities, "ability")
    const statsArray = () => extractAttributeName(currentPokemon.stats, "stat")
    const typesArray = () => extractAttributeName(currentPokemon.types, "type")
    const movesArray = () => extractAttributeName(currentPokemon.moves, "move")

    const renderTypes = () => (
        typesArray().map(type => <BadgeWrapper color={pokemonTypeColors[type]}>
            <BadgeText>{type}</BadgeText>
        </BadgeWrapper >
        )
    )

    const renderTopicValues = (array) => (
        array.map(item => <BadgeWrapper color={colorGenerator()}>
            <BadgeText>{item}</BadgeText>
        </BadgeWrapper>
        )
    )

    const renderPokemonName = () => <TopicText>{currentPokemon?.name}</TopicText>

    const topics = [
        { topicTitle: "NOME", topicValue: () => renderPokemonName() },
        { topicTitle: "TIPOS", topicValue: () => renderTypes() },
        { topicTitle: "HABILIDADES", topicValue: () => renderTopicValues(abilitiesArray()) },
        { topicTitle: "ESTADOS", topicValue: () => renderTopicValues(statsArray()) },
        { topicTitle: "MOVIMENTOS", topicValue: () => renderTopicValues(movesArray()) },
    ]

    const renderTopics = () => topics.map(topic => topic.topicValue().length === 0
        ? <React.Fragment />
        : <React.Fragment>
            <TopicTitle>{topic.topicTitle}</TopicTitle>
            <TopicValueWrapper>{topic.topicValue()}</TopicValueWrapper>
        </React.Fragment>)


    return { renderTopics }
}