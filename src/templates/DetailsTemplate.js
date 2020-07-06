import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import UserPageTemplate from 'templates/UserPageTemplate';
import Heading from 'components/atoms/Heading/Heading';
import Paragraph from 'components/atoms/Paragraph/Paragraph';

const DetailsWrapper = styled.div`
  margin: 250px 0 0 100px;
`;

const DateInfo = styled(Paragraph)`
  margin: 0 0 5px;
  font-weight: ${({ theme }) => theme.bold};
  font-size: ${({ theme }) => theme.fontSize.xs};
`;

const DetailsTemplate = ({ children, pageType }) => (
  <UserPageTemplate pageType={pageType}>
    <DetailsWrapper>
      <Heading big>Tytuł</Heading>
      <DateInfo>10 days ago</DateInfo>
      <Paragraph>
        Laboris aliquip non est nulla. Anim velit eu incididunt ea ullamco do dolore ullamco velit
        officia. Mollit non ad occaecat consequat nulla ex cillum fugiat pariatur. Quis esse labore
        excepteur labore nulla duis duis consectetur ut qui cillum in enim. Laborum labore aute ad
        eu. Ad laborum occaecat sunt nulla consectetur velit excepteur voluptate laboris aliquip
        esse qui ipsum. Sunt adipisicing Lorem labore minim ex Lorem ut nostrud ad Lorem nostrud.
        Minim quis non et ea ullamco. Excepteur culpa quis consequat irure excepteur. Officia
        excepteur anim cillum aliqua cupidatat in. Dolore aute veniam ipsum excepteur. Elit
        adipisicing non aliquip non veniam. Id voluptate ea eiusmod incididunt. Est labore enim
        incididunt est cillum. Velit qui anim magna incididunt fugiat do minim. Consectetur anim
        aliquip aliquip minim elit exercitation nisi dolor duis irure officia. Ullamco consequat id
        veniam exercitation esse dolor aute exercitation nostrud veniam voluptate pariatur irure.
        Nisi dolore cillum commodo incididunt fugiat eiusmod cupidatat eiusmod sint ex. Ullamco
        laborum magna incididunt duis cupidatat nisi. Ea culpa consectetur reprehenderit veniam
        velit cillum anim sint do voluptate anim.
      </Paragraph>
      {children}
    </DetailsWrapper>
  </UserPageTemplate>
);

DetailsTemplate.propTypes = {
  children: PropTypes.oneOfType([PropTypes.element, PropTypes.node]),
  pageType: PropTypes.oneOf(['notes', 'articles', 'twitters']),
};

DetailsTemplate.defaultProps = {
  pageType: 'notes',
  children: PropTypes.element,
};

export default DetailsTemplate;
