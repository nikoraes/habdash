import { sprintf } from 'sprintf-js'

export const state = (state) => (name, raw) => {
  if (!state.items.length) return null
  const item = state.items.find(item => item.name === name)
  if (item && item.state) {
    let rawState = item.state
    let unit
    // handle Number items with dimension (unit suffixed to state)
    if (item.type.includes('Number:') && item.state.indexOf(' ') > 0) {
      rawState = item.state.split(' ')[0]
      unit = item.state.split(' ')[1]
    }
    if (raw) return rawState
    if (item.transformedState) {
      return item.transformedState
    } else if (item.stateDescription && item.stateDescription.pattern) {
      const pattern = (unit) ? item.stateDescription.pattern.replace('%unit%', unit) : item.stateDescription.pattern
      return sprintf(pattern, rawState)
    } else {
      return item.state
    }
  } else {
    return null
  }
}

export const name = (state) => (name) => {
  return state.items.find(item => item.name === name)
}
