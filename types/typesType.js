const { GraphQLObjectType, GraphQLString, GraphQLList } = require('graphql');

// Types Type
const TypesType = new GraphQLObjectType({
  name: 'Types',
  fields: () => ({
    name: { type: GraphQLString },
    names: { type: new GraphQLList(TypesNamesType) },
  }),
});

// Types - TypesName
const TypesNamesType = new GraphQLObjectType({
  name: 'TypesNames',
  fields: () => ({
    name: { type: GraphQLString },
    language: {
      type: new GraphQLObjectType({
        name: 'TypesLanguage',
        fields: () => ({
          name: { type: GraphQLString },
        }),
      }),
    },
  }),
});

module.exports = TypesType;
