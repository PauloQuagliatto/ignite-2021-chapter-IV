import { Box, Button, Flex, Heading, Icon } from "@chakra-ui/react";

import { Header } from "@/components/Header";
import { Sidebar } from "@/components/Sidebar";
import { Plus } from "phosphor-react";

export default function UsersList() {
  return (
    <Box>
      <Header />
      <Flex w="100%" my="6" maxWidth={1480} mx="auto" px="6">
        <Sidebar />
        <Box flex="1" borderRadius={8} bg="gray.800" p="8">
          <Flex mb="8" justify="space-between" align="center">
            <Heading size="lg" fontWeight="normal">Usuários</Heading>

            <Button as="a" size="sm" fontSize="sm" colorScheme="pink" leftIcon={<Icon as={Plus} />}>
              Criar Novo
            </Button>
          </Flex>
        </Box>
      </Flex>
    </Box>
  );
};
