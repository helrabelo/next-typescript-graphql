import Link from 'next/link'

import { useState } from 'react'
import { Menu2 as MenuIcon } from '@styled-icons/remix-fill/Menu2'
import { Search as SearchIcon } from '@styled-icons/material-outlined/Search'
import { Close as CloseIcon } from '@styled-icons/material-outlined/Close'

import Button from 'components/Button'
import Logo from 'components/Logo'
import MediaMatch from 'components/MediaMatch'
import * as S from './styles'
import UserDropdown from 'components/UserDropdown'
import SearchMain from 'components/SearchMain'

export type MenuProps = {
  username?: string
}

const Menu = ({ username }: MenuProps) => {
  const [isOpen, setIsOpen] = useState(false)
  return (
    <S.Wrapper>
      <div>
        <MediaMatch lessThan="medium">
          <S.IconWrapper onClick={() => setIsOpen(true)}>
            <MenuIcon aria-label="Open Menu" />
          </S.IconWrapper>
        </MediaMatch>

        <S.LogoWrapper>
          <Link href="/" passHref>
            <a>
              <Logo hideOnMobile />
            </a>
          </Link>
        </S.LogoWrapper>

        <MediaMatch greaterThan="medium">
          <S.MenuNav>
            <Link href="/sets" passHref>
              <S.MenuLink>Sets</S.MenuLink>
            </Link>
            <Link href="/cards" passHref>
              <S.MenuLink>Cards</S.MenuLink>
            </Link>
            <Link href="/blog" passHref>
              <S.MenuLink>Blog</S.MenuLink>
            </Link>
            <Link href="/contact" passHref>
              <S.MenuLink>Contact</S.MenuLink>
            </Link>
          </S.MenuNav>
        </MediaMatch>

        <S.MenuGroup>
          <SearchMain
            name="search"
            placeholder="Search"
            type="text"
            icon={<SearchIcon style={{ marginLeft: 0 }} />}
            aria-label="Search"
          />
          <MediaMatch greaterThan="medium">
            {!username ? (
              <>
                <Link href="/login" passHref>
                  <Button
                    as="a"
                    size="small"
                    minimal
                    style={{ marginRight: 10 }}
                  >
                    Log In
                  </Button>
                </Link>
                <Link href="/sign-up" passHref>
                  <Button size="small" as="a">
                    Sign up
                  </Button>
                </Link>
              </>
            ) : (
              <UserDropdown username={username} />
            )}
          </MediaMatch>
        </S.MenuGroup>

        <S.MenuFull aria-hidden={!isOpen} isOpen={isOpen}>
          <CloseIcon aria-label="Close Menu" onClick={() => setIsOpen(false)} />
          <S.MenuNav>
            <Link href="/" passHref>
              <S.MenuLink>Home</S.MenuLink>
            </Link>
            <Link href="/sets" passHref>
              <S.MenuLink>Sets</S.MenuLink>
            </Link>
            <Link href="/cards" passHref>
              <S.MenuLink>Cards</S.MenuLink>
            </Link>
            <Link href="/blog" passHref>
              <S.MenuLink>Blog</S.MenuLink>
            </Link>
            <Link href="/contact" passHref>
              <S.MenuLink>Contact</S.MenuLink>
            </Link>

            {!!username && (
              <>
                <Link href="/profile/me" passHref>
                  <S.MenuLink>My profile</S.MenuLink>
                </Link>
                <Link href="/profile/wishlist" passHref>
                  <S.MenuLink>Wishlist</S.MenuLink>
                </Link>
              </>
            )}
          </S.MenuNav>

          {!username && (
            <S.RegisterBox>
              <Link href="/login" passHref>
                <Button fullWidth size="large" as="a">
                  Log In
                </Button>
              </Link>
              <span>or</span>
              <Link href="/sign-up" passHref>
                <S.CreateAccount title="Sign Up">Sign Up</S.CreateAccount>
              </Link>
            </S.RegisterBox>
          )}
        </S.MenuFull>
      </div>
    </S.Wrapper>
  )
}

export default Menu
