import { styled } from "styled-components";


export const Title = styled.h1`
  font-size: 1.5em;
  text-align: center;
  color: #fff;
  font-size: 22px;
  margin-bottom: 4rem;

  @media (max-width: 500px) {
    font-size: 18px;
    margin-bottom: 2rem;
  }
`;

export const ContainerCenter = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100vw;
  height: 100vh;
  background-color: #282828;
`
export const BoxForm = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 440px;
  height: 500px;

  @media (max-width: 500px) {
    width: 90%
  }

  & > form{
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }

  .input__box{
    & + .input__box {
      margin-top: 14px;
    }

    & ~ button {
      margin: 3rem 0px 1rem 0px;
    }
  }
`

export const LinkRoute = styled.p`
  font-size: 14px;
  color: #fff;
  margin-left: auto;
  margin-top: 2px;

  & > a{
    font-size: 14px;
    color: #fff;
    font-weight: bold;
    text-decoration: underline;
    text-underline-offset: 2px;
  }
`
