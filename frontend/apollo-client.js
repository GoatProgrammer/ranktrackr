import { ApolloClient, InMemoryCache } from "@apollo/client"

const client = new ApolloClient({
  uri: 'http://localhost:5001/api/named-owl',
  headers: {
    Authorization: `Apikey ${process.env.STEPZEN_API_KEY}`
  },
  cache: new InMemoryCache()
})

export default client
