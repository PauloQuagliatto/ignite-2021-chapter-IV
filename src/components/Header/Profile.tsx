import { Avatar, Box, Flex, Text } from "@chakra-ui/react";

interface ProfileProps {
  showProfileData: boolean;
};

export function Profile({ showProfileData = true }: ProfileProps) {
  return (
    <Flex
      align="center"
    >
      {showProfileData ? <Box mr="4" textAlign="right">
        <Text>Paulo Miranda</Text>
        <Text color="gray.300" fontSize="small">
          pquagliatto@gmail.com
        </Text>
      </Box> : null}

      <Avatar size="md" name="Paulo Miranda" src="https://github.com/PauloQuagliatto.png" />
    </Flex>
  )
}
