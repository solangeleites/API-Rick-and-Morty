import React from 'react';
import {
  CardContainer,
  Title,
} from '../../components/cards/CardStyles';
import { useQuery } from 'react-query';
import axios from 'axios';
import Card from '../../components/cards/Card';

const Personajes = () => {
  const fetchPersonajes = async () => {
    return axios.get('https://rickandmortyapi.com/api/character/');
  };
  const { isLoading, data } = useQuery('personajes', fetchPersonajes);

  return (
    <>
    {isLoading && <h1>Cargando...</h1>}
      <Title>Personajes</Title>
      <CardContainer>
      {data?.data.results.map((personaje) => (<Card key={personaje.id} name={personaje.name} gender={personaje.gender} img={personaje.image}  species={personaje.species} status={personaje.status} />))}
      </CardContainer>
    </>
  );
};

export default Personajes;
