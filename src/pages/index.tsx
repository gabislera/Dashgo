import { Flex, Button, Stack } from '@chakra-ui/react'
import { Input } from '../components/Form/Input'
import { useForm, SubmitHandler } from 'react-hook-form'

type SignInFormData = {
  email: string
  password: string
}

export default function SignIn() {
  const { register, handleSubmit, formState } = useForm()

  const handleSignIn: SubmitHandler<SignInFormData> = async (values) => {
    await new Promise(resolve => setTimeout(resolve, 2000))
    console.log(values)
  }

  return (
    <Flex w='100vw' h='100vh' align='center' justify='center'>
      <Flex onSubmit={handleSubmit(handleSignIn)} as='form' w='100%' maxW='360px' bg='gray.800' flexDir='column' p='8' borderRadius={8}>
        <Stack spacing={4}>
          <Input {...register('email')}  type='email' name='email' label='Email'/>
          <Input {...register('password')} type='password' name='password' label='Senha'/>
        </Stack>

        <Button isLoading={formState.isSubmitting} type='submit' mt='6' colorScheme='pink' size='lg'>Entrar</Button>
      </Flex>
    </Flex>
  )
}
