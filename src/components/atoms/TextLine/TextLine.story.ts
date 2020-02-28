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

export const Main = () => {
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

export const Nega = () => {
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

export const Accent = () => {
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

export const Passive = () => {
  return {
    data() {
      return {
        text: '18',
        color: 'passive'
      }
    },
    components: { TextLine },
    template: '<TextLine fontColor="passive">{{text}}</TextLine>'
  }
}

export const Bold = () => {
  return {
    data() {
      return {
        text: 'Calendar',
        color: 'nega'
      }
    },
    components: { TextLine },
    template: '<TextLine fontColor="nega" isBold>{{text}}</TextLine>'
  }
}
