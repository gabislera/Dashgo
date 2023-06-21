import { FormLabel, FormControl, Input as ChakraInput, InputProps as ChakraInputProps, forwardRef, FormErrorMessage } from '@chakra-ui/react'
import { ForwardRefRenderFunction } from 'react'
import { FieldError } from 'react-hook-form/dist/types'

interface InputProps extends ChakraInputProps {
  name: string
  label?: string
  error?: FieldError
}

const InputBase: ForwardRefRenderFunction<HTMLInputElement, InputProps> = ({ name, error = null, label, ...rest }, ref) => {
  return (
    <FormControl isInvalid={!!error}>
      {!!label && <FormLabel htmlFor={name}>{label}</FormLabel>}
      <ChakraInput 
        id={name} 
        name={name} 
        focusBorderColor='pink.500' 
        bg='gray.900' 
        variant='filled' 
        _hover={{ bgColor: 'gray.900 '}} 
        size='lg' 
        ref={ref}
        {...rest}
      />
      {!!error && (
        <FormErrorMessage>
          {error.message}
        </FormErrorMessage>
        )}
    </FormControl>
  )
}

export const Input = forwardRef(InputBase)