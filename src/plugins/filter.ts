import Vue from 'vue'
import * as dateformat from 'dateformat'

export function monthDate (
  date: Date
): string {
  const format = 'mm/dd'
  return dateformat(date, format)
}

export function yearMonth (
  date: Date
): string {
  const format = 'yyyy/mm'
  return dateformat(date, format)
}

export function yearMonthDate (
  date: Date
): string {
  const format = 'yyyy/mm/dd'
  return dateformat(date, format)
}

export function yearMonthDateTime (
  date: Date
): string {
  const format = 'yyyy/mm/dd HH:MM'
  return dateformat(date, format)
}

const filters = { yearMonthDateTime, yearMonthDate, yearMonth, monthDate }

Object.keys(filters).forEach((key) => {
  Vue.filter(key, filters[key])
})
