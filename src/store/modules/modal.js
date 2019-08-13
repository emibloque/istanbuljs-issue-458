export const modal = {
  state: {
    component: {
      name: '',
    }
  },

  mutations: {
    setModalComponent: (state, payload) => {
      state.component.name = payload.name
    }
  },
}
