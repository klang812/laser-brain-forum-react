import React from "react";
import PropTypes from "prop-types";

function Post(props){
  return (
    <React.Fragment>
      <div onClick = {() => props.whenPostClicked(props.id)}>
        <h3><strong>Topic: </strong>{props.topic}</h3>
        <h5><strong>Movie Title: </strong>{props.title}</h5>
        <p><strong>Post Content: </strong>{props.content}</p>
        <p><strong>Likes: </strong>{props.likes}</p>
        <p><strong>Click here for full details!</strong></p>
        <hr/>
      </div>
    </React.Fragment>
  );
}

Post.propTypes = {
  topic: PropTypes.string,
  title: PropTypes.string,
  content: PropTypes.string,
  likes: PropTypes.number,
  id: PropTypes.string,
  whenPostClicked: PropTypes.func
};

export default Post;