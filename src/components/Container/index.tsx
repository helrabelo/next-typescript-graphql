import styled, { css } from 'styled-components'

type ContainerProps = {
  fullWidth?: boolean
}

export const Container = styled.div<ContainerProps>`
  ${({ theme, fullWidth = false }) => css`
    width: 100%;
    max-width: ${fullWidth ? '100%' : theme.grid.container};
    margin-left: auto;
    margin-right: auto;
    padding-left: ${fullWidth ? 0 : `calc(${theme.grid.gutter} / 2)`};
    padding-right: ${fullWidth ? 0 : `calc(${theme.grid.gutter} / 2)`};
  `}
`
