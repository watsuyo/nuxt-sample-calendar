import Weekly from './Weekly.vue'

const NAME = 'organisms/Weekly'

export default {
  title: NAME,
  component: Weekly
}

export const Default = () => {
  return {
    data() {
      return {
        calendarData: [
          { date: '2020-4-1', dayOfWeek: '水' },
          { date: '2020-4-2', dayOfWeek: '木' },
          { date: '2020-4-3', dayOfWeek: '金' },
          { date: '2020-4-4', dayOfWeek: '土' },
          { date: '2020-4-5', dayOfWeek: '日' },
          { date: '2020-4-6', dayOfWeek: '月' },
          { date: '2020-4-7', dayOfWeek: '火' }
        ]
      }
    },
    components: { Weekly },
    template: '<Weekly :calendarData="calendarData"></Weekly>'
  }
}
