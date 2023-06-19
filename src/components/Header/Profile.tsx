import { Avatar, Box, Flex, Text } from "@chakra-ui/react";

export function Profile() {
  return (
    <Flex align='center'>
      <Box mr='4' textAlign='right'>
        <Text>Gabriela Carniel</Text>
        <Text color='gray.300' fontSize='sm'>gabiicarniel@gmail.com</Text>
      </Box>

    <Avatar size='md' name='Gabriela Carniel' src='https://github.com/gabislera.png'/>
  </Flex>
    )
}