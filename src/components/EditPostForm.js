import React from 'react';
import ReusableForm from './ReusableForm';
import PropTypes from 'prop-types';

function EditPostForm (props) {
  const { post } = props;

  function handleEditPostFormSubmission(event) {
    event.preventDefault();
    props.onEditPost({topic: event.target.topic.value,
                    title: event.target.title.value,
                    content: event.target.content.value,
                    likes: post.likes,
                    id: post.id});
  }

  return (
    <React.Fragment>
      <ReusableForm
        formSubmissionHandler={handleEditPostFormSubmission}
        buttonText="Update Post"/>
    </React.Fragment>
  );
}

EditPostForm.propTypes = {
  post: PropTypes.object,
  onEditPost: PropTypes.func
};

export default EditPostForm;