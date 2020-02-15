<template>
  <div class="container">
    <span @click="decrease">◁</span>{{ selectedMonth }}<span @click="increase">▷</span>
    <p>月初: {{ startDayOfMonth(selectedMonth | yearMonthDate) || currentMonth | yearMonthDate }}</p>
    <p>月末: {{ endDayOfMonth(selectedMonth) | yearMonthDate || currentMonth | yearMonthDate }}</p>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

interface Data {
  selectedMonth: number
}

export default Vue.extend({
  data (): Data {
    return {
      selectedMonth: new Date().getMonth() + 1
    }
  },
  computed: {
    currentMonth () {
      return new Date().getMonth() + 1
    }
  },
  methods: {
    startDayOfMonth (selectedMonth: number) {
      return new Date(2020, selectedMonth - 1, 1)
    },

    endDayOfMonth (selectedMonth: number) {
      return new Date(2020, selectedMonth, 0)
    },

    increase () {
      this.selectedMonth = this.selectedMonth + 1
    },

    decrease () {
      this.selectedMonth = this.selectedMonth - 1
    }
  }
})
</script>

<style lang="scss" scoped></style>
