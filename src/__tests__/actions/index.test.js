import * as actions from './../../actions';
import * as c from '../../actions/ActionTypes';


describe('help queue actions', () => {
  it('deletePost should create DELETE_POST action', () => {
    expect(actions.deletePost(1)).toEqual({
      type: c.DELETE_POST,
      id: 1
    });
  });

  it('toggleForm should create TOGGLE_FORM action', () => {
    expect(actions.toggleForm()).toEqual({
      type: c.TOGGLE_FORM
    });
  });

  it('addPost should create ADD_POST action', () => {
    expect(actions.addPost({topic: 'Empire is the best movie ever!', title: 'Empire Strikes Back', content: 'Redux action is not working correctly.', likes: 6, id: 1})).toEqual({
      type: c.ADD_POST,
      topic: 'Empire is the best movie ever!',
      title: 'Empire Strikes Back',
      content: 'Redux action is not working correctly.',
      likes: 6,
      id: 1
	  });
	});

});