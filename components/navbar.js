import NextLink from 'next/link';
import{ Container, Box, Link, Stack, Heading, Flex, Menu, MenuItem, MenuList, MenuButton, IconButton, useColorModeValue} from '@chakra-ui/react';
import { HamburgerIcon } from '@chakra-ui/icons';

const LinkItem = ({href, path,children}) => {
    const active = path == href
    const inactiveColor = useColorModeValue('gray300')
    return(
        <NextLink href={href} passHref>
            <Link
                p={3}
                bg={active ? 'glassTeal': undefined}
                color={active ? '##202023': inactiveColor}>
                    {children}
            </Link>
        </NextLink>
    )
}

const Navbar = props => {
    const { path }= props

    return(
        <Box
            position = "fixed"
            as="nav"
            w= "100%"
            textAlign="right"
            bg={useColorModeValue('#ffffff40')}
            style={{backdropFilter: 'blur(10px'}}
            zIndex={1}
            {...props}>
               
                <Container display ="flex" 
                p={3.5} maxW="container.xl" 
                wrap="wrap" 
                align="center" 
                //marginInlineStart="12rem"
                justify="space-between">
                     
                    <Flex align="center" mr={4}>
                    <Link href="/">
                        <Heading as="h1" size="md" letterSpacing={'tighter'} color="gray.800">
                            Tarkan Yildirim
                        </Heading>
                        </Link>
                    </Flex>
                  
                    <Stack
                    direction={{base: 'column', md:'row'}}
                    display={{base: 'none', md:'flex'}}
                    width= {{base: 'full', md:'auto'}}
                    alignItems='center'
                    flexGrow={1}
                    mt={{base: 4, md: 0}}>
                        <LinkItem href="/" path={path}>
                        Bio
                        </LinkItem>
                        <LinkItem href="/social" path={path}>
                        Social Media
                        </LinkItem>
                    </Stack>
                    <Box flex={1} align="right">
                        <Box ml={2} display={{base: 'inline-block', md:'none'}}>
                            <Menu>
                                <MenuButton as = {IconButton} icon={<HamburgerIcon/>} variant="outline" aria-label="Options"/>
                                <MenuList>
                                    <NextLink href="/" passHref>
                                        <MenuItem as={Link}>Bio</MenuItem>
                                    </NextLink>
                                    <NextLink href="/social" passHref>
                                        <MenuItem as={Link}>Soziale Netzwerke</MenuItem>
                                    </NextLink>
                                </MenuList>
                            </Menu>
                    </Box>
                    </Box>
                </Container>
            </Box>
    )
}

export default Navbar