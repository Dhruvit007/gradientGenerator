import styled from 'styled-components'

export const GradientDirectionItemContainer = styled.li`
  width: 20%;
  height: 30px;
  background-color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 3px;
  border: none;
  outline: none;
  opacity: 1;
`

export const DirectionBtn = styled.button`
  width: 100%;
  height: 100%;
  opacity: ${props => (props.direction ? 1 : 0.5)};
`
