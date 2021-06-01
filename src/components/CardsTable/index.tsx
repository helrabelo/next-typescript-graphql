import {
  PropsWithChildren,
  ReactElement,
  MouseEventHandler,
  useMemo
} from 'react'
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

import * as S from './styles'
import { ThemeProvider } from '@material-ui/styles'
import { createMuiTheme } from '@material-ui/core'
import { ArrowDropDown, ArrowDropUp } from '@styled-icons/material'
import { getImageUrl } from 'utils/getImageUrl'
import { formatPrice } from '../../utils/formatPrice'

export interface TableProperties<T extends Record<string, unknown>>
  extends TableOptions<T> {
  onAdd?: (instance: TableInstance<T>) => MouseEventHandler
  onDelete?: (instance: TableInstance<T>) => MouseEventHandler
  onEdit?: (instance: TableInstance<T>) => MouseEventHandler
  onClick?: (row: Row<T>) => void
}

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

export type Card = {
  number: number
  cardImage: string
  cardName: string
  setName: string
  setSlug: string
  year: number
  psa10: {
    price: number
    change30d: number
    population: number
    lastSale: string
  }
  psa9: {
    price: number
    change30d: number
    population: number
    lastSale: string
  }
}

export type CardsTableProps = {
  cards: Card[]
}

export type RowProps = {
  cell: {
    value: string
  }
  data: [
    {
      cardName: string
      slug: string
      setSlug: string
      psa10: {
        price: number
        change30d: number
        lastSale: number
      }
      psa9: {
        price: number
        change30d: number
        lastSale: number
      }
    }
  ]
  row: {
    id: number
  }
}

export default function CardsTable({ cards }: CardsTableProps) {
  const columns = useMemo(
    () => [
      {
        Header: 'Number',
        columns: [
          {
            Header: '#',
            accessor: 'number'
          }
        ]
      },
      {
        Header: 'Name',
        columns: [
          {
            Header: 'Card',
            accessor: 'cardImage',
            Cell: function getImage(row: RowProps) {
              return (
                <a
                  href={`/sets/${row.data[row.row.id].setSlug}/${
                    row.data[row.row.id].slug
                  }`}
                >
                  <div style={{ display: 'flex', alignItems: 'center' }}>
                    <img
                      height={34}
                      src={getImageUrl(row.cell.value)}
                      style={{
                        marginRight: 20
                      }}
                    />
                    <p></p>
                    <strong>{row.data[row.row.id].cardName}</strong>
                  </div>
                </a>
              )
            }
          },
          {
            Header: 'Set',
            accessor: 'setName'
          },
          {
            Header: 'Year',
            accessor: 'year'
          }
        ]
      },
      {
        Header: 'PSA 10',
        columns: [
          {
            Header: 'Price',
            accessor: 'psa10.price',
            Cell: function getPrice(row: RowProps) {
              return (
                <span>{formatPrice(row.data[row.row.id].psa10.price)}</span>
              )
            }
          },
          {
            Header: '30d%',
            accessor: 'psa10.change30d',
            Cell: function getPercentage(row: RowProps) {
              const change30d = row.data[row.row.id].psa10.change30d
              return (
                <>
                  {change30d ? (
                    <S.HistoryTableVariation
                      positive={change30d > 0}
                      negative={change30d < 0}
                    >
                      {change30d > 0 ? `+ ${change30d}%` : `${change30d}%`}
                    </S.HistoryTableVariation>
                  ) : (
                    '-'
                  )}
                </>
              )
            }
          },
          {
            Header: 'Population',
            accessor: 'psa10.population'
          },
          {
            Header: 'Last Sale',
            accessor: 'psa10.lastSale',
            Cell: function getPrice(row: RowProps) {
              const lastSale = row.data[row.row.id].psa10.lastSale
              return (
                <span>
                  {lastSale > 0
                    ? format(new Date(lastSale), 'd MMM, yyyy')
                    : '-'}
                </span>
              )
            }
          }
        ]
      },
      {
        Header: 'PSA 9',
        columns: [
          {
            Header: 'Price',
            accessor: 'psa9.price',
            Cell: function getPrice(row: RowProps) {
              return <span>{formatPrice(row.data[row.row.id].psa9.price)}</span>
            }
          },
          {
            Header: '30d%',
            accessor: 'psa9.change30d',
            Cell: function getPercentage(row: RowProps) {
              const change30d = row.data[row.row.id].psa9.change30d
              return (
                <>
                  {change30d ? (
                    <S.HistoryTableVariation
                      positive={change30d > 0}
                      negative={change30d < 0}
                    >
                      {change30d > 0 ? `+ ${change30d}%` : `${change30d}%`}
                    </S.HistoryTableVariation>
                  ) : (
                    '-'
                  )}
                </>
              )
            }
          },
          {
            Header: 'Population',
            accessor: 'psa9.population'
          },
          {
            Header: 'Last Sale',
            accessor: 'psa9.lastSale',
            Cell: function getPrice(row: RowProps) {
              const lastSale = row.data[row.row.id].psa9.lastSale
              return (
                <span>
                  {lastSale > 0
                    ? format(new Date(lastSale), 'd MMM, yyyy')
                    : '-'}
                </span>
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
    <ThemeProvider theme={theme}>
      <S.TableWrapper>
        <Table columns={columns} data={cards} />
      </S.TableWrapper>
    </ThemeProvider>
  )
}
