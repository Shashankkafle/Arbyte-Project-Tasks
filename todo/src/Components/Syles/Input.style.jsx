import styled from "styled-components";

export const Form = styled.form`
  font-size: 30px;
  padding: 0.25em 0.5em;
  border: 2px solid var(--input-border);
  border-radius: 4px;
  display: flex;
  align-items: center;
  justify-content: center;
  input{
    font-size: 30px;
    border: 2px solid ;
    border-radius: 4px;
    margin-top: 50px;
    margin-left: 10px;
    margin-right: 10px;
  }
  button{
    width:  40px;
    height: 40px;
    margin-top: 50px;
    border-radius: 4px;
    margin-left: 10px;
  }
`