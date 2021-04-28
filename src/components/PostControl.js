import React from 'react';
import NewPostForm from './NewPostForm';
import PostDetail from './PostDetail';
import PostList from './PostList';
import EditPostForm from './EditPostForm';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

class PostControl extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      formVisibleOnPage: false,
      selectedPost: null,
      editing: false
    };
  }

  handleClick= () => {
    if (this.state.selectedPost != null) {
      this.setState({
        formVisibleOnPage: false,
        selectedPost: null,
        editing: false
      });
    } else {
      this.setState(prevState => ({
        formVisibleOnPage: !prevState.formVisibleOnPage
      }));
    }
  }
	
//   handleThumbsDownClick = () => {
//   const selectedPost = this.state.selectedPost;
//   const thumbsDown = Object.assign({}, selectedPost, {likes: selectedPost.likes - 1});
//   const editedMasterPostList = this.state.masterPostList
//     .filter(post => post.id !== this.state.selectedPost.id)
//     .concat(thumbsDown);
//   this.setState({
//     masterPostList: editedMasterPostList,
//     selectedPost: thumbsDown
//   });
// }
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
    const { id, topic, title, content, likes } = newPost;
    const action = {
      type: 'ADD_POST',
      id: id,
      topic: topic,
      title:title,
      content:content,
      likes:likes
    }
    dispatch(action);
    this.setState({formVisibleOnPage: false});
  }

  handleChangingSelectedPost = (id) => {
    const selectedPost = this.props.masterPostList[id];
    this.setState({selectedPost: selectedPost});
  }

  handleDeletingPost = (id) => {
    const newMasterPostList = this.state.masterPostList.filter(post => post.id !== id);
    this.setState({
      masterPostList: newMasterPostList,
      selectedPost: null
    })
  }

  handleEditingPost = (postToEdit) => {
    const editedMasterPostList = this.state.masterPostList.filter(post => post.id !== this.state.selectedPost.id).concat(postToEdit);
    this.setState({
      masterPostList: editedMasterPostList,
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
    } else if (this.state.formVisibleOnPage) {
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
  masterPostList: PropTypes.object
};

const mapStateToProps = state => {
  return {
    masterPostList: state
  }
}

PostControl = connect(mapStateToProps)(PostControl);

export default PostControl;
