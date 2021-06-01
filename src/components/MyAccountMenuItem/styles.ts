import styled, { css } from 'styled-components'

type MenuItemProps = {
  active?: boolean
  disabled?: boolean
}

export const Wrapper = styled.div<MenuItemProps>`
  ${({ theme, active, disabled }) => css`
    display: flex;
    align-items: center;
    padding: 20px;
    position: relative;

    &:hover {
      background-color: ${theme.colors.neutral.white};
      color: ${theme.colors.primary};
      cursor: pointer;

      p {
        color: ${theme.colors.primary};
      }
    }

    ${active &&
    css`
      background-color: ${theme.colors.primary};
      color: ${theme.colors.neutral.white};
      cursor: default !important;

      &:hover {
        background-color: ${theme.colors.primary};
        color: ${theme.colors.neutral.white};
      }
    `}

    ${disabled &&
    css`
      cursor: not-allowed !important;
      color: ${theme.colors.neutral.neutral500};

      &:hover {
        background-color: ${theme.colors.neutral.white};
        color: ${theme.colors.neutral.neutral500};

        p {
          color: ${theme.colors.neutral.neutral500};
        }
      }
    `}
  `}
`

export const Icon = styled.div`
  height: 100%;
  width: auto;
  width: 24px;
  height: 24px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 12px;
`

export const ItemTitle = styled.p<MenuItemProps>`
  ${({ theme, active, disabled }) => css`
    font-weight: 600;
    font-size: 20px;
    line-height: 28px;
    color: ${theme.colors.neutral.neutral900};

    &:hover {
      color: ${theme.colors.primary};
    }

    ${active &&
    css`
      color: ${theme.colors.neutral.white} !important;

      &:hover {
        color: ${theme.colors.neutral.white};
      }
    `}

    ${disabled &&
    css`
      color: ${theme.colors.neutral.neutral500};
      cursor: not-allowed !important;

      &:hover {
        color: ${theme.colors.neutral.neutral500};
      }
    `}
  `}
`
export const DisableMessageWrapper = styled.div`
  display: flex;
  position: relative;
`

export const DisabledMessage = styled.span`
  ${({ theme }) => css`
    color: ${theme.colors.secondary};
    position: absolute;
    min-width: 20px;
    white-space: nowrap;
    left: 10px;
    top: -16px;
    font-weight: 600;
    font-size: 11px;
    line-height: 16px;
  `}
`
