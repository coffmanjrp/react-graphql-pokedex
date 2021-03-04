const axios = require('axios');
const {
  GraphQLObjectType,
  GraphQLString,
  GraphQLInt,
  GraphQLBoolean,
  GraphQLList,
  GraphQLSchema,
} = require('graphql');

// Pokemon Types
const PokemonType = new GraphQLObjectType({
  name: 'Pokemon',
  fields: () => ({
    id: { type: GraphQLInt },
    name: { type: GraphQLString },
    height: { type: GraphQLInt },
    weight: { type: GraphQLInt },
    sprites: { type: SpritesType },
    abilities: { type: new GraphQLList(AbilitiesType) },
    stats: { type: new GraphQLList(StatsType) },
    types: { type: new GraphQLList(TypesType) },
  }),
});

// Pokemon - Sprites Types
const SpritesType = new GraphQLObjectType({
  name: 'Sprites',
  fields: () => ({
    front_default: { type: GraphQLString },
    front_shiny: { type: GraphQLString },
  }),
});

// Pokemon - Abilities Type
const AbilitiesType = new GraphQLObjectType({
  name: 'Abilities',
  fields: () => ({
    ability: {
      type: new GraphQLObjectType({
        name: 'Ability',
        fields: () => ({
          name: { type: GraphQLString },
        }),
      }),
    },
  }),
});

// Pokemon - Stats Type
const StatsType = new GraphQLObjectType({
  name: 'Stats',
  fields: () => ({
    base_stat: { type: GraphQLInt },
    effort: { type: GraphQLInt },
    stat: {
      type: new GraphQLObjectType({
        name: 'Stat',
        fields: () => ({
          name: { type: GraphQLString },
        }),
      }),
    },
  }),
});

// Pokemon - Types Type
const TypesType = new GraphQLObjectType({
  name: 'Types',
  fields: () => ({
    type: {
      type: new GraphQLObjectType({
        name: 'Type',
        fields: () => ({
          name: { type: GraphQLString },
        }),
      }),
    },
  }),
});

// Species Types
const SpeciesType = new GraphQLObjectType({
  name: 'Species',
  fields: () => ({
    id: { type: GraphQLInt },
    name: { type: GraphQLString },
    names: { type: new GraphQLList(NamesTypes) },
    genera: { type: new GraphQLList(GenusTypes) },
    is_legendary: { type: GraphQLBoolean },
    is_mythical: { type: GraphQLBoolean },
    varieties: { type: new GraphQLList(VarietiesTypes) },
  }),
});

// Species - Genus Types
const GenusTypes = new GraphQLObjectType({
  name: 'Genus',
  fields: () => ({
    genus: { type: GraphQLString },
    language: {
      type: new GraphQLObjectType({
        name: 'GenusLanguage',
        fields: () => ({
          name: { type: GraphQLString },
        }),
      }),
    },
  }),
});

// Species - Names Types
const NamesTypes = new GraphQLObjectType({
  name: 'Names',
  fields: () => ({
    name: { type: GraphQLString },
    language: {
      type: new GraphQLObjectType({
        name: 'NamesLanguage',
        fields: () => ({
          name: { type: GraphQLString },
        }),
      }),
    },
  }),
});

// Species - Varieties Types
const VarietiesTypes = new GraphQLObjectType({
  name: 'Varieties',
  fields: () => ({
    pokemon: {
      type: new GraphQLObjectType({
        name: 'VarietiesName',
        fields: () => ({
          name: { type: GraphQLString },
          url: { type: GraphQLString },
        }),
      }),
    },
  }),
});

// Root Query
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
        id: { type: GraphQLInt },
      },
      async resolve(parent, args) {
        const res = await axios.get(
          `https://pokeapi.co/api/v2/pokemon/${args.id}`
        );
        const data = await res.data;

        return data;
      },
    },
    species: {
      type: new GraphQLList(SpeciesType),
      async resolve(parent, args) {
        const res = await axios.get(
          'https://pokeapi.co/api/v2/pokemon-species'
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
    specie: {
      type: SpeciesType,
      args: {
        id: { type: GraphQLInt },
      },
      async resolve(parent, args) {
        const res = await axios.get(
          `https://pokeapi.co/api/v2/pokemon-species/${args.id}`
        );
        const data = await res.data;

        return data;
      },
    },
  },
});

module.exports = new GraphQLSchema({
  query: RootQuery,
});
