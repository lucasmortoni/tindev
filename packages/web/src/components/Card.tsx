import { Button, Flex, Image, Text } from '@chakra-ui/react'
import { dislikeIcon } from '../assets/DislikeIcon'
import { likeIcon } from '../assets/LikeIcon'
import { superLikeIcon } from '../assets/SuperLikeIcon'

const Card = () => (
  <Flex h="600px" w="96" align="center" justify="space-between" borderRadius={10} flexDir="column">
    <Flex>
      <Image h="auto" w="100vw" borderTopRadius={10} src="https://github.com/lucasmortoni.png" />
    </Flex>
    <Flex
      flexDir="column"
      bg="whiteAlpha.900"
      h="56"
      w="96"
      align="flex-start"
      py={4}
      px={6}
      justify="space-between"
      borderBottomRadius={10}
    >
      <Flex flexDir="column">
        <Text fontSize={22} fontWeight="semibold">
          Lucas Mortoni
        </Text>
        <Text fontSize={18} color="gray.500">
          @lucasmortoni
        </Text>
      </Flex>
      <Flex h="100px" w="330px" borderRadius={10} align="center" justify="center">
        <Flex>
          <Flex
            as={Button}
            variant="unstyled"
            h={16}
            w={16}
            align="center"
            justify="center"
            borderRadius={32}
            borderWidth="1px"
            borderColor="red.500"
          >
            <Image as={dislikeIcon} h={10} w={10} fill="red.500" />
          </Flex>
        </Flex>
        <Flex
          as={Button}
          variant="unstyled"
          ml="2"
          h={14}
          w={14}
          align="center"
          justify="center"
          borderRadius={28}
          borderWidth="1px"
          borderColor="blue.500"
        >
          <Flex>
            <Image as={superLikeIcon} h={8} w={8} fill="blue.500" />
          </Flex>
        </Flex>
        <Flex
          as={Button}
          variant="unstyled"
          ml="2"
          h={16}
          w={16}
          align="center"
          justify="center"
          borderRadius={32}
          borderWidth="1px"
          borderColor="green.500"
        >
          <Flex>
            <Image as={likeIcon} h={10} w={10} fill="green.500" />
          </Flex>
        </Flex>
      </Flex>
    </Flex>
  </Flex>
)

export default Card
