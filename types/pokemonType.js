const axios = require('axios');
const {
  GraphQLObjectType,
  GraphQLString,
  GraphQLInt,
  GraphQLID,
  GraphQLList,
} = require('graphql');
const SpeciesType = require('./speciesType');

// Pokemon Types
const PokemonType = new GraphQLObjectType({
  name: 'Pokemons',
  fields: () => ({
    id: { type: GraphQLID },
    name: { type: GraphQLString },
    height: { type: GraphQLInt },
    weight: { type: GraphQLInt },
    species: {
      type: SpeciesType,
      async resolve(parent, args) {
        const res = await axios.get(parent.species.url);
        return res.data;
      },
    },
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

module.exports = PokemonType;
