import styled, { css } from 'styled-components'

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  min-height: 100vh;
  overflow: hidden;
`

export const Content = styled.div`
  ${({ theme }) => css`
    background-image: url('/img/bg-gradient.svg');
    background-position: top right;
    background-repeat: no-repeat;
    padding-top: ${theme.spacings.xlarge};
    flex: 1 0 auto;
    position: relative;
  `}
`

export const SectionFooter = styled.section`
  ${({ theme }) => css`
    background-color: ${theme.colors.primaryColor.primary200};
  `}
`
