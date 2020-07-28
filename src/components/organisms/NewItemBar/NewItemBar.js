import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { Formik } from 'formik';
import Input from 'components/atoms/Input/Input';
import Heading from 'components/atoms/Heading/Heading';
import Button from 'components/atoms/Button/Button';
import withContext from 'hoc/withContext';
import { connect } from 'react-redux';
import { addItem as addItemAction } from 'actions';

const StyledWrapper = styled.div`
  z-index: 10000;
  position: fixed;
  right: 0;
  top: 0;
  display: flex;
  padding: 100px 50px;
  flex-direction: column;
  height: 100vh;
  width: 680px;
  background-color: white;
  border-left: 10px solid ${({ theme, activeColor }) => theme[activeColor]};
  box-shadow: -5px 0 15px rgba(0, 0, 0, 0.1);
  transform: translate(${({ isVisible }) => (isVisible ? '0' : '100%')});
  transition: transform 0.25s ease-in-out;
`;

const StyledTextArea = styled(Input)`
  margin: 30px 0 50px;
  border-radius: 20px;
  height: 30vh;
  font-size: 1.6rem;
`;

const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
`;

const NewItemBar = ({ pageContext = 'notes', isVisible, addItem, handleClose }) => (
  <StyledWrapper big activeColor={pageContext} isVisible={isVisible}>
    <Heading>Create new {pageContext.slice(0, -1)} </Heading>
    <Formik
      initialValues={{ title: '', content: '', twitterName: '', articleUrl: '' }}
      // validate={}
      onSubmit={(values, { setSubmitting }) => {
        addItem(pageContext, values);
        setSubmitting(false);
        handleClose();
      }}
    >
      {({ values, handleChange, handleBlur, handleSubmit, isSubmitting }) => (
        <StyledForm onSubmit={handleSubmit}>
          <Input
            first
            type="text"
            name="title"
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.title}
            placeholder="title"
          />
          {pageContext === 'twitters' && (
            <Input
              type="text"
              name="twitterName"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.twitterName}
              placeholder="twitter name eg. hello_roman"
            />
          )}
          {pageContext === 'articles' && (
            <Input
              type="text"
              name="articleUrl"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.articleUrl}
              placeholder="link"
            />
          )}
          <StyledTextArea
            as="textarea"
            type="text"
            name="content"
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.content}
            placeholder="Description"
          />
          <Button type="submit" disabled={isSubmitting} pageType={pageContext}>
            Add {pageContext.slice(0, -1)}
          </Button>
        </StyledForm>
      )}
    </Formik>
  </StyledWrapper>
);

NewItemBar.propTypes = {
  pageContext: PropTypes.oneOf(['notes', 'twitters', 'articles']).isRequired,
  isVisible: PropTypes.bool.isRequired,
  addItem: PropTypes.func.isRequired,
  handleClose: PropTypes.func.isRequired,
};

const mapDispatchToProps = (dispatch) => ({
  addItem: (itemType, itemContent) => dispatch(addItemAction(itemType, itemContent)),
});

export default connect(null, mapDispatchToProps)(withContext(NewItemBar));
