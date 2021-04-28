export default (state = {}, action) => {
  const { topic, title, content, likes, id } = action;
  switch (action.type) {
  case 'ADD_POST':
    return Object.assign({}, state, {
      [id]: {
        topic: topic,
        title: title,
        content: content,
        likes: likes,
        id: id
      }
    });
  case 'DELETE_POST':
    const newState = { ...state };
    delete newState[id];
    return newState;
  default:
    return state;
  }
};