import React from "react";
import PropTypes from "prop-types";

function Post(props){
  return (
    <React.Fragment>
      <div onClick = {() => props.whenPostClicked(props.id)}>
        <h3>{props.topic}</h3>
        <h5>{props.title}</h5>
        <p>{props.content}</p>
        <p>{props.likes}</p>
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