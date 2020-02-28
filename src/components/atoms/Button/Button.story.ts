import Button from './Button.vue'

const NAME = 'atoms/Button'

export default {
  title: NAME,
  component: Button
}

export const Default = () => {
  return {
    components: { Button },
    template: '<Button></Button>'
  }
}

export const Shadow = () => {
  return {
    components: { Button },
    template: '<Button isShadow></Button>'
  }
}

export const Round = () => {
  return {
    components: { Button },
    template: '<Button isRound></Button>'
  }
}
