import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Input from 'components/atoms/Input/Input';
import Heading from 'components/atoms/Heading/Heading';
import Paragraph from 'components/atoms/Paragraph/Paragraph';
import UserPageTemplate from './UserPageTemplate';

const StyledWrapper = styled.div`
  padding: 25px 150px 25px 70px;
`;

const StyledGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 85px;
`;

const StyledPageHeader = styled.div`
  margin: 20px 0 50px;
`;

const StyledHeading = styled(Heading)`
  margin: 25px 0 0;
  text-transform: capitalize;
`;

const StyledParagraph = styled(Paragraph)`
  margin: 0;
  font-weight: ${({ theme }) => theme.bold};
`;

const GridTemplate = ({ children, pageType, amount }) => (
  <UserPageTemplate pageType={pageType}>
    <StyledWrapper>
      <StyledPageHeader>
        <Input search placeholder="Search" />
        <StyledHeading big as="h1">
          {pageType}
        </StyledHeading>
        <StyledParagraph>
          {amount} {pageType}{' '}
        </StyledParagraph>
      </StyledPageHeader>
      <StyledGrid>{children}</StyledGrid>
    </StyledWrapper>
  </UserPageTemplate>
);

GridTemplate.propTypes = {
  children: PropTypes.arrayOf(PropTypes.object).isRequired,
  pageType: PropTypes.oneOf(['notes', 'articles', 'twitters']),
  amount: PropTypes.number.isRequired,
};

GridTemplate.defaultProps = {
  pageType: 'notes',
};

export default GridTemplate;
