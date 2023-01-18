import { ChakraProvider, VStack, theme } from '@chakra-ui/react'
import { Tasks } from './tasks/TaskIndex'
import { Header } from '../components/Header'

export const App = () => (
  <ChakraProvider theme={theme}>
    <VStack spacing={8}>
      <Header />
      <Tasks />
    </VStack>
  </ChakraProvider>
)
