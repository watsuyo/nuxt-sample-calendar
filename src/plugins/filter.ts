import Vue from 'vue'
import dateformat from 'dateformat'

Vue.filter('date', (date: Date) => {
  const format = 'dd'
  return dateformat(date, format)
})

Vue.filter('monthDate', (date: Date) => {
  const format = 'mm/dd'
  return dateformat(date, format)
})

Vue.filter('yearMonth', (date: Date) => {
  const format = 'mm/dd'
  return dateformat(date, format)
})

Vue.filter('yearMonthDate', (date: Date) => {
  const format = 'yyyy/mm/dd'
  return dateformat(date, format)
})

Vue.filter('yearMonthDate', (date: Date) => {
  const format = 'yyyy/mm/dd HH:MM'
  return dateformat(date, format)
})
