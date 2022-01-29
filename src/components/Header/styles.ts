import styled from "styled-components";

export const Container = styled.header`
  height: 24vh;
  width: 100%;
  padding: 2.5% 20%;

  background: linear-gradient(90deg, #574ae8 0%, #3ea1db 100%);

  display: flex;
  flex-direction: column;

  justify-content: space-between;
`

export const Title = styled.h1`
  font-family: 'Lexend Deca', sans-serif;
  font-size: 1.5em;
  font-weight: 400;
  color: #f9f9f9;
`

export const InputsContainer = styled.div`
  width: 100%;

  display: flex;
  flex-direction: row;
  justify-content: space-between;
`
