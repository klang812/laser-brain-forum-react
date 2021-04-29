import React from 'react';
import NewPostForm from './NewPostForm';
import PostDetail from './PostDetail';
import PostList from './PostList';
import EditPostForm from './EditPostForm';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import * as a from './../actions';

class PostControl extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      selectedPost: null,
      editing: false
    };
  }

  handleClick = () => {
  if (this.state.selectedPost != null) {
    this.setState({
      selectedPost: null,
      editing: false
    });
  } else {
    const { dispatch } = this.props;
    const action = a.toggleForm();
    dispatch(action);
  }
}
	
	handleThumbsUpClick = (post) => {
		const selectedPost = post;
		selectedPost.likes += 1;
		this.setState({ selectedPost: selectedPost});
}
  handleThumbsDownClick = (post) =>{
    const selectedPost = post;
    selectedPost.likes -= 1;
    this.setState({ selectedPost: selectedPost});
}


  handleAddingNewPostToList = (newPost) => {
    const { dispatch } =this.props;
    const action = a.addPost(newPost);
    dispatch(action);
    const action2 = a.toggleForm();
    dispatch(action2);
}

  handleChangingSelectedPost = (id) => {
    const selectedPost = this.props.masterPostList[id];
    this.setState({selectedPost: selectedPost});
  }

  handleDeletingPost = (id) => {
    const {dispatch} = this.props;
    const action = a.deletePost(id);
    dispatch(action);
    this.setState({selectedPost: null});
  }

  handleEditingPost = (postToEdit) => {
    const { dispatch } = this.props;
    const action = a.addPost(postToEdit);
    dispatch(action);
    this.setState({
      editing: false,
      selectedPost: null
    });
  }

  handleEditClick = () => {
    this.setState({editing: true});
  }

  render(){
    let currentlyVisibleState = null;
    let buttonText = null;

    if (this.state.editing) {
      currentlyVisibleState = <EditPostForm post = {this.state.selectedPost} onEditPost = {this.handleEditingPost}/>
      buttonText = "Return to Post List";

    } else if (this.state.selectedPost != null) {
      currentlyVisibleState = <PostDetail post = {this.state.selectedPost} onClickingDelete = {this.handleDeletingPost} onClickingEdit = {this.handleEditClick} onClickingThumbsUp = {this.handleThumbsUpClick} onClickingThumbsDown = {this.handleThumbsDownClick}/>
      buttonText = "Return to Post List";
    } else if (this.props.formVisibleOnPage) {
      currentlyVisibleState = <NewPostForm onNewPostCreation = {this.handleAddingNewPostToList} />;
      buttonText = "Return to Post List";
    } else {
      currentlyVisibleState = <PostList postList={this.props.masterPostList} onPostSelection={this.handleChangingSelectedPost}/>;
      buttonText = "Add Post";
    }
    return (
      <React.Fragment>
        {currentlyVisibleState}
        <button onClick={this.handleClick}>{buttonText}</button>
      </React.Fragment>
    );
  }
}

PostControl.propTypes = {
  masterPostList: PropTypes.object,
  formVisibleOnPage: PropTypes.bool
};

const mapStateToProps = state => {
  return {
    masterPostList: state.masterPostList,
    formVisibleOnPage: state.formVisibleOnPage
  }
}

PostControl = connect(mapStateToProps)(PostControl);

export default PostControl;
