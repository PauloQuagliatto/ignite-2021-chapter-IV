import { Box, Stack } from "@chakra-ui/react";
import { Gauge, GitMerge, Table, UserList } from "phosphor-react";
import { NavLink } from "./NavLink";
import { NavSection } from "./NavSection";

export function Sidebar() {
  return (
    <Box as="aside" w="64" mr="8">
      <Stack spacing="12" align="flex-start">
        <NavSection title="GERAL">
          <NavLink icon={Gauge} >Dashboard</NavLink>
          <NavLink icon={UserList}>Usuários</NavLink>
        </NavSection>
        <NavSection title="Automação">
          <NavLink icon={Table}>Formulários</NavLink>
          <NavLink icon={GitMerge}>Automação</NavLink>
        </NavSection>
      </Stack>
    </Box>
  )
}
