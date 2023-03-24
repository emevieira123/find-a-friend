import styled from 'styled-components'

export const Container = styled.aside`
  width: 392px;
  height: 100vh;
  background-color: #f15156;
`

export const AsideHeader = styled.div`
  height: 241px;
  background-color: #e44449;

  img {
    width: 45px;
  }

  & > div {
    padding: 81px 56px 26px;
    display: flex;
    flex-direction: column;
    gap: 26px;
  }
`

export const HeaderInput = styled.div`
  display: flex;
  gap: 8px;

  button {
    width: 60px;
    height: 60px;
    display: flex;
    justify-content: center;
    align-items: center;

    background-color: #f4d35e;
    border: none;
    border-radius: 20px;
    transition: filter 0.2s;

    img {
      width: 22px;
    }

    :hover {
      filter: brightness(0.9);
    }
  }
`

export const AsideContent = styled.div`
  height: calc(100vh - 241px);
  overflow-y: auto;
  display: flex;
  flex-direction: column;
  padding: 35px 56px;
`

export const ContentHeader = styled.h1`
  font-size: 20px;
  line-height: 34px;
  margin-bottom: 27px;
`

export const ContentFilters = styled.div`
  display: flex;
  flex-direction: column;
  gap: 30px;
`
