import { Box, Stack, Text } from "@chakra-ui/react";
import { PaginationItem } from "./PaginationItem";

interface PaginationProps {
  totalCountOfRegistries: number;
  registersPerPage?: number;
  currentPage?: number;
  onPageChange: (page: number) => void;
}

const siblingsCount = 2;

function generatePagesArray(from: number, to: number) {
  return [...new Array(to - from)]
    .map((_, index) => {
      return from + index + 1
    })
    .filter(page => page > 0)
}

export function Pagination({
  totalCountOfRegistries,
  registersPerPage = 10,
  currentPage = 1,
  onPageChange
}: PaginationProps) {
  const lastPage = Math.floor(totalCountOfRegistries / registersPerPage);

  const previousPages = currentPage > 1
    ? generatePagesArray(currentPage - 1 - siblingsCount, currentPage - 1)
    : []

  const nextPages = currentPage < lastPage
    ? generatePagesArray(currentPage, Math.min(currentPage + siblingsCount, lastPage))
    : []

  return (
    <Stack
      direction={["column", "row"]}
      mt="8"
      justify="space-between"
      align="center"
      spacing="6"
    >
      <Box>
        <strong>0</strong> - <strong>10</strong> de <strong>{totalCountOfRegistries}</strong>
      </Box>
      <Stack direction="row" spacing="2">

        {currentPage > (1 + siblingsCount) ?
          <>
            <PaginationItem pageNumber={1} onPageChange={onPageChange} />
            {currentPage > (2 + siblingsCount) ?
              <Text color="gray.300" w="8" textAlign="center">
                ...
              </Text>
              : null}
          </>
          : null}
        {previousPages.length > 0 ?
          previousPages.map((page) => {
            return <PaginationItem key={page} pageNumber={page} onPageChange={onPageChange} />
          })
          : null}

        <PaginationItem pageNumber={currentPage} isCurrent onPageChange={() => { }} />

        {nextPages.length > 0 ?
          nextPages.map((page) => {
            return <PaginationItem key={page} pageNumber={page} onPageChange={onPageChange} />
          })
          : null}

        {(currentPage + siblingsCount) < lastPage ?
          <>
            {(currentPage + 1 + siblingsCount) < lastPage ?
              <Text color="gray.300" w="8" textAlign="center">
                ...
              </Text>
              : null}
            <PaginationItem pageNumber={lastPage} onPageChange={onPageChange} />
          </>
          : null}
      </Stack>
    </Stack >
  );
};
