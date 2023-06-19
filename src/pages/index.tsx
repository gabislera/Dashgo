import { Flex, Button, Stack } from '@chakra-ui/react'
import { Input } from '../components/form/Input'

export default function SignIn() {
  return (
    <Flex w='100vw' h='100vh' align='center' justify='center'>
      <Flex as='form' w='100%' maxW='360px' bg='gray.800' flexDir='column' p='8' borderRadius={8}>
        <Stack spacing={4}>
          <Input type='email' name='email' label='Email'/>
          <Input type='password' name='password' label='Senha'/>
        </Stack>

        <Button type='submit' mt='6' colorScheme='pink' size='lg'>Entrar</Button>
      </Flex>
    </Flex>
  )
}
