import Link from "next/link";
import {
  Box,
  Button,
  Divider,
  Flex,
  Heading,
  HStack,
  SimpleGrid,
  VStack,
} from "@chakra-ui/react";
import { SubmitHandler, useForm } from "react-hook-form";
import * as z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

import { Header } from "@/components/Header";
import { Sidebar } from "@/components/Sidebar";
import { Input } from "@/components/Form/Input";

const createUserFormSchema = z.object({
  name: z.string().min(1, 'Nome é obrigatório'),
  email: z.string().min(1, 'Email é obrigatório').email('Email deve ser válido'),
  password: z.string().min(6, 'Senha deve ter no mínimo 6 caracteres'),
  passwordConfirmation: z.string().min(6, 'Confirmação de senha deve ter no mínimo 6 caracteres'),
}).refine((data) => data.password === data.passwordConfirmation, {
  message: "As senhas são diferentes",
  path: ["passwordConfirmation"]
});

type CreateUserFormData = z.infer<typeof createUserFormSchema>

export default function CreateUser() {
  const { register, formState, handleSubmit } = useForm<CreateUserFormData>({
    resolver: zodResolver(createUserFormSchema),
    defaultValues: {
      name: "",
      email: "",
      password: "",
      passwordConfirmation: ""
    }
  })
  const { errors } = formState

  const handleCreateUser: SubmitHandler<CreateUserFormData> = async (values, event) => {
    await new Promise(resolve => setTimeout(resolve, 2000))

    console.log(values)
  }
  return (
    <Box>
      <Header />
      <Flex w="100%" my="6" maxWidth={1480} mx="auto" px="6">
        <Sidebar />
        <Box
          as="form"
          flex="1"
          borderRadius={8}
          bg="gray.800"
          p={["6", "8"]}
          onSubmit={handleSubmit(handleCreateUser)}
        >
          <Heading fontSize="lg" fontWeight="normal">Criar um Usuário</Heading>

          <Divider my="6" borderColor="gray.700" />

          <VStack spacing="8">
            <SimpleGrid minChildWidth="240px" spacing={["6", "8"]} w="100%">
              <Input
                name="name"
                label="Nome completo"
                register={register}
                error={errors.name}
              />
              <Input
                name="email"
                type="email"
                label="E-mail"
                register={register}
                error={errors.email}
              />
            </SimpleGrid>
            <SimpleGrid minChildWidth="240px" spacing={["6", "8"]} w="100%">
              <Input
                name="password"
                type="password"
                label="Senha"
                register={register}
                error={errors.password}
              />
              <Input
                name="passwordConfirmation"
                type="password"
                label="Confirmação de senha"
                register={register}
                error={errors.passwordConfirmation}
              />
            </SimpleGrid>
          </VStack>

          <Flex mt="8" justify="flex-end">
            <HStack spacing="8">
              <Link href="/users/create" passHref>
                <Button colorScheme="whiteAlpha">Cancelar</Button>
              </Link>
              <Button
                type="submit"
                colorScheme="pink"
                isLoading={formState.isSubmitting}
              >Salvar</Button>
            </HStack>
          </Flex>
        </Box>
      </Flex>
    </Box>
  );
};
