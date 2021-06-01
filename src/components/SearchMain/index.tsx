import { useState, InputHTMLAttributes } from 'react'
import Tippy from '@tippyjs/react/headless'
import { Search as SearchIcon } from '@styled-icons/material-outlined/Search'
import { SearchAlt as SearchMobile } from '@styled-icons/boxicons-regular/SearchAlt'

import * as S from './styles'
import SearchField from '../SearchField'
import MediaMatch from '../MediaMatch'
import { Search } from './Search'

export type SearchMainProps = {
  initialValue?: string
  icon?: React.ReactNode
} & Omit<InputHTMLAttributes<HTMLInputElement>, 'onInput'>

const SearchMain = ({ icon }: SearchMainProps) => {
  const [showSearch, setShowSearch] = useState(false)
  const [showMobileSearch, setShowMobileSearch] = useState(false)
  const show = () => setShowSearch(true)
  const hide = () => setShowSearch(false)

  return (
    <div>
      <MediaMatch greaterThan="medium">
        <Tippy
          interactive
          visible={showSearch}
          onClickOutside={hide}
          allowHTML
          render={() => (
            <>
              <Search hide={hide} icon={icon} showSearch={showSearch} />
            </>
          )}
          popperOptions={{
            modifiers: [
              {
                name: 'offset',
                options: {
                  offset: [-85, -46]
                }
              }
            ]
          }}
        >
          <div onClick={showSearch ? hide : show} style={{ cursor: 'pointer' }}>
            <SearchField
              disabled
              name="search"
              placeholder="Search"
              type="text"
              icon={<SearchIcon style={{ cursor: 'pointer' }} />}
              style={{ cursor: 'pointer' }}
            />
          </div>
        </Tippy>
      </MediaMatch>

      <MediaMatch lessThan="medium">
        <div
          onClick={() => setShowMobileSearch(!showMobileSearch)}
          style={{ cursor: 'pointer' }}
        >
          <S.IconWrapper onClick={() => setShowSearch(true)}>
            <SearchMobile aria-label="Search TCGTrends" />
          </S.IconWrapper>
        </div>
        {showMobileSearch && (
          <Search
            hide={() => setShowMobileSearch(false)}
            icon={icon}
            showSearch={showMobileSearch}
          />
        )}
      </MediaMatch>
    </div>
  )
}

export default SearchMain
