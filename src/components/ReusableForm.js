import React from 'react';
import PropTypes from 'prop-types';

function ReusableForm(props) {
  return (
    <React.Fragment>
      <form onSubmit={props.formSubmissionHandler}>
        <input
          type='text'
          name='topic'
          placeholder='Star Wars Topic'/>
        <input
          type='text'
          name='title'
          placeholder='Movie title'/>
        <textarea
          name='content'
          placeholder='Post' />
        <input
          type='text'
          name='likes'
          placeholder='Likes' />
        <button type='submit'>{props.buttonText}</button>
      </form>
    </React.Fragment>
  );
}

ReusableForm.propTypes = {
  formSubmissionHandler: PropTypes.func,
  buttonText: PropTypes.string
};

export default ReusableForm;