import {
  FormControl,
  FormErrorMessage,
  FormLabel,
  Input as ChakraInput,
  InputProps as ChakraInputProps
} from '@chakra-ui/react'
import { FieldError, FieldValues, UseFormRegister } from 'react-hook-form'

interface InputProps extends ChakraInputProps {
  name: string
  label?: string
  register: UseFormRegister<FieldValues>
  error?: FieldError
}

export function Input({
  name,
  error,
  label,
  register,
  ...rest
}: InputProps) {
  return (
    <FormControl isInvalid={!!error}>
      {!!label ? <FormLabel htmlFor={name}>{label}</FormLabel> : null}
      <ChakraInput
        id={name}
        bgColor={'gray.900'}
        focusBorderColor='pink.500'
        variant="filled"
        _hover={{ bgColor: 'gray.900' }}
        size="lg"
        {...register(name)}
        {...rest}
      />
      {!!error ?
        <FormErrorMessage>
          {error.message}
        </FormErrorMessage>
        : null}
    </FormControl>
  )
}
