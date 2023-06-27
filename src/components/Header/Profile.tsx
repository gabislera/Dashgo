import { Avatar, Box, Flex, Link, Text } from "@chakra-ui/react";
import router from "next/router";
import { destroyCookie } from "nookies";
// import {AiOutlineClose} from 'react-icons/ai'

interface ProfileProps {
  showProfileData: boolean
}

export function Profile({ showProfileData = true }: ProfileProps) {
  const handleLogout = () => {
    destroyCookie(null, 'token');

    router.push('/');
  }

  return (
    <Flex align='center'>
      {showProfileData && (
        <Box mr='4' textAlign='right'>
          <Text>Gabriela Carniel</Text>
          <Text color='gray.300' fontSize='sm'>gabiicarniel@gmail.com</Text>
        </Box>
      )}

    <Link onClick={handleLogout}>
      <Box position="relative" display="inline-block">
        <Avatar
          name='Gabriela Carniel' 
          src='https://github.com/gabislera.png'
        />
        <Box
          position="absolute"
          top={0}
          left={0}
          right={0}
          bottom={0}
          borderRadius="full"
          bg="gray.700"
          opacity={0}
          transition="opacity 0.2s"
          _hover={{ opacity: 0.8 }}
          
        />
        {/* <Box
          position="absolute"
          top={1}
          right={1}
          // visibility="hidden"
          // _hover={{ visibility: "visible" }}
        >
          <AiOutlineClose size={40} />
        </Box> */}
      </Box>
      {/* <Avatar _hover={{ bg: "blue.500" }} bg='gray.300' size='md' name='Gabriela Carniel' src='https://github.com/gabislera.png'/> */}
    </Link>
  </Flex>
    )
}