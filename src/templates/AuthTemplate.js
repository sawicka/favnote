import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import logo from 'assets/icons/logo.svg';
import Heading from 'components/atoms/Heading/Heading';
import { theme } from 'theme/mainTheme';

const StyledWrapper = styled.div`
  padding: 190px 0 30px;
  height: 100vh;
  width: 100vw;
  background: ${theme.notes};
  margin: 0 auto;
`;

const StyledLogo = styled.img`
  display: block;
  height: 18%;
  margin: 0 auto;
`;

const StyledHeading = styled(Heading)`
  text-align: center;
`;

const AuthTemplate = ({ children }) => (
  <StyledWrapper>
    <StyledLogo src={logo} alt="Logo of FavNote is a black writing of word FavNote" />
    <StyledHeading> Your new favorite online notes experiance</StyledHeading>
    {children}
  </StyledWrapper>
);

AuthTemplate.propTypes = {
  children: PropTypes.oneOfType([PropTypes.element, PropTypes.node]),
};

AuthTemplate.defaultProps = {
  children: PropTypes.element,
};

export default AuthTemplate;
