import { Stack, Text, Box } from '@chakra-ui/react'
import { PaginationItem } from './PaginationItem'
import { useEffect } from 'react'

interface PaginationProps {
  totalCountOfRegisters: number
  registerPerPage?: number
  currentPage?: number
  onPageChange: (page: number) => void
}

const siblingsCount = 1

function generatePagesArray(from: number, to: number) {
  return [...new Array(to - from)].map((_, index) => {
    return from + index + 1
  }).filter(page => page > 0)
}
// generatePagesArray(2, 5) => [3, 4, 5]

export function Pagination({ totalCountOfRegisters, currentPage = 1, onPageChange, registerPerPage = 10 }: PaginationProps) {
  const lastPage = Math.ceil(totalCountOfRegisters / registerPerPage)

  const previousPages = currentPage > 1
    ? generatePagesArray(currentPage - 1 - siblingsCount, currentPage - 1)
    : []

    const nextPages = currentPage < lastPage
    ? generatePagesArray(currentPage, Math.min(currentPage + siblingsCount, lastPage))
    : []

  return (
    <Stack direction={['column', 'row']} mt='8' justify='space-between' align='center' spacing='6'>
      <Box>
        <strong>0</strong> - <strong>10</strong> de <strong>100</strong>
      </Box>
      <Stack direction='row' spacing='2'>

        {currentPage > (1 + siblingsCount) && (
          <>
            <PaginationItem onPageChange={onPageChange} number={1}/>
            { currentPage > (2 + siblingsCount) && <Text color='gray.300' w='8' textAlign='center'>...</Text>}
          </>
        )} 
        {/* se estiver na pagina 2 nao mostra a 1 */}

        {previousPages.length > 0 && previousPages.map(page => {
          return <PaginationItem onPageChange={onPageChange} key={page} number={page} />
        })}

        <PaginationItem onPageChange={onPageChange} number={currentPage} isCurrent/>

        {nextPages.length > 0 && nextPages.map(page => {
          return <PaginationItem onPageChange={onPageChange} key={page} number={page} />
        })}

        {(currentPage + siblingsCount) < lastPage && (
          <>
            {(currentPage + 1 + siblingsCount) < lastPage && <Text color='gray.300' w='8' textAlign='center'>...</Text>}
            <PaginationItem onPageChange={onPageChange} number={lastPage}/>
          </>
        )}

      </Stack>
    </Stack>
  )
}