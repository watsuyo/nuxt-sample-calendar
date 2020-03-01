<template>
  <div>
    <div>
      <span v-for="data in dayOfWeekList" :key="data.key">
        {{ data.dayOfWeek }}
      </span>
    </div>
    <span v-for="(calendar, index) in calendarData" :key="index">
      <div v-if="calendar.dayOfWeek === '日'" class="br" />
      <TextButton font-color="passive">
        <Block is-centered>
          {{ calendar.dayOfWeek }}
          {{ day(new Date(calendar.date)) }}
        </Block>
      </TextButton>
    </span>
  </div>
</template>

<script lang="ts">
import Vue, { PropType } from 'vue'
import Block from '../../atoms/Block/Block.vue'
import TextButton from '../../molecules/TextButton/TextButton.vue'
import dateformat from 'dateformat'

interface CalendarData {
  date: string
  dayOfWeek: string
}

export default Vue.extend({
  components: { TextButton, Block },

  props: {
    calendarData: {
      type: Array as PropType<CalendarData[]>,
      required: true
    }
  },

  data() {
    return {
      today: new Date(),
      selectedDateAndMonth: '',
      currentMonth: new Date().getMonth() + 1,
      currentYear: new Date().getFullYear(),
      dayOfWeekList: [
        { index: 0, dayOfWeek: 'Su' },
        { index: 1, dayOfWeek: 'Mo' },
        { index: 2, dayOfWeek: 'Tu' },
        { index: 3, dayOfWeek: 'We' },
        { index: 4, dayOfWeek: 'Th' },
        { index: 5, dayOfWeek: 'Fr' },
        { index: 6, dayOfWeek: 'Sa' }
      ]
    }
  },

  methods: {
    day(date: Date) {
      const format = 'dd'
      return dateformat(date, format)
    }
  }
})
</script>

<style scoped>
.br::before {
  content: '\A';
  white-space: pre;
}
</style>
