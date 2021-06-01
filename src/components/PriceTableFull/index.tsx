import {
  // useContext,
  useState,
  PropsWithChildren,
  ReactElement,
  MouseEventHandler,
  useMemo
} from 'react'
import { useQuery } from '@apollo/client'
import {
  QueryPrices,
  QueryPricesVariables
} from '../../graphql/generated/QueryPrices'
import { QUERY_PRICES } from '../../graphql/queries/prices'

// import { PriceContext } from '../PriceBlock'

import MaUTable from '@material-ui/core/Table'
import TableBody from '@material-ui/core/TableBody'
import TableCell from '@material-ui/core/TableCell'
import TableHead from '@material-ui/core/TableHead'
import TableRow from '@material-ui/core/TableRow'
import {
  Row,
  TableInstance,
  TableOptions,
  useTable,
  useSortBy
} from 'react-table'
import { format } from 'date-fns'
import { ThemeProvider } from '@material-ui/styles'
import { createMuiTheme } from '@material-ui/core'
import { ArrowDropDown, ArrowDropUp } from '@styled-icons/material'
import { formatPrice } from '../../utils/formatPrice'
import Link from 'next/link'

import * as S from './styles'

// export type PriceTableFullProps = {
//   setPriceTableFulllVisibility: () => void
//   priceTableFulllVisibility: boolean
// }

// export const PriceTableFull = ({
//   setPriceTableFulllVisibility,
//   priceTableFulllVisibility
// }: PriceTableFullProps) => {
//   return (
//     <S.PriceTableFullWrapper
//       priceTableFulllVisibility={priceTableFulllVisibility}
//     >
//       <S.PriceTableFull>
//         <S.PriceTableInfoWrapper>
//           <div>
//             <S.PriceTableFullTitle>
//               Alakazam 1st Edition Holo
//             </S.PriceTableFullTitle>
//             <S.PriceTableFullUpdateDetail>
//               Last update 26 Dec 2020, 09:51 PM
//             </S.PriceTableFullUpdateDetail>
//           </div>
//           <div>
//             <S.PriceTableFullReturnButton
//               onClick={setPriceTableFulllVisibility}
//             >
//               &#x2190; Return to Overview
//             </S.PriceTableFullReturnButton>
//           </div>
//         </S.PriceTableInfoWrapper>
//         <S.TableWrapper>
//           <S.Table>
//             <S.TableHead>
//               <S.TableHeadItem>Grade</S.TableHeadItem>
//               <S.TableHeadItem>Price</S.TableHeadItem>
//               <S.TableHeadItem>Sale Date</S.TableHeadItem>
//               <S.TableHeadItem>30%d</S.TableHeadItem>
//               <S.TableHeadItem>PSA Cert #</S.TableHeadItem>
//               <S.TableHeadItem>Listing</S.TableHeadItem>
//               <S.TableHeadItem>Sale Type</S.TableHeadItem>
//               <S.TableHeadItem>Seller</S.TableHeadItem>
//             </S.TableHead>
//             <S.TableBody>
//               <S.TableBodyRow>
//                 <S.TableBodyItem psa positive green>
//                   10
//                 </S.TableBodyItem>
//                 <S.TableBodyItem bold>$1,231,000.00</S.TableBodyItem>
//                 <S.TableBodyItem>01/23/2021</S.TableBodyItem>
//                 <S.TableBodyItem positive>+33.95%</S.TableBodyItem>
//                 <S.TableBodyItem link>517140398</S.TableBodyItem>
//                 <S.TableBodyItem link>193880494201</S.TableBodyItem>
//                 <S.TableBodyItem>Auction</S.TableBodyItem>
//                 <S.TableBodyItem link> linkgulfcoasthobby</S.TableBodyItem>
//               </S.TableBodyRow>
//               <S.TableBodyRow>
//                 <S.TableBodyItem psa positive green>
//                   10
//                 </S.TableBodyItem>
//                 <S.TableBodyItem bold>$1,231,000.00</S.TableBodyItem>
//                 <S.TableBodyItem>01/23/2021</S.TableBodyItem>
//                 <S.TableBodyItem positive>+33.95%</S.TableBodyItem>
//                 <S.TableBodyItem link>517140398</S.TableBodyItem>
//                 <S.TableBodyItem link>193880494201</S.TableBodyItem>
//                 <S.TableBodyItem>Auction</S.TableBodyItem>
//                 <S.TableBodyItem link> linkgulfcoasthobby</S.TableBodyItem>
//               </S.TableBodyRow>
//               <S.TableBodyRow>
//                 <S.TableBodyItem psa positive green>
//                   10
//                 </S.TableBodyItem>
//                 <S.TableBodyItem bold>$1,231,000.00</S.TableBodyItem>
//                 <S.TableBodyItem>01/23/2021</S.TableBodyItem>
//                 <S.TableBodyItem positive>+33.95%</S.TableBodyItem>
//                 <S.TableBodyItem link>517140398</S.TableBodyItem>
//                 <S.TableBodyItem link>193880494201</S.TableBodyItem>
//                 <S.TableBodyItem>Auction</S.TableBodyItem>
//                 <S.TableBodyItem link> linkgulfcoasthobby</S.TableBodyItem>
//               </S.TableBodyRow>
//               <S.TableBodyRow>
//                 <S.TableBodyItem psa positive green>
//                   10
//                 </S.TableBodyItem>
//                 <S.TableBodyItem bold>$1,231,000.00</S.TableBodyItem>
//                 <S.TableBodyItem>01/23/2021</S.TableBodyItem>
//                 <S.TableBodyItem positive>+33.95%</S.TableBodyItem>
//                 <S.TableBodyItem link>517140398</S.TableBodyItem>
//                 <S.TableBodyItem link>193880494201</S.TableBodyItem>
//                 <S.TableBodyItem>Auction</S.TableBodyItem>
//                 <S.TableBodyItem link> linkgulfcoasthobby</S.TableBodyItem>
//               </S.TableBodyRow>
//               <S.TableBodyRow>
//                 <S.TableBodyItem psa positive green>
//                   10
//                 </S.TableBodyItem>
//                 <S.TableBodyItem bold>$1,231,000.00</S.TableBodyItem>
//                 <S.TableBodyItem>01/23/2021</S.TableBodyItem>
//                 <S.TableBodyItem positive>+33.95%</S.TableBodyItem>
//                 <S.TableBodyItem link>517140398</S.TableBodyItem>
//                 <S.TableBodyItem link>193880494201</S.TableBodyItem>
//                 <S.TableBodyItem>Auction</S.TableBodyItem>
//                 <S.TableBodyItem link> linkgulfcoasthobby</S.TableBodyItem>
//               </S.TableBodyRow>
//               <S.TableBodyRow>
//                 <S.TableBodyItem psa positive green>
//                   10
//                 </S.TableBodyItem>
//                 <S.TableBodyItem bold>$1,231,000.00</S.TableBodyItem>
//                 <S.TableBodyItem>01/23/2021</S.TableBodyItem>
//                 <S.TableBodyItem positive>+33.95%</S.TableBodyItem>
//                 <S.TableBodyItem link>517140398</S.TableBodyItem>
//                 <S.TableBodyItem link>193880494201</S.TableBodyItem>
//                 <S.TableBodyItem>Auction</S.TableBodyItem>
//                 <S.TableBodyItem link> linkgulfcoasthobby</S.TableBodyItem>
//               </S.TableBodyRow>
//               <S.TableBodyRow>
//                 <S.TableBodyItem psa positive green>
//                   10
//                 </S.TableBodyItem>
//                 <S.TableBodyItem bold>$1,231,000.00</S.TableBodyItem>
//                 <S.TableBodyItem>01/23/2021</S.TableBodyItem>
//                 <S.TableBodyItem positive>+33.95%</S.TableBodyItem>
//                 <S.TableBodyItem link>517140398</S.TableBodyItem>
//                 <S.TableBodyItem link>193880494201</S.TableBodyItem>
//                 <S.TableBodyItem>Auction</S.TableBodyItem>
//                 <S.TableBodyItem link> linkgulfcoasthobby</S.TableBodyItem>
//               </S.TableBodyRow>
//               <S.TableBodyRow>
//                 <S.TableBodyItem psa positive green>
//                   10
//                 </S.TableBodyItem>
//                 <S.TableBodyItem bold>$1,231,000.00</S.TableBodyItem>
//                 <S.TableBodyItem>01/23/2021</S.TableBodyItem>
//                 <S.TableBodyItem positive>+33.95%</S.TableBodyItem>
//                 <S.TableBodyItem link>517140398</S.TableBodyItem>
//                 <S.TableBodyItem link>193880494201</S.TableBodyItem>
//                 <S.TableBodyItem>Auction</S.TableBodyItem>
//                 <S.TableBodyItem link> linkgulfcoasthobby</S.TableBodyItem>
//               </S.TableBodyRow>
//               <S.TableBodyRow>
//                 <S.TableBodyItem psa positive green>
//                   10
//                 </S.TableBodyItem>
//                 <S.TableBodyItem bold>$1,231,000.00</S.TableBodyItem>
//                 <S.TableBodyItem>01/23/2021</S.TableBodyItem>
//                 <S.TableBodyItem positive>+33.95%</S.TableBodyItem>
//                 <S.TableBodyItem link>517140398</S.TableBodyItem>
//                 <S.TableBodyItem link>193880494201</S.TableBodyItem>
//                 <S.TableBodyItem>Auction</S.TableBodyItem>
//                 <S.TableBodyItem link> linkgulfcoasthobby</S.TableBodyItem>
//               </S.TableBodyRow>
//               <S.TableBodyRow>
//                 <S.TableBodyItem psa positive green>
//                   10
//                 </S.TableBodyItem>
//                 <S.TableBodyItem bold>$1,231,000.00</S.TableBodyItem>
//                 <S.TableBodyItem>01/23/2021</S.TableBodyItem>
//                 <S.TableBodyItem positive>+33.95%</S.TableBodyItem>
//                 <S.TableBodyItem link>517140398</S.TableBodyItem>
//                 <S.TableBodyItem link>193880494201</S.TableBodyItem>
//                 <S.TableBodyItem>Auction</S.TableBodyItem>
//                 <S.TableBodyItem link> linkgulfcoasthobby</S.TableBodyItem>
//               </S.TableBodyRow>
//             </S.TableBody>
//           </S.Table>
//         </S.TableWrapper>
//       </S.PriceTableFull>
//     </S.PriceTableFullWrapper>
//   )
// }

// ----------------------------------------------------------------

// WORKIN BELOW HERE

// TABLE PROPRIETIES
export interface TableProperties<T extends Record<string, unknown>>
  extends TableOptions<T> {
  onAdd?: (instance: TableInstance<T>) => MouseEventHandler
  onDelete?: (instance: TableInstance<T>) => MouseEventHandler
  onEdit?: (instance: TableInstance<T>) => MouseEventHandler
  onClick?: (row: Row<T>) => void
}

// FUNCTION TABLE

function Table<T extends Record<string, unknown>>(
  props: PropsWithChildren<TableProperties<T>>
): ReactElement {
  const { columns, data } = props
  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    rows,
    prepareRow
  } = useTable(
    {
      columns,
      data
    },
    useSortBy
  )

  // Render the UI for your table
  return (
    <MaUTable {...getTableProps()}>
      <TableHead>
        {headerGroups.map((headerGroup, i) => (
          <TableRow {...headerGroup.getHeaderGroupProps()} key={i}>
            {headerGroup.headers.map((column, i) => (
              <TableCell
                {...column.getHeaderProps(column.getSortByToggleProps())}
                key={i}
              >
                <S.HeadingSpan>
                  {column.render('Header')}
                  {column.isSorted ? (
                    column.isSortedDesc ? (
                      <ArrowDropDown />
                    ) : (
                      <ArrowDropUp />
                    )
                  ) : (
                    ''
                  )}
                </S.HeadingSpan>
              </TableCell>
            ))}
          </TableRow>
        ))}
      </TableHead>
      <TableBody {...getTableBodyProps()}>
        {rows.map((row, i) => {
          prepareRow(row)
          return (
            <TableRow {...row.getRowProps()} key={i}>
              {row.cells.map((cell, i) => {
                return (
                  <TableCell {...cell.getCellProps()} key={i}>
                    {cell.render('Cell')}
                  </TableCell>
                )
              })}
            </TableRow>
          )
        })}
      </TableBody>
    </MaUTable>
  )
}

export type SalesTableRow = {
  psa: number | string | null
  price: number | string | null
  saleDate: number | string | null
  change30d: number | string | null
  psaCert: {
    number: number
    link: string
  }
  listing: {
    number: number
    link: string
  }
  saleType: string
  seller: {
    name: string
    link: string
  }
}

export type PriceTableFullProps = {
  // salesTable: SalesTableRow[]
  cardId: string
  cardName: string
  setPriceTableFulllVisibility: () => void
}
export type RowProps = {
  cell: {
    value: string
  }
  data: [
    {
      psa: number | string | null
      price: number | string | null
      saleDate: number | string | null
      change30d: number | string | null
      psaCert: {
        number: number
        link: string
      }
      listing: {
        number: number
        link: string
      }
      saleType: string
      seller: {
        name: string
        link: string
      }
    }
  ]
  row: {
    id: number
  }
}

export function PriceTableFull({
  cardId,
  cardName,
  setPriceTableFulllVisibility
}: PriceTableFullProps) {
  const [salesTable, setSalesTable] = useState([
    {
      psa: 10,
      price: 0,
      saleDate: 0,
      change30d: 0,
      psaCert: {
        number: 0,
        link: '/'
      },
      listing: {
        number: 0,
        link: '/'
      },
      saleType: '-',
      seller: {
        name: 'name',
        link: '/'
      }
    }
  ])

  useQuery<QueryPrices, QueryPricesVariables>(QUERY_PRICES, {
    variables: { card: cardId, limit: 8, sort: 'date:desc' },
    onCompleted: (data) => {
      const salesTable = data.prices.map((sale) => ({
        psa: sale.grade || 10,
        price: sale.price || 10000,
        saleDate: sale.date || 0,
        change30d: 0,
        psaCert: { number: 517140398, link: '/' },
        listing: { number: 193880494201, link: '/' },
        saleType: 'Auction',
        seller: { name: 'gulfcoasthobby', link: '/' }
      }))

      console.log('DATA: ', salesTable)
      setSalesTable(salesTable)
    }
  })

  const columns = useMemo(
    () => [
      {
        Header: '',
        id: function getPrice(row: RowProps) {
          return row.row.id
        },
        columns: [
          {
            Header: 'Grade',
            accessor: 'psa',
            Cell: function getPSA(row: RowProps) {
              return (
                <S.TableBodyItem
                  purple={
                    row.data[row.row.id].psa === 1 ||
                    row.data[row.row.id].psa === 6
                  }
                  green={
                    row.data[row.row.id].psa === 2 ||
                    row.data[row.row.id].psa === 7
                  }
                  orange={
                    row.data[row.row.id].psa === 3 ||
                    row.data[row.row.id].psa === 8
                  }
                  blue={
                    row.data[row.row.id].psa === 4 ||
                    row.data[row.row.id].psa === 9
                  }
                  pink={
                    row.data[row.row.id].psa === 5 ||
                    row.data[row.row.id].psa === 10
                  }
                >
                  {row.data[row.row.id].psa}
                </S.TableBodyItem>
              )
            }
          },
          {
            Header: 'Price',
            accessor: 'price',
            Cell: function getPrice(row: RowProps) {
              return (
                <S.TableBodyItem bold>
                  {row.data[row.row.id].price
                    ? formatPrice(row.data[row.row.id].price)
                    : 0}
                  00000
                </S.TableBodyItem>
              )
            }
          },
          {
            Header: 'Sale',
            accessor: 'saleDate',
            Cell: function getPrice(row: RowProps) {
              const saleDate = row.data[row.row.id].saleDate
              return (
                <span>
                  {saleDate ? format(new Date(saleDate), 'd MMM, yyyy') : '-'}
                </span>
              )
            }
          },
          {
            Header: '30d%',
            accessor: 'change30d',
            Cell: function getPercentage(row: RowProps) {
              const change30d = row.data[row.row.id].change30d
              return (
                <>
                  <S.TableBodyItem
                    positive={change30d > 0}
                    negative={change30d < 0}
                  >
                    {change30d > 0 ? `+ ${change30d}%` : `${change30d}%`}
                  </S.TableBodyItem>
                </>
              )
            }
          },
          {
            Header: 'PSA Cert #',
            accessor: 'psaCert',
            Cell: function getPrice(row: RowProps) {
              const { link, number } = row.data[row.row.id].psaCert
              return link ? (
                <S.TableBodyItem link>
                  <Link href={link}>{`#${number}`}</Link> : <p>-</p>
                </S.TableBodyItem>
              ) : (
                <S.TableBodyItem link>
                  <p>-</p>
                </S.TableBodyItem>
              )
            }
          },
          {
            Header: 'Listing',
            accessor: 'listing',
            Cell: function getPrice(row: RowProps) {
              const { link, number } = row.data[row.row.id].listing
              return link ? (
                <S.TableBodyItem link>
                  <Link href={link}>{`#${number}`}</Link>
                </S.TableBodyItem>
              ) : (
                <S.TableBodyItem>
                  <p>-</p>
                </S.TableBodyItem>
              )
            }
          },
          {
            Header: 'Sale Type',
            accessor: 'saleType',
            Cell: function getPrice(row: RowProps) {
              return (
                <S.TableBodyItem>
                  {row.data[row.row.id].saleType}
                </S.TableBodyItem>
              )
            }
          },
          {
            Header: 'Seller',
            accessor: 'seller',
            Cell: function getPrice(row: RowProps) {
              const { link, name } = row.data[row.row.id].seller
              return link ? (
                <S.TableBodyItem link>
                  <Link href={link}>{`${name}`}</Link>
                </S.TableBodyItem>
              ) : (
                <S.TableBodyItem>
                  <p>-</p>
                </S.TableBodyItem>
              )
            }
          }
        ]
      }
    ],
    []
  )

  const theme = createMuiTheme({
    typography: {
      fontFamily: [
        "Source Sans Pro, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif"
      ].join(',')
    }
  })

  return (
    <S.PriceTableFullWrapper>
      <S.PriceTableFull>
        <S.PriceTableInfoWrapper>
          <div>
            <S.PriceTableFullTitle>{cardName}</S.PriceTableFullTitle>
            <S.PriceTableFullUpdateDetail>
              Last update 26 Dec 2020, 09:51 PM
            </S.PriceTableFullUpdateDetail>
          </div>
          <div>
            <S.PriceTableFullReturnButton
              onClick={setPriceTableFulllVisibility}
            >
              &#x2190; Return to Overview
            </S.PriceTableFullReturnButton>
          </div>
        </S.PriceTableInfoWrapper>
        <S.TableWrapper>
          <ThemeProvider theme={theme}>
            <S.TableWrapper>
              <Table columns={columns} data={salesTable} />
            </S.TableWrapper>
          </ThemeProvider>
        </S.TableWrapper>
      </S.PriceTableFull>
    </S.PriceTableFullWrapper>
  )
}

export default PriceTableFull
