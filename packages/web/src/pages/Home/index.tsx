import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  Button,
  Divider,
  Flex,
  Icon,
  Image,
  Text
} from '@chakra-ui/react'
import { tindevIcon } from '../../assets/TindevIcon'

const Home = () => (
  <Flex
    w="100vw"
    h="100vh"
    flexDirection="column"
    overflow="scroll"
    css={{ '&::-webkit-scrollbar': { display: 'none' } }}
  >
    <Flex
      align="center"
      justify="space-between"
      p={6}
      h={20}
      w="100vw"
      zIndex={1}
      position="fixed"
      bgGradient="linear(to-b, blackAlpha.900, blackAlpha.700, blackAlpha.600, transparent)"
    >
      <Flex as="a" href="#" align="center">
        <Icon as={tindevIcon} h={8} w={8} color="red.500" fill="gray.50" mr={1} />
        <Text
          fontFamily="Montserrat"
          fontWeight="bold"
          fontSize={40}
          color="gray.50"
          letterSpacing="tighter"
        >
          tindev
        </Text>
      </Flex>
      <Flex>
        <Button
          variant="link"
          w="28"
          mr={2}
          _focus={{ outlineColor: 'red.500', outlineOffset: 0 }}
          _hover={{ textDecoration: 'none' }}
        >
          <Text color="gray.50" fontSize={18}>
            Sign up
          </Text>
        </Button>
        <Button bg="gray.50" w="28" _focus={{ outlineColor: 'red.500', outlineOffset: 0 }}>
          <Text color="red.500" fontSize={18}>
            Log in
          </Text>
        </Button>
      </Flex>
    </Flex>

    <Flex
      w="100vw"
      align="center"
      justify="center"
      minHeight="100vh"
      boxShadow="rgba(0, 0, 0, .3) inset 0 0 0 1000px"
      backgroundImage="url(https://tinder.com/static/build/590275fec8cbbb0de80caa66c8450906.jpg)"
    />

    <Flex as="footer" bg="gray.50" minHeight="sm" w="100vw">
      <Flex mt={8} flexDir="column" px={28} w="100vw">
        <Flex>
          <Flex w="25vw" flexDir="column">
            <Text fontSize="larger" fontWeight="bold">
              LEGAL
            </Text>
            <Text as="a" href="#" _hover={{ color: 'red.500' }} mt={4}>
              Privacy
            </Text>
            <Text as="a" href="#" _hover={{ color: 'red.500' }} mt={2}>
              Terms
            </Text>
            <Text as="a" href="#" _hover={{ color: 'red.500' }} mt={2}>
              Cookie Policy
            </Text>
            <Text as="a" href="#" _hover={{ color: 'red.500' }} mt={2}>
              Intellectual Property
            </Text>
          </Flex>
          <Flex w="25vw" flexDir="column">
            <Text fontSize="larger" fontWeight="bold">
              CAREERS
            </Text>
            <Text as="a" href="#" _hover={{ color: 'red.500' }} mt={4}>
              Careers Portal
            </Text>
            <Text as="a" href="#" _hover={{ color: 'red.500' }} mt={2}>
              Tech Blog
            </Text>
          </Flex>
          <Flex w="25vw" flexDir="column">
            <Text fontSize="larger" fontWeight="bold">
              SOCIAL
            </Text>
          </Flex>
          <Flex w="25vw" flexDir="column">
            <Text as="a" href="#" _hover={{ color: 'red.500' }} mt={1}>
              FAQ
            </Text>
            <Text as="a" href="#" _hover={{ color: 'red.500' }} mt={2}>
              Destinations
            </Text>
            <Text as="a" href="#" _hover={{ color: 'red.500' }} mt={2}>
              Press Room
            </Text>
            <Text as="a" href="#" _hover={{ color: 'red.500' }} mt={2}>
              Contact
            </Text>
            <Text as="a" href="#" _hover={{ color: 'red.500' }} mt={2}>
              Promo Code
            </Text>
          </Flex>
          <Flex w="25vw" />
        </Flex>

        <Divider mt={4} borderColor="gray.400" />

        <Flex align="center" mt={4}>
          <Text fontWeight="bold" fontSize="large" letterSpacing={1}>
            GET THE APP!
          </Text>
          <Image
            src="https://tinder.com/static/build/d256a5b510a685030be375c63a9010e9.webp"
            w="144px"
            h="46px"
            ml={8}
          />
          <Image
            src="https://tinder.com/static/build/03aed264f8539c570e9bc80ba6b60d92.webp"
            w="170px"
            h="68px"
            ml={8}
          />
        </Flex>
        <Flex flexDir="column" mt={4}>
          <Text fontSize={14} color="gray.600">
            All you singles, listen up: if you&apos;re looking to fall in love, want to start
            dating, ready to start a relationship, or want to keep it casual, you need to be on
            Tinder. With over 55 billion matches made, it&apos;s the best free dating site to find
            your next best match. You&apos;ve probably noticed; the dating landscape looks very
            different today, with most of us choosing to meet people online. With Tinder, the
            world&apos;s most popular free dating app, you have millions of other singles at your
            fingertips, and they&apos;re all ready to meet someone like you. Whether you&apos;re
            straight or part of the LGBTQIA community, Tinder&apos;s here to get the sparks flying.
          </Text>
          <Text fontSize={14} color="gray.600" mt={4}>
            There really is something for everyone on Tinder. Looking for a relationship?
            You&apos;ve got it. Want to make friends online? Say no more. Just started uni and want
            to make the most of your experience? Tinder U&apos;s got you covered. Tinder isn&apos;t
            your average dating site; it&apos;s the most diverse dating app, where adults of all
            backgrounds and experiences are invited to make connections, memories and everything in
            between.
          </Text>

          <Divider mt={4} borderColor="gray.400" />
          <Flex align="center" justify="space-between" py={4} mb={4}>
            <Flex>
              <Breadcrumb color="gray.500">
                <BreadcrumbItem>
                  <BreadcrumbLink
                    fontSize="sm"
                    color="gray.600"
                    _hover={{ textDecor: 'none', color: 'red.500' }}
                  >
                    FAQ
                  </BreadcrumbLink>
                </BreadcrumbItem>
                <BreadcrumbItem>
                  <BreadcrumbLink
                    fontSize="sm"
                    color="gray.600"
                    _hover={{ textDecor: 'none', color: 'red.500' }}
                  >
                    Safety Tips
                  </BreadcrumbLink>
                </BreadcrumbItem>
                <BreadcrumbItem>
                  <BreadcrumbLink
                    fontSize="sm"
                    color="gray.600"
                    _hover={{ textDecor: 'none', color: 'red.500' }}
                  >
                    Terms
                  </BreadcrumbLink>
                </BreadcrumbItem>
                <BreadcrumbItem>
                  <BreadcrumbLink
                    fontSize="sm"
                    color="gray.600"
                    _hover={{ textDecor: 'none', color: 'red.500' }}
                  >
                    Cookie Policy
                  </BreadcrumbLink>
                </BreadcrumbItem>
                <BreadcrumbItem>
                  <BreadcrumbLink
                    fontSize="sm"
                    color="gray.600"
                    _hover={{ textDecor: 'none', color: 'red.500' }}
                  >
                    Privacy Settings
                  </BreadcrumbLink>
                </BreadcrumbItem>
              </Breadcrumb>
            </Flex>
            <Text fontSize={14} color="gray.600">
              © 2022 Mortoni, Lucas, All Rights Reserved.
            </Text>
          </Flex>
        </Flex>
      </Flex>
    </Flex>
  </Flex>
)

export default Home
