import styled, { css } from 'styled-components'

export const Wrapper = styled.article`
  ${({ theme }) => css`
    position: relative;
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 100%;
    background-color: ${theme.colors.white};
    box-shadow: 0px 2px 6px rgba(0, 0, 0, 0.22);
    border-radius: 8px;
  `}
`

export type ImageBoxGradientColors = {
  primaryColor?: string
  secondaryColor?: string
}

export const ImageBox = styled.a<ImageBoxGradientColors>`
  ${({ theme }) => css`
    min-height: 172px;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    background: ${theme.gradients.lightBlue};
    border-top-right-radius: 8px;
    border-top-left-radius: 8px;
    animation: placeholderShimmer 1s linear infinite forwards;
    padding: 20px;
    transition: background ${theme.transition.default};

    img {
      max-width: 100%;
    }
  `}
`

export const ImageWrapper = styled.div`
  height: 100px;
  width: 70%;

  > div {
    position: relative;
    max-width: 100%;
    height: 100%;
  }
`

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  position: relative;
  height: 100%;
`

export const Info = styled.a`
  max-width: calc(100% - 2.5rem);
  padding: 24px;
  text-decoration: none;
`

export const ReleaseYear = styled.h4`
  ${({ theme }) => css`
    font-size: ${theme.font.sizes.small};
    font-weight: ${theme.font.bold};
    color: ${theme.colors.neutral.neutral800};
    margin-bottom: 4px;
  `}
`

export const Title = styled.h3`
  ${({ theme }) => css`
    font-size: ${theme.font.sizes.xlarge};
    line-height: ${theme.font.sizes.medium};
    font-weight: ${theme.font.bold};
    color: ${theme.colors.black};
    margin-bottom: 4px;
  `}
`

export const CardsInSet = styled.h4`
  ${({ theme }) => css`
    font-size: ${theme.font.sizes.small};
    font-weight: ${theme.font.bold};
    color: ${theme.colors.neutral.neutral800};
  `}
`

export const FavButton = styled.div`
  ${({ theme }) => css`
    color: ${theme.colors.primaryColor.primary1000};
    position: absolute;
    right: 24px;
    top: 24px;
    cursor: pointer;

    svg {
      width: 2.5rem;
    }
  `}
`
