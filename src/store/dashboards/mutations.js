export const updateEditLayout = (state, payload) => {
  state.editLayout = payload
}

export const updateCurrent = (state, payload) => {
  console.log(payload)
  state.current = payload
}

/* export const updateLayout = (state, payload) => {
  // state.layout = payload
  for (const p of payload) {
    const wIdx = state.cards.findIndex(w => w.id === p.i)
    if (wIdx > -1) {
      state.cards.splice(p.i, 1, Object.assign(state.cards[wIdx], { position: p }))
    }
  }
}
 */
