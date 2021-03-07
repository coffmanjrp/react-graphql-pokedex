const axios = require('axios');
const {
  GraphQLObjectType,
  GraphQLID,
  GraphQLList,
  GraphQLSchema,
} = require('graphql');
const PokemonType = require('./types/pokemonType');

// RootQuery
const RootQuery = new GraphQLObjectType({
  name: 'RootQueryType',
  fields: {
    pokemons: {
      type: new GraphQLList(PokemonType),
      async resolve(parent, args) {
        const res = await axios.get('https://pokeapi.co/api/v2/pokemon');
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
    pokemon: {
      type: PokemonType,
      args: {
        id: { type: GraphQLID },
      },
      async resolve(parent, args) {
        const res = await axios.get(
          `https://pokeapi.co/api/v2/pokemon/${args.id}`
        );
        return res.data;
      },
    },
  },
});

module.exports = new GraphQLSchema({
  query: RootQuery,
});
