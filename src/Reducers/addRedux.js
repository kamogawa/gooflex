const sample = (state, action) => {
  switch (action.type) {
    case 'REDUX_TEST':
      return {
        id: action.id,
        text: action.text
      };
    default:
      return state;
  }
}

const samples = (state = [], action) => {
  switch (action.type) {
    case 'ADD_TODO':
      return [
        ...state,
        sample(undefined, action)
      ];
    default:
      return state;
  }
}

export default samples;
