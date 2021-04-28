import postListReducer from '../../reducers/post-list-reducer';

describe('postListReducer', () => {

  let action;

  const currentState = {
    1: {topic: 'Last Jedi Sucks!',
    title: 'Last Jedi',
    content: 'Redux action is not working correctly.',
    likes: 2,
    id: 1 },
    2: {topic: 'Empire is the best movie ever!',
    title: 'Empire Strikes Back',
    content: 'Redux action is not working correctly.',
    likes: 6,
    id: 2 }
  }

  const postData = {
    topic: 'Last Jedi Sucks!',
    title: 'Last Jedi',
    content: 'Redux action is not working correctly.',
    likes: 2,
    id: 1 
  };

  test('Should return default state if no action type is recognized', () => {
    expect(postListReducer({}, { type: null })).toEqual({});
  });

  test('Should successfully add new ticket data to masterTicketList', () => {
    const { topic, title, content, likes, id } = postData;
    action = {
      type: 'ADD_TICKET',
      topic: topic,
      title: title,
      content: content,
      likes: likes,
      id: id
    };
    expect(postListReducer({}, action)).toEqual({
      [id] : {
        topic: topic,
      title: title,
      content: content,
      likes: likes,
      id: id
      }
    });
  });

  test('Should successfully delete a ticket', () => {
    action = {
      type: 'DELETE_TICKET',
      id: 1
    };
    expect(postListReducer(currentState, action)).toEqual({
      2: {topic: 'Empire is the best movie ever!',
        title: 'Empire Strikes Back',
        content: 'Redux action is not working correctly.',
        likes: 6,
        id: 2 }
    });
  });

});