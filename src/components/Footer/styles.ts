import styled, { css } from 'styled-components'

export const Wrapper = styled.footer`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 24px 0;
`

export const Copyright = styled.div`
  ${({ theme }) => css`
    color: ${theme.colors.black};
    font-size: ${theme.font.sizes.small};
    text-align: center;
  `}
`

export const SocialIcons = styled.div`
  ${({ theme }) => css`
    color: ${theme.colors.gray};
    font-size: ${theme.font.sizes.xsmall};
    text-align: center;
    display: flex;
    justify-content: flex-start;
  `}
`

export const IconWrapper = styled.div`
  ${({ theme }) => css`
    color: ${theme.colors.white};
    background: ${theme.colors.primaryColor.primary1000};
    cursor: pointer;
    width: 3rem;
    height: 3rem;
    box-sizing: border-box;
    padding: 8px;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-left: 10px;

    & > svg {
      display: block;
    }
  `}
`

export const Icon = styled.span`
  ${({ theme }) => css`
    margin-right: ${theme.spacings.xxsmall};
    display: block;
  `}
`
