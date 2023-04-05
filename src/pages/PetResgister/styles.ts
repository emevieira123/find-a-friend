import styled from 'styled-components'

export const Wrapper = styled.div`
  width: 100%;
  background: ${(props) => props.theme.rose};
  padding: 4rem 0 8rem 6rem;

  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 1.5rem;
`

export const HeaderContainer = styled.div`
  width: 44.5rem;
  height: 6.75rem;
  background: ${(props) => props.theme.darkBlue};
  border-radius: 1rem;
  padding: 0 5rem;

  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 2rem;

  button {
    width: 4rem;
    height: 4rem;
    border-radius: 0.5rem;
    border: 0;
    background: #114a80;
    color: ${(props) => props.theme.white};
  }
`

export const Container = styled.main`
  max-width: 1112px;
  width: 100%;
  display: flex;
  justify-content: center;
`

export const Divider = styled.div`
  margin-bottom: 2.5rem;
  border: 1px solid rgb(13, 59, 102, 0.1);
`

export const FormWrapper = styled.div`
  width: 44.5rem;
  height: 661px;
  /* display: block; */
  /* overflow-y: auto; */
  background: ${(props) => props.theme.white};
  padding: 3rem 5rem;
  border-radius: 1rem;

  h1 {
    font-size: 54px;
    color: #0d3b66;
    line-height: 90%;
    letter-spacing: -2px;
    text-align: center;
    margin-bottom: 20px;
  }
`

export const InputWrapper = styled.div`
  display: flex;
  width: 100%;

  background-color: #f5f8fa;
  border: 1px solid #d3e2e5;
  border-radius: 10px;
  padding: 18px;
`

export const TextErrorMessage = styled.span`
  color: ${(props) => props.theme.red};
  margin-top: -15px;
`

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 15px;

  label {
    font-size: 16px;
    font-weight: 600;
    color: #0d3b66;
    margin-bottom: 2px;
  }

  input {
    width: 100%;
    font-size: 18px;
    font-weight: 600;
    color: #0d3b66;
    background-color: transparent;
    border: none;
    outline: none;
  }

  textarea {
    width: 100%;
    font-size: 18px;
    font-weight: 600;
    color: #0d3b66;
    background-color: transparent;
    border: none;
    outline: none;
  }

  img {
    cursor: pointer;
  }
`

export const Buttons = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 21px;
  margin-top: 61px;

  .primary {
    color: #ffffff;
    background-color: #0d3b66;
  }

  .secondary {
    color: #0d3b66;
    background-color: ${(props) => props.theme.yellow};
  }
`
export const Button = styled.button`
  width: 100%;
  height: 72px;

  font-size: 20px;
  font-weight: 800;
  text-align: center;
  border-radius: 20px;
  padding: 19px auto;
  border: none;

  display: flex;
  align-items: center;
  justify-content: center;
`
