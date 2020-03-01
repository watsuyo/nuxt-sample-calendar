import TextButton from './TextButton.vue'
import Block from '../../atoms/Block/Block.vue'

const NAME = 'atoms/TextButton'

export default {
  title: NAME,
  component: TextButton
}

export const Default = () => {
  return {
    components: { TextButton, Block },
    template:
      '<TextButton fontColor="passive"><Block isCentered>18</Block></TextButton>'
  }
}

export const AddButton = () => {
  return {
    components: { TextButton, Block },
    template:
      '<TextButton fontColor="nega" fontSize="fontL" height="50" width="50" isShadow isRound><Block isCentered>+</Block></TextButton>'
  }
}
