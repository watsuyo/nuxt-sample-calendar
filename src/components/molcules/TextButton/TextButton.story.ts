import TextButton from './TextButton.vue'

const NAME = 'atoms/TextButton'

export default {
  title: NAME,
  component: TextButton
}

export const Default = () => {
  return {
    components: { TextButton },
    template: '<TextButton fontColor="nega" isShadow isRound>+</TextButton>'
  }
}
