import {
  useState,
  useEffect,
  InputHTMLAttributes,
  Dispatch,
  SetStateAction
} from 'react'
import { SearchResponse } from '@algolia/client-search'
import algoliasearch from 'algoliasearch'
import { Close } from '@styled-icons/material-outlined/Close'
import Link from 'next/link'

import { getImageUrl } from 'utils/getImageUrl'
import * as S from './styles'
import { useFocus } from 'utils/useFocus'
import { initialSearchState } from './initialSearchState'

export type SearchProps = {
  label?: string
  iconPosition?: 'left' | 'right'
  initialValue?: string
  icon?: React.ReactNode
  hide: () => void
  showSearch: boolean
} & Omit<InputHTMLAttributes<HTMLInputElement>, 'onInput'>

export type Hit = {
  id: number
  name: string
  slug: string
  card_set: string
  card_set_slug: string
  image: string
  _highlightResult: {
    name: {
      value: string
    }
  }
}

let searchLimit = 500

const client = algoliasearch(
  `${process.env.NEXT_PUBLIC_ALGOLIA_APP_ID}`,
  `${process.env.NEXT_PUBLIC_ALGOLIA_SEARCH_KEY}`
)

const search = (
  query = '',
  setSearchResult: Dispatch<SetStateAction<SearchResponse<Hit>[]>>
) => {
  if (searchLimit > 0) {
    searchLimit = searchLimit - 1
    const queries = [
      {
        indexName: `${process.env.NEXT_PUBLIC_ALGOLIA_PREFIX}_card_set`,
        query: query,
        params: {
          hitsPerPage: 3
        }
      },
      {
        indexName: `${process.env.NEXT_PUBLIC_ALGOLIA_PREFIX}_card`,
        query: query,
        params: {
          hitsPerPage: 5
        }
      }
    ]

    client.multipleQueries<Hit>(queries).then(({ results }) => {
      setSearchResult(results)
    })
  }
}

export const Search = ({
  icon,
  label,
  name,
  hide,
  showSearch,
  ...props
}: SearchProps) => {
  const [inputRef, setInputFocus] = useFocus()

  if (showSearch) {
    setTimeout(() => {
      setInputFocus()
    }, 1)
  }

  const [searchQuery, setSearchQuery] = useState('')
  const [searchResult, setSearchResult] = useState<SearchResponse<Hit>[]>(
    initialSearchState
  )

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(e.currentTarget.value)
    search(e.currentTarget.value, setSearchResult)
  }

  useEffect(() => {
    if (showSearch) {
      setSearchQuery('')
      search('', setSearchResult)
    }
  }, [showSearch])

  return (
    <S.Wrapper>
      <S.SearchTop>
        <S.InputWrapper>
          {!!icon && <S.Icon iconPosition={'left'}>{icon}</S.Icon>}
          <S.Input
            type="text"
            onChange={onChange}
            value={searchQuery}
            iconPosition="left"
            name={name}
            {...(label ? { id: name } : {})}
            {...props}
            autoComplete="off"
            autoFocus
            placeholder="What are you looking for?"
            ref={inputRef}
          />
        </S.InputWrapper>
        {!!icon && (
          <S.Icon
            iconPosition={'left'}
            onClick={hide}
            style={{ cursor: 'pointer' }}
          >
            <Close />
          </S.Icon>
        )}
      </S.SearchTop>
      <div
        style={{
          paddingTop: 10,
          display: searchResult.length > 0 ? 'block' : 'none'
        }}
      >
        {searchResult.map(({ hits, index }) => (
          <div key={index}>
            {hits.length > 0 && index !== 'loading' ? (
              <S.ResultsWrapper>
                <span>
                  {index === `${process.env.NEXT_PUBLIC_ALGOLIA_PREFIX}_card`
                    ? 'Cards'
                    : 'Sets'}
                </span>
                {hits.map((result) => (
                  <Link
                    key={result.id}
                    href={
                      index === `${process.env.NEXT_PUBLIC_ALGOLIA_PREFIX}_card`
                        ? `/sets/${result.card_set_slug}/${result.slug}`
                        : `/sets/${result.slug}`
                    }
                  >
                    <a
                      onClick={() => {
                        hide()
                        setSearchQuery('')
                      }}
                    >
                      <S.Result>
                        <div>
                          <img
                            src={
                              result.image
                                ? getImageUrl(result.image)
                                : '/img/empty.png'
                            }
                          />
                          <p
                            dangerouslySetInnerHTML={{
                              __html: result._highlightResult.name.value
                            }}
                          />
                          <span>{result.card_set}</span>
                        </div>
                      </S.Result>
                    </a>
                  </Link>
                ))}
              </S.ResultsWrapper>
            ) : (
              <S.ResultsWrapper></S.ResultsWrapper>
            )}
          </div>
        ))}
      </div>
    </S.Wrapper>
  )
}
