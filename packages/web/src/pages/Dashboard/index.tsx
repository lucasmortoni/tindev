import {
  Button,
  Flex,
  Image,
  Tab,
  TabList,
  TabPanel,
  TabPanels,
  Tabs,
  Text
} from '@chakra-ui/react'

import { searchIcon } from '../../assets/SearchIcon'
import { briefcaseIcon } from '../../assets/BriefcaseIcon'
import { shieldIcon } from '../../assets/ShieldIcon'
import { dislikeIcon } from '../../assets/DislikeIcon'
import { superLikeIcon } from '../../assets/SuperLikeIcon'
import { likeIcon } from '../../assets/LikeIcon'

const Dashboard = () => (
  <Flex w="100vw" h="100vh">
    <Flex flexDir="column" h="100vh" w="22.5rem" bg="whiteAlpha.900">
      <Flex w="22.5rem" h="4.5rem" bg="red.400" align="center" justify="space-between" px={3}>
        <Flex as="a" href="#" align="center">
          <Image
            h={8}
            w={8}
            bg="white"
            mr={2.5}
            borderRadius={16}
            src="https://github.com/lucasmortoni.png"
          />
          <Text color="gray.50" fontWeight="medium" fontSize={15} letterSpacing="tight">
            Lucas
          </Text>
        </Flex>
        <Flex>
          <Flex
            as="button"
            align="center"
            justify="center"
            mr={4}
            transition="ease-out 0.2s"
            _hover={{ opacity: '0.7' }}
          >
            <Flex h={9} w={9} borderRadius={18} bg="red.700" align="center" justify="center">
              <Image as={searchIcon} h={6} w={6} fill="whiteAlpha.900" />
            </Flex>
          </Flex>
          <Flex
            as="button"
            align="center"
            justify="center"
            mr={4}
            transition="ease-out 0.2s"
            _hover={{ opacity: '0.7' }}
          >
            <Flex h={9} w={9} borderRadius={18} bg="red.700" align="center" justify="center">
              <Image as={briefcaseIcon} h={6} w={6} fill="whiteAlpha.900" />
            </Flex>
          </Flex>
          <Flex
            as="button"
            align="center"
            justify="center"
            mr={2}
            transition="ease-out 0.2s"
            _hover={{ opacity: '0.7' }}
          >
            <Flex h={9} w={9} borderRadius={18} bg="red.700" align="center" justify="center">
              <Image as={shieldIcon} h={6} w={6} fill="whiteAlpha.900" />
            </Flex>
          </Flex>
        </Flex>
      </Flex>

      <Flex px={3} py={1}>
        <Tabs variant="unstyled">
          <TabList>
            <Tab
              fontWeight="bold"
              fontSize={15}
              borderBottom="3px solid"
              borderBottomColor="whiteAlpha.900"
              _selected={{ borderBottom: '3px solid', borderBottomColor: 'red.400' }}
              _focus={{}}
            >
              Matches
            </Tab>
            <Tab
              fontWeight="bold"
              fontSize={15}
              borderBottom="3px solid"
              borderBottomColor="whiteAlpha.900"
              _selected={{ borderBottom: '3px solid', borderBottomColor: 'red.400' }}
              _focus={{}}
            >
              Messages
            </Tab>
          </TabList>
          <TabPanels>
            <TabPanel h="80vh" w="21rem">
              <Flex h="70vh" w="19rem" align="center" justify="center" flexDir="column">
                <Text>sorry, you got no matches right now.</Text>
              </Flex>
            </TabPanel>
            <TabPanel h="80vh" w="21rem">
              <Flex h="70vh" w="19rem" align="center" justify="center">
                <Text textAlign="center">no messages? start liking companies to get a match.</Text>
              </Flex>
            </TabPanel>
          </TabPanels>
        </Tabs>
      </Flex>
    </Flex>
    <Flex h="100vh" w="calc(100% - 20.5rem)" bg="gray.300" align="center" justify="center">
      <Flex
        h="600px"
        w="96"
        align="center"
        justify="space-between"
        borderRadius={10}
        flexDir="column"
      >
        <Flex>
          <Image
            h="auto"
            w="100vw"
            borderTopRadius={10}
            src="https://github.com/lucasmortoni.png"
          />
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
    </Flex>
  </Flex>
)

export default Dashboard
