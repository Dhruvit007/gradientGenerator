import {Component} from 'react'
import {
  GradientGeneratorContainer,
  Heading,
  RandomColorSelectMasterContainer,
  GradientDirectionItemContainer,
  RandomColorSelectContainer,
  ColorContainer,
  GenerateBtn,
} from './styledComponents'

import GradientDirectionItem from '../GradientDirectionItem'

const gradientDirectionsList = [
  {directionId: 'TOP', value: 'top', displayText: 'Top'},
  {directionId: 'BOTTOM', value: 'bottom', displayText: 'Bottom'},
  {directionId: 'RIGHT', value: 'right', displayText: 'Right'},
  {directionId: 'LEFT', value: 'left', displayText: 'Left'},
]

class GradientGenerator extends Component {
  state = {
    color1: '#8ae323',
    color2: '#014f7b',
  }

  selectColor1 = event => {
    this.setState({color1: event.target.value})
  }

  selectColor2 = event => {
    this.setState({color2: event.target.value})
  }

  render() {
    const {color1, color2} = this.state
    return (
      <GradientGeneratorContainer color1={color1} color2={color2}>
        <Heading>Generate a CSS Color Gradient</Heading>
        <Heading as="p">Choose a Direction</Heading>
        <GradientDirectionItemContainer>
          {gradientDirectionsList.map(gradientDirectionItem => (
            <GradientDirectionItem
              key={gradientDirectionItem.directionId}
              item={gradientDirectionItem}
            />
          ))}
        </GradientDirectionItemContainer>
        <Heading as="p">Pick the Colors</Heading>
        <RandomColorSelectMasterContainer>
          <RandomColorSelectContainer>
            <p>{color1}</p>
            <ColorContainer
              value={color1}
              onChange={this.selectColor1}
              type="color"
            />
          </RandomColorSelectContainer>
          <RandomColorSelectContainer>
            <p>{color2}</p>
            <ColorContainer
              value={color2}
              onChange={this.selectColor2}
              type="color"
            />
          </RandomColorSelectContainer>
        </RandomColorSelectMasterContainer>
        <GenerateBtn type="button">Generate</GenerateBtn>
      </GradientGeneratorContainer>
    )
  }
}

export default GradientGenerator
