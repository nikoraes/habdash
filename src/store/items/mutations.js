export const updateAll = (state, items) => {
  console.log('Loaded ' + items.length + ' items')
  state.items = items
}

export const updateOne = (state, payload) => {
  console.log('Updating ' + payload.itemName + ' state to ' + payload.newState + (payload.newTransformedState ? ' (' + payload.newTransformedState + ')' : ''))
  const itemIdx = state.items.findIndex((i) => i.name === payload.itemName)
  state.items.splice(itemIdx, 1, Object.assign({}, state.items[itemIdx], {
    state: payload.newState,
    ...(payload.newTransformedState) && { transformedState: payload.newTransformedState }
  }))
}

export const setReady = (state) => {
  state.ready = true
}
