import { makeExecutableSchema } from '@graphql-tools/schema'
import resolvers from '@infra/graphql/resolvers'
import typeDefs from '@infra/graphql/typedefs'

export default makeExecutableSchema({
  resolvers,
  typeDefs
})
