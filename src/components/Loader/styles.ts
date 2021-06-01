import styled from 'styled-components'

export const Wrapper = styled.div`
  position: absolute;
  width: 100%;
  background: #ffffff17;
  height: 100%;
  z-index: 1000;
  backdrop-filter: blur(5px);
  border-radius: 8px;
  display: flex;
  align-items: center;
  justify-content: center;

  > div {
    height: 80px;
    width: 80px;
    perspective: 35em;
    margin-bottom: 40px;
    margin-right: 40px;

    animation: rotate2 1s ease-in-out infinite;
    transform-origin: center center;

    @keyframes rotate2 {
      0% {
        transform: rotate(0deg);
      }
      50% {
        transform: rotate(0deg);
      }
      100% {
        transform: rotate(360deg);
      }
    }
  }
`

export const LoaderTop = styled.div`
  animation: rotate 1s linear infinite;
  position: absolute;
  left: 21px;
  top: 12px;
  width: 50px;
  height: 50px;
  z-index: 1;

  svg path {
    box-shadow: -1px 1px 10px black;
  }

  @keyframes rotate {
    0% {
      transform: rotate(0deg) rotateX(0deg);
    }
    50% {
      transform: rotate(0deg) rotateX(50deg) rotateY(50deg);
    }
    100% {
      transform: rotate(0deg) rotateX(0deg);
    }
  }
`

export const LoaderBottom = styled.div`
  position: absolute;
  left: 9px;
  top: 17px;
  width: 50px;
  height: 50px;
  transform-origin: 40% center;

  animation: rotate 1s ease-in-out infinite;
`
