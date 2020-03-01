import Block from './Block.vue'
import TextLine from '../../atoms/TextLine/TextLine.vue'

const NAME = 'molecules/Block'

export default {
  title: NAME,
  component: Block
}

export const Default = () => {
  return {
    components: { Block, TextLine },
    template: '<Block isCentered><TextLine>text</TextLine></Block>'
  }
}
