const state = {
  darkmode: false,
  isDark: false
}

// Get isDark
const getters = {
  isDark: s => s.isDark
}

// Mutate isDark
const mutations = {
  toggleDarkMode: state => {
    state.isDark = !state.isDark;
  }
}

export default {
  state,
  getters,
  mutations
}