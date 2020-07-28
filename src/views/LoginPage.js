import React from 'react';
import styled from 'styled-components';
import { Formik } from 'formik';
import { Link, Redirect } from 'react-router-dom';
import AuthTemplate from 'templates/AuthTemplate';
import Input from 'components/atoms/Input/Input';
import Heading from 'components/atoms/Heading/Heading';
import Button from 'components/atoms/Button/Button';
import { connect } from 'react-redux';
import { authenticateAction } from 'actions';
import { routes } from 'routes';
import { PropTypes } from 'prop-types';

const StyledLoginCard = styled.div`
  display: flex;
  flex-direction: column;
  background-color: white;
  height: 410px;
  width: 390px;
  margin: 0 auto;
  padding: 20px 40px;
  border-radius: 10px;
  box-shadow: 0 10px 30px -10px hsla(0, 0%, 0%, 0.1);
  text-align: center;
  justify-items: center;
`;
// dlugość inputow dopasowywana jest do rodzica
const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
`;

const StyledLink = styled(Link)`
  color: black;
  text-transform: uppercase;
  margin-top: 20px;
  font-weight: ${({ theme }) => theme.bold};
  font-size: ${({ theme }) => theme.fontSize.xs};
`;

const LoginPage = ({ userId, authenticate }) => {
  if (userId) return <Redirect to={routes.home} />;
  return (
    <AuthTemplate>
      <StyledLoginCard>
        <Heading>Log in</Heading>
        <Formik
          initialValues={{ username: '', password: '' }}
          onSubmit={({ username, password }) => {
            authenticate(username, password);
          }}
        >
          {({ values, handleChange, handleBlur, handleSubmit }) => (
            <StyledForm onSubmit={handleSubmit}>
              <Input
                type="text"
                name="username"
                onChange={handleChange}
                onBlur={handleBlur}
                placeholder="username"
                value={values.username}
                first
              />
              <Input
                name="password"
                type="password"
                onChange={handleChange}
                onBlur={handleBlur}
                placeholder="password"
                value={values.password}
              />
              <Button pageType="notes" type="submit" center>
                sign in
              </Button>
            </StyledForm>
          )}
        </Formik>
        <StyledLink to="/register">I want to register</StyledLink>
      </StyledLoginCard>
    </AuthTemplate>
  );
};

const mapStateToProps = ({ userId = null }) => ({ userId });

const mapDispatchToProps = (dispatch) => ({
  authenticate: (username, password) => dispatch(authenticateAction(username, password)),
});

LoginPage.propTypes = {
  userId: PropTypes.string,
  authenticate: PropTypes.func.isRequired,
};

LoginPage.defaultProps = {
  userId: '',
};

export default connect(mapStateToProps, mapDispatchToProps)(LoginPage);
