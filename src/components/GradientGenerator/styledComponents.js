import styled from 'styled-components'

export const GradientGeneratorContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-image: linear-gradient(${props => props.gradientValue});
  font-family: 'Roboto';
  padding: 40px;
  text-align: center;
`
export const Heading = styled.h1`
  color: #ededed;
  font-family: 'Roboto';
`
export const GradientDirectionItemContainer = styled.ul`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  flex-wrap: wrap;
  width: 400px;
  padding-left: 0px;
  padding: 20px;
`
export const RandomColorSelectContainer = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;
`

export const RandomColorSelectMasterContainer = styled.div`
  display: flex;
`

export const ColorContainer = styled.input`
  width: 100px;
  height: 80px;
  margin-right: 10px;
  border: none;
  outline: none;
  background-color: transparent;
  margin-bottom: 30px;
`
export const GenerateBtn = styled.button`
  background-color: #00c9b7;
  padding: 10px 8px;
  border: none;
  outline: none;
`
