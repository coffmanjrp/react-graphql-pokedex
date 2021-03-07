const {
  GraphQLObjectType,
  GraphQLString,
  GraphQLInt,
  GraphQLBoolean,
  GraphQLID,
  GraphQLList,
} = require('graphql');

// Species Type
const SpeciesType = new GraphQLObjectType({
  name: 'Species',
  fields: () => ({
    id: { type: GraphQLID },
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

module.exports = SpeciesType;
