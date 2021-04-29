import * as c from './../actions/ActionTypes';


export const deletePost = id => ({
  type: c.DELETE_POST,
  id
});

export const toggleForm = () => ({
  type: c.TOGGLE_FORM
});

export const addPost = (post) => {
  const {topic, title, content, likes, id } = post;
  return {
    type: c.ADD_POST,
    topic: topic,
    title: title,
    content: content,
    likes: likes,
    id: id
  }
}
