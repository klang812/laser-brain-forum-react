import React from "react";
import Post from "./Post";
import PropTypes from "prop-types";

function PostList(props){
  return (
    <React.Fragment>
      <hr/>
      {props.postList.sort((a,b) => b.likes - a.likes).map((post) =>
        <Post
          whenPostClicked = { props.onPostSelection }
          topic={post.topic}
          title={post.title}
          content={post.content}
          likes={post.likes}
          id={post.id}
          key={post.id}/>
      )}
    </React.Fragment>
  );
}

PostList.propTypes = {
  postList: PropTypes.array,
  onPostSelection: PropTypes.func
};

export default PostList;
