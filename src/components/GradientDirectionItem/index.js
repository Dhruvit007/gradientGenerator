import {GradientDirectionItemContainer} from './styledComponents'

const GradientDirectionItem = props => {
  const {item} = props
  const {directionId, value, displayText} = item
  return (
    <GradientDirectionItemContainer value={value} key={directionId}>
      {displayText}
    </GradientDirectionItemContainer>
  )
}

export default GradientDirectionItem
