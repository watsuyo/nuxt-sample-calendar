/* eslint-disable prettier/prettier */
import { GetterTree, ActionTree, MutationTree } from 'vuex'

export const state = () => ({
  calendarData: [] as string[][]
})

export type RootState = ReturnType<typeof state>

export const getters: GetterTree<RootState, RootState> = {
  getCalendarData: state => state.calendarData
}

export const mutations: MutationTree<RootState> = {
  GENERATE_CALENDAR_DATA: (state, calendarData: string[][]) => {
    state.calendarData = calendarData
  }
}

export const actions: ActionTree<RootState, RootState> = {
  fetchCalendarData({ commit }, year: number) {
    const dayListLong = [...Array(31 + 1).keys()].slice(1)
    const dayListShort = [...Array(30 + 1).keys()].slice(1)
    const dayListAtLeapYear = [...Array(29 + 1).keys()].slice(1)
    const dayListFebruary = [...Array(28 + 1).keys()].slice(1)

    const monthList = [...Array(12 + 1).keys()].slice(1)

    const isLeapYear = (year) => {
      return (year % 4 === 0 && year % 100 !== 0) || year % 400 === 0
    }

    const calendarData = monthList.map((month) => {
      const dayList =
        month === 2
          ? isLeapYear(year)
            ? dayListAtLeapYear
            : dayListFebruary
          : (month <= 7 && month % 2 === 0) || (month >= 8 && month % 2 !== 0)
            ? dayListShort
            : dayListLong

      return dayList.map((day) => {
        const date = `${year}-${month}-${day}`
        const dayOfWeek = (date: string) =>
          '日月火水木金土'[new Date(date).getDay()]

        return { date, dayOfWeek: dayOfWeek(date) }
      })
    })
    commit('GENERATE_CALENDAR_DATA', calendarData)
  }
}
