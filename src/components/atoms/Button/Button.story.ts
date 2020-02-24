import Button from './Button.vue'

const NAME = 'atoms/Button'

export default {
  title: NAME,
  component: Button
}

export const Default = () => ({
  components: { Button },
  template: '<Button />'
})

export const Shadow = () => ({
  components: { Button },
  template: '<Button isShadow />'
})
