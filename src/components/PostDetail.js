import React from 'react';
import PropTypes from 'prop-types';


function PostDetail(props){
  const { post, onClickingDelete, onClickingThumbsDown, onClickingThumbsUp } = props;

  return (
    <React.Fragment>
      <h1>Post Detail</h1>
      <h3>{post.topic}</h3>
      <h5>{post.title}</h5>
      <p>{post.content}</p>
      <p>{post.likes}</p>
      <button onClick={() => onClickingThumbsUp(post.id)}>Thumbs Up!</button>
      <button onClick={() => onClickingThumbsDown(post.id)}>Thumbs Down</button>
      <button onClick={ props.onClickingEdit }>Update Post</button>
      <button onClick={()=> onClickingDelete(post.id)}>Delete Post</button>
      <hr/>
    </React.Fragment>
  );
}

PostDetail.propTypes = {
  post: PropTypes.object,
  onClickingDelete: PropTypes.func,
  onClickingEdit: PropTypes.func,
  onClickingThumbsUp: PropTypes.func,
  onClickingThumbsDown: PropTypes.func
};

export default PostDetail;