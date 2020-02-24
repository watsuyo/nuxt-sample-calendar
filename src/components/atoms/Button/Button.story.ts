import Button from './Button.vue'

const NAME = 'atoms/Button'

export default {
  title: NAME,
  component: Button
}

const text = 'test'

export const Emoji = () => `<Button>${text}</Button>`
