export default (state = [], {type, payload}) => {

  switch(type) {
    case 'JOB_SEARCH':
      if(state.length > 10) {
        let tempArr = state.slice(9, state.length);
        return state = tempArr;
      }
      return [...state, payload];
    default:
      return state;
  }
}
