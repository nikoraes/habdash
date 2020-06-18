export const layout = state => (current) => {
  if (!current) current = 0
  const currentPage = state.pages.find(p => p.id === current)
  console.log(currentPage)
  return currentPage && currentPage.cards.map(w => Object.assign({}, w.position, { i: w.id }))
}
