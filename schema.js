const axios = require('axios');
const {
  GraphQLObjectType,
  GraphQLString,
  GraphQLInt,
  GraphQLBoolean,
  GraphQLObject,
  GraphQLList,
  GraphQLSchema,
} = require('graphql');

// Pokemon Types
const PokemonType = new GraphQLObjectType({
  name: 'Pokemon',
  fields: () => ({
    name: { type: GraphQLString },
    height: { type: GraphQLInt },
    weight: { type: GraphQLInt },
    sprites: { type: SpritesType },
  }),
});

const SpritesType = new GraphQLObjectType({
  name: 'Sprites',
  fields: () => ({
    front_default: { type: GraphQLString },
    front_shiny: { type: GraphQLString },
  }),
});

// Root Query
const RootQuery = new GraphQLObjectType({
  name: 'RootQueryType',
  fields: {
    pokemons: {
      type: new GraphQLList(PokemonType),
      async resolve(parent, args) {
        const res = await axios.get(
          'https://pokeapi.co/api/v2/pokemon?offset=0&limit=151'
        );
        const data = await res.data;

        const results = await Promise.all(
          data.results.map(async (result) => {
            const res = await axios.get(result.url);
            const data = await res.data;

            return data;
          })
        );

        return results;
      },
    },
  },
});

module.exports = new GraphQLSchema({
  query: RootQuery,
});
