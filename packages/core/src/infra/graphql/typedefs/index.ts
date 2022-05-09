import path from 'path'
import { loadFilesSync } from '@graphql-tools/load-files'
import { mergeTypeDefs } from '@graphql-tools/merge'

const mergeResolversPath = loadFilesSync(path.join(__dirname, '*.gql'))

const typeDefs = mergeTypeDefs(mergeResolversPath)

export default typeDefs
