import React from 'react';
import PropTypes from 'prop-types';
import Sidebar from 'components/organisms/Sidebar/Sidebar';

const UserPageTemplate = ({ children, pageType }) => (
  <>
    <Sidebar pageType={pageType} />
    {children}
  </>
);

UserPageTemplate.propTypes = {
  children: PropTypes.oneOfType([PropTypes.element, PropTypes.node]),
  pageType: PropTypes.oneOf(['notes', 'articles', 'twitters']),
};

UserPageTemplate.defaultProps = {
  pageType: 'notes',
  children: PropTypes.element,
};

export default UserPageTemplate;
