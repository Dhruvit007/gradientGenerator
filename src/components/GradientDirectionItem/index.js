import {GradientDirectionItemContainer, DirectionBtn} from './styledComponents'

const GradientDirectionItem = props => {
  const {item, changeGradientDirection, activeDirection} = props
  const {directionId, value, displayText} = item

  const changeGradient = () => {
    changeGradientDirection(value)
  }

  return (
    <GradientDirectionItemContainer
      value={value}
      key={directionId}
      onClick={changeGradient}
    >
      <DirectionBtn direction={value === activeDirection} type="button">
        {displayText}
      </DirectionBtn>
    </GradientDirectionItemContainer>
  )
}

export default GradientDirectionItem
