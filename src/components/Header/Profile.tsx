import { Avatar, Box, Flex, Text } from "@chakra-ui/react";

export function Profile() {
  return (
    <Flex
      align="center"
    >
      <Box mr="4" textAlign="right">
        <Text>Paulo Miranda</Text>
        <Text color="gray.300" fontSize="small">
          pquagliatto@gmail.com
        </Text>
      </Box>

      <Avatar size="md" name="Paulo Miranda" src="https://github.com/PauloQuagliatto.png" />
    </Flex>
  )
}
