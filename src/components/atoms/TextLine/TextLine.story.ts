import TextLine from './TextLine.vue'
const NAME = 'atoms/TextLine'

export default {
  title: NAME,
  component: TextLine
}

export const Default = () => {
  const day = 1
  return {
    components: { TextLine },
    template: `<TextLine>${day}</TextLine>`
  }
}

export const MainColor = () => {
  return {
    data() {
      return {
        text: 'text',
        color: 'main'
      }
    },
    components: { TextLine },
    template: '<TextLine fontColor="main">{{text}}</TextLine>'
  }
}

export const NegaColor = () => {
  return {
    data() {
      return {
        text: 'text',
        color: 'nega'
      }
    },
    components: { TextLine },
    template: '<TextLine fontColor="nega">{{text}}</TextLine>'
  }
}

export const AccentColor = () => {
  return {
    data() {
      return {
        text: 'text',
        color: 'accent'
      }
    },
    components: { TextLine },
    template: '<TextLine fontColor="accent">{{text}}</TextLine>'
  }
}
