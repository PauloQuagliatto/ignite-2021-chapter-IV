import { Stack } from "@chakra-ui/react";
import { Gauge, GitMerge, Table, UserList } from "phosphor-react";

import { NavLink } from "./NavLink";
import { NavSection } from "./NavSection";

export function SidebarNav() {
  return (
    <Stack spacing="12" align="flex-start">
      <NavSection title="GERAL">
        <NavLink icon={Gauge} href="/dashboard" >Dashboard</NavLink>
        <NavLink icon={UserList} href="/users">Usuários</NavLink>
      </NavSection>
      <NavSection title="Automação">
        <NavLink icon={Table} href="/forms">Formulários</NavLink>
        <NavLink icon={GitMerge} href="/automation">Automação</NavLink>
      </NavSection>
    </Stack>
  );
};
