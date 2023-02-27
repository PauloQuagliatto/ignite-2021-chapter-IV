import Link from "next/link";
import {
  Box,
  Button,
  Checkbox,
  Flex,
  Heading,
  Icon,
  Spinner,
  Table,
  Tbody,
  Td,
  Text,
  Th,
  Thead,
  Tr,
  useBreakpointValue
} from "@chakra-ui/react";
import { PencilSimpleLine, Plus } from "phosphor-react";

import { Header } from "@/components/Header";
import { Sidebar } from "@/components/Sidebar";
import { Pagination } from "@/components/Pagination";

import { useUsers } from "@/services/hooks/useUsers";
import { useState } from "react";

export default function UsersList() {
  const [currentPage, setCurrentPage] = useState(1);
  const { data, isLoading, isFetching, error } = useUsers(currentPage);

  const isWideVersion = useBreakpointValue({
    base: false,
    lg: true
  });

  return (
    <Box>
      <Header />
      <Flex w="100%" my="6" maxWidth={1480} mx="auto" px="6">
        <Sidebar />
        <Box flex="1" borderRadius={8} bg="gray.800" p="8">
          <Flex mb="8" justify="space-between" align="center">
            <Heading size="lg" fontWeight="normal">
              Usuários

              {!isLoading && isFetching ? <Spinner size="sm" color="gray.500" ml="4" /> : null}
            </Heading>

            <Link href="/users/create" passHref>
              <Button
                as="a"
                size="sm"
                fontSize="sm"
                colorScheme="pink"
                leftIcon={<Icon as={Plus} fontSize="20" />}
              >
                Criar Novo
              </Button>
            </Link>
          </Flex>

          {isLoading ?
            <Flex justify="center">
              <Spinner />
            </Flex>
            : error ?
              <Flex justify="center">
                <Text>Falha</Text>
              </Flex>
              : <>
                <Table colorScheme="white-alpha">
                  <Thead>
                    <Tr>
                      <Th px={["4", "4", "6"]} color="gray.300" width="8">
                        <Checkbox colorScheme="pink" />
                      </Th>
                      <Th>Usuário</Th>
                      {isWideVersion ? <Th>Data de Cadastro</Th> : null}
                      {isWideVersion ? <Th width="8" /> : null}
                    </Tr>
                  </Thead>
                  <Tbody>
                    {data!.users.map((user) => {
                      return (
                        <Tr key={user.id}>
                          <Td px={["4", "4", "6"]}>
                            <Checkbox colorScheme="pink" />
                          </Td>
                          <Td>
                            <Box>
                              <Text fontWeight="bold">{user.name}</Text>
                              <Text fontSize="sm" color="gray.300">{user.email}</Text>
                            </Box>
                          </Td>
                          {isWideVersion ?
                            <Td>{user.createdAt}</Td>
                            : null}
                          {isWideVersion ? <Td>
                            <Button
                              as="a"
                              size="sm"
                              fontSize="sm"
                              colorScheme="purple"
                              leftIcon={<Icon as={PencilSimpleLine} fontSize="16" />}
                            >
                              Editar
                            </Button>
                          </Td> : null}
                        </Tr>
                      )
                    })}
                  </Tbody>
                </Table>
                <Pagination
                  totalCountOfRegistries={200}
                  currentPage={currentPage}
                  onPageChange={setCurrentPage}
                />
              </>}
        </Box>
      </Flex>
    </Box>
  );
};
