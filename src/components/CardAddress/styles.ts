import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  
  width: 100%;
  height: auto;
  
  border: solid 1px #ebebeb;
  border-radius: 5px;
  
  background: #fff;
  
  padding: 2%;
  margin: 2% 0;
`

export const TopAddres = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-size: 14px;
  color: #b6b6b6;
`

export const City = styled.h3`
  display: block;
  font-size: 1.17em;
  margin-block-start: 1em;
  margin-block-end: 1em;
  margin-inline-start: 0px;
  margin-inline-end: 0px;
  font-weight: bold;
`

export const AddressText = styled.p`
  color: #b6b6b6;
  display: block;
  margin-block-start: 1em;
  margin-block-end: 1em;
  margin-inline-start: 0px;
  margin-inline-end: 0px;
`