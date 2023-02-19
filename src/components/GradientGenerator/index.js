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
  render() {
    return (
      <GradientGeneratorContainer>
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
            <p>#8ae323</p>
            <ColorContainer type="color" />
          </RandomColorSelectContainer>
          <RandomColorSelectContainer>
            <p>#014f7b</p>
            <ColorContainer type="color" />
          </RandomColorSelectContainer>
        </RandomColorSelectMasterContainer>
        <GenerateBtn type="button">Generate</GenerateBtn>
      </GradientGeneratorContainer>
    )
  }
}

export default GradientGenerator
