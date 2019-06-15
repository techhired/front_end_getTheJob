export default store => next => action => {
  try {
    const result = next(action);
    return result;

  } catch (error) {
    action.error = error;
    return action;
  }
}
