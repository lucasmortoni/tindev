import { Flex, Image, Tab, TabList, TabPanel, TabPanels, Tabs, Text } from '@chakra-ui/react'

import { searchIcon } from '../../assets/SearchIcon'
import { briefcaseIcon } from '../../assets/BriefcaseIcon'
import { shieldIcon } from '../../assets/ShieldIcon'
import Card from '../../components/Card'

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
      <Card />
    </Flex>
  </Flex>
)

export default Dashboard
