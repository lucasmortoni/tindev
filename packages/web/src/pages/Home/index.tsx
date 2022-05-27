import { Button, Flex, Icon, Text } from '@chakra-ui/react'
import { tindevIcon } from '../../assets/TindevIcon'

const Home = () => (
  <Flex w="100vw" h="100vh" bg="#2b2d42">
    <Flex align="center" justify="space-between" p={6} h={20} w="100vw">
      <Flex align="center">
        <Icon as={tindevIcon} h={8} w={8} color="red" fill="#edf2f4" mr={1} />
        <Text
          fontFamily="Montserrat"
          fontWeight="bold"
          fontSize={40}
          color="#edf2f4"
          letterSpacing="tighter"
        >
          tindev
        </Text>
      </Flex>
      <Flex>
        <Button color="#edf2f4" w="32">
          <Text color="#ef233c">Log In</Text>
        </Button>
      </Flex>
    </Flex>
  </Flex>
)

export default Home
