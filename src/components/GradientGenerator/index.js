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
    gradientValue: `to ${gradientDirectionsList[0].value}, #8ae323, #014f7b`,
    activeDirection: 'top',
  }

  generateGradient = () => {
    this.setState(prevState => ({
      gradientValue: `to ${prevState.activeDirection}, ${prevState.color1}, ${prevState.color2}`,
    }))
  }

  selectColor1 = event => {
    this.setState({color1: event.target.value})
  }

  selectColor2 = event => {
    this.setState({color2: event.target.value})
  }

  changeGradientDirection = direction => {
    this.setState({
      activeDirection: direction,
    })
  }

  render() {
    const {
      color1,
      color2,
      gradientValue,
      direction,
      activeDirection,
    } = this.state
    return (
      <GradientGeneratorContainer gradientValue={gradientValue}>
        <Heading>Generate a CSS Color Gradient</Heading>
        <Heading as="p">Choose Direction</Heading>
        <GradientDirectionItemContainer>
          {gradientDirectionsList.map(gradientDirectionItem => (
            <GradientDirectionItem
              key={gradientDirectionItem.directionId}
              item={gradientDirectionItem}
              direction={direction}
              activeDirection={activeDirection}
              changeGradientDirection={this.changeGradientDirection}
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
        <GenerateBtn onClick={this.generateGradient} type="button">
          Generate
        </GenerateBtn>
      </GradientGeneratorContainer>
    )
  }
}

export default GradientGenerator
