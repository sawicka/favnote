import React from 'react';
import PropTypes from 'prop-types';
import { NavLink, Link } from 'react-router-dom';
import styled from 'styled-components';
import ButtonIcon from 'components/atoms/ButtonIcon/ButtonIcon';
import bulbIcon from 'assets/icons/bulb.svg';
import logoutIcon from 'assets/icons/logout.svg';
import penIcon from 'assets/icons/pen.svg';
import twitterIcon from 'assets/icons/twitter.svg';
import Logo from 'assets/icons/logo.svg';

const StyleWrapper = styled.nav`
  position: fixed;
  left: 0;
  top: 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 150px;
  background-color: ${({ theme, activeColor }) => theme[activeColor]};
  min-height: 100vh;
`;

const LogoWrapper = styled.div`
  flex: 2 0 0;
  margin: 40px auto 0;
`;

const ButtonsWrapper = styled.div`
  flex: 5 0 0;
`;

const LogoutButtonWrapper = styled.div`
  flex: 1 0 0;
`;

const LogoutButton = styled(ButtonIcon)`
  height: 90px;
  width: 90px;
  margin-bottom: 40px;
`;

const Sidebar = ({ pageType }) => (
  <StyleWrapper activeColor={pageType}>
    <LogoWrapper as={Link} to="/">
      <img src={Logo} alt="Logo" />
    </LogoWrapper>
    <ButtonsWrapper>
      <ButtonIcon as={NavLink} exact to="/" icon={penIcon} activeClassName="active" />
      <ButtonIcon as={NavLink} to="/twitters" icon={twitterIcon} activeClassName="active" />
      <ButtonIcon as={NavLink} to="/articles" icon={bulbIcon} activeClassName="active" />
    </ButtonsWrapper>

    <LogoutButtonWrapper>
      <LogoutButton as={NavLink} to="/logout" icon={logoutIcon} activeClassName="active" />
    </LogoutButtonWrapper>
  </StyleWrapper>
);

Sidebar.propTypes = {
  pageType: PropTypes.oneOf(['note', 'article', 'twiiter']),
};

Sidebar.defaultProps = {
  pageType: 'note',
};

export default Sidebar;
