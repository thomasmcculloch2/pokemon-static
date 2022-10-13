import { Card, Grid, Row, Text } from '@nextui-org/react';
import type { NextPage, GetStaticProps } from 'next'
import { pokeApi } from '../api';
import { Layout } from '../components/layouts/Layout';
import { PokemonCard } from '../components/pokemon';
import { PokemonListResponse, SmallPokemon } from '../interfaces';

interface Props {
  pokemons: SmallPokemon[];
}

const HomePage: NextPage<Props> = ( {pokemons}) => {
  return (
    <Layout title = 'PokemonPage'> 
      <Grid.Container gap ={2} justify='flex-start'>
        {
          pokemons.map((pokemon) => (
            <PokemonCard key={pokemon.id} pokemon={pokemon}></PokemonCard>
          ))
        }
      </Grid.Container>
    </Layout>
    
  )
}

export const getStaticProps: GetStaticProps = async (ctx) => {
const { data } = await pokeApi.get<PokemonListResponse>('/pokemon?limit=151');

const pokemons: SmallPokemon[] = data.results.map((poke,i) => ({
  ...poke,
  id: i + 1,
  img: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${i+1}.svg`
}))

  return {
    props: {
      pokemons: pokemons
    }
  }
}
export default HomePage;
