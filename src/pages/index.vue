<template>
  <div class="container">
    <input v-model="selectedMonth" type="text">
    <p>月初: {{ startDayOfMonth(selectedMonth) || currentMonth }}</p>
    <p>月末: {{ endDayOfMonth(selectedMonth) || currentMonth }}</p>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

interface Data {
  selectedMonth: number | null
}

export default Vue.extend({
  data (): Data {
    return {
      selectedMonth: null
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
    }
  }
})
</script>

<style lang="scss" scoped></style>
