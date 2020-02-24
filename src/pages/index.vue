<template>
  <div class="container">
    <Button />
    <div>
      <span @click="decreaseYear">◁</span>
      <span>{{ currentYear }}</span>
      <span>
        <span @click="increaseYear">▷ </span>
      </span>
    </div>
    <div>
      <span @click="increaseMonth">◁</span>
      <span>{{ currentMonth }}</span>
      <span>
        <span @click="increaseMonth">▷ </span>
      </span>
    </div>
    <span v-for="day in onMonthLenght(currentMonth)" :key="day.key">
      <button @click="getMonthDay(currentMonth, day)">{{ day }}</button>
    </span>
    {{ selectedDateAndMonth || today }}
  </div>
</template>

<script lang="ts">
import Button from '~/components/atoms/Button/Button.vue'
import Vue from 'vue'
// const defaultWeek = ['月', '火', '水', '木', '金', '土', '日']

export default Vue.extend({
  components: {
    Button
  },
  data() {
    return {
      today: new Date(),
      selectedDateAndMonth: '',
      currentMonth: new Date().getMonth() + 1,
      currentYear: new Date().getFullYear()
    }
  },
  computed: {
    daysOfOneMonth() {
      return [...Array(31 + 1).keys()].slice(1)
    },
    monthLists() {
      return [...Array(12 + 1).keys()].slice(1)
    }
  },
  methods: {
    endDayOfMonth(selectedMonth: number) {
      return new Date(this.currentYear, selectedMonth, 0)
    },

    onMonthLenght(month: number) {
      return month % 2 === 0 ? 30 : this.daysOfOneMonth
    },

    getMonthDay(month: number, day: number) {
      const aa = (arg: number) => (arg < 10 ? '' + 0 + arg : arg)
      this.selectedDateAndMonth = '' + this.currentYear + aa(month) + aa(day)
    },

    increaseMonth() {
      this.currentMonth = this.currentMonth === 12 ? 1 : this.currentMonth + 1
    },
    decreaseMonth() {
      this.currentMonth = this.currentMonth === 1 ? 12 : this.currentMonth - 1
    },

    increaseYear() {
      this.currentYear = this.currentYear === 12 ? 1 : this.currentYear + 1
    },

    decreaseYear() {
      this.currentYear = this.currentYear === 1 ? 12 : this.currentYear - 1
    }
  }
})
</script>

<style lang="scss" scoped></style>
