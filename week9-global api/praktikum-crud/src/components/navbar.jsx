import {
  Container,
  Box,
  Link,
  Stack,
  Flex,
  Menu,
  MenuItem,
  MenuList,
  MenuButton,
  IconButton,
  useColorModeValue,
  Heading,
  Text
} from '@chakra-ui/react'
import { HamburgerIcon } from '@chakra-ui/icons'
import ThemeToggleButton from './theme-togle-button'

const Navbar = (props) => {

  return (
    <Box
      top={0}
      position="fixed"
      as="nav"
      w="100%"
      zIndex={1}
      {...props}
    >
      <div style={{
        padding: 2,
        backgroundColor: "#E9C46A"
      }} />
      <Container
        display="flex"
        p={5}
        maxW="container.lg"
        justifyContent="space-between"
      >
        <div>
          <Heading as='h4' size='md'>
            Kontak Mahasiswa
          </Heading>
          <Text mt={2} fontSize='md'>Manajemen data kontak mahasiswa atau alumni mahasiswa Politeknik Negeri Malang</Text>
        </div>
        <Box>
          <ThemeToggleButton />
          <Box ml={2} display={{ base: 'inline-block', md: 'none' }}>
            <Menu isLazy id="navbar-menu">
              <MenuButton
                as={IconButton}
                icon={<HamburgerIcon />}
                variant="outline"
                aria-label="Options"
                color="#fff"
              />
              <MenuList>
                {/* <NextLink href="/" passHref> */}
                <MenuItem as={Link}>Home</MenuItem>
                {/* </NextLink> */}
                {/* <NextLink href="/contacts" passHref> */}
                <MenuItem as={Link}>Contacts</MenuItem>
                {/* </NextLink> */}
                <MenuItem
                  as={Link}
                  href="https://majangstories.blogspot.com"
                >
                  Blog
                </MenuItem>
              </MenuList>
            </Menu>
          </Box>
        </Box>
      </Container>
    </Box>
  )
}

export default Navbar