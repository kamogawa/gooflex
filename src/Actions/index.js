let nextUerId = 0
export const addRedux = (text) => {
  return {
    type: 'REDUX_TEST',
    id: nextUerId++,
    text
  }
}