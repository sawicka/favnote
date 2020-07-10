import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import UserPageTemplate from 'templates/UserPageTemplate';
import Heading from 'components/atoms/Heading/Heading';
import Paragraph from 'components/atoms/Paragraph/Paragraph';
import Button from 'components/atoms/Button/Button';
import withContext from 'hoc/withContext';

const DetailsWrapper = styled.div`
  margin: 100px 0 0 70px;
  width: 50%;
`;

const DateInfo = styled(Paragraph)`
  margin: -25px 0 55px;
  font-weight: ${({ theme }) => theme.bold};
  font-size: ${({ theme }) => theme.fontSize.xs};
`;

const Content = styled(Paragraph)`
  line-height: 1.7;
`;

const Link = styled.a`
  display: block;
  text-transform: uppercase;
  font-weight: ${({ theme }) => theme.bold};
  color: ${({ theme }) => theme.black};
`;

const StyledAvatar = styled.img`
  width: 120px;
  height: 120px;
  border-radius: 60px;
  position: absolute;
  top: 100px;
  right: 32%;
`;

const CloseButton = styled(Button)`
  margin: 50px 0 0;
`;

class DetailsTemplate extends Component {
  state = {
    redirect: false,
  };

  handleClick = () => {
    this.setState({ redirect: true });
  };

  render() {
    const { children, pageContext } = this.props;
    const { redirect } = this.state;

    if (redirect) {
      return <Redirect to={`/${pageContext}/`} />;
    }

    return (
      <UserPageTemplate>
        <DetailsWrapper>
          {pageContext === 'twitters' && (
            <StyledAvatar src="http://twivatar.glitch.me/hello_roman" />
          )}
          <Heading big>Tytuł</Heading>
          <DateInfo>10 days ago</DateInfo>
          <Content>
            Laboris aliquip non est nulla. Anim velit eu incididunt ea ullamco do dolore ullamco
            velit officia. Mollit non ad occaecat consequat nulla ex cillum fugiat pariatur. Quis
            esse labore excepteur labore nulla duis duis consectetur ut qui cillum in enim. Laborum
            labore aute ad eu. Ad laborum occaecat sunt nulla consectetur velit excepteur voluptate
            laboris aliquip esse qui ipsum. Sunt adipisicing Lorem labore minim ex Lorem ut nostrud
            ad Lorem nostrud. Minim quis non et ea ullamco. Excepteur culpa quis consequat irure
            excepteur. Officia excepteur anim cillum aliqua cupidatat in. Dolore aute veniam ipsum
            excepteur. Elit adipisicing non aliquip non veniam. Id voluptate ea eiusmod incididunt.
            Est labore enim incididunt est cillum. Velit qui anim magna incididunt fugiat do minim.
            Consectetur anim aliquip aliquip minim elit exercitation nisi dolor duis irure officia.
            Ullamco consequat id veniam exercitation esse dolor aute exercitation nostrud veniam
            voluptate pariatur irure. Nisi dolore cillum commodo incididunt fugiat eiusmod cupidatat
            eiusmod sint ex. Ullamco laborum magna incididunt duis cupidatat nisi. Ea culpa
            consectetur reprehenderit veniam velit cillum anim sint do voluptate anim.
          </Content>
          {pageContext === 'articles' && <Link href="https://google.com">open article</Link>}
          <CloseButton type={pageContext} onClick={this.handleClick}>
            close / save
          </CloseButton>
          {children}
        </DetailsWrapper>
      </UserPageTemplate>
    );
  }
}

DetailsTemplate.propTypes = {
  children: PropTypes.oneOfType([PropTypes.element, PropTypes.node]),
  pageContext: PropTypes.oneOf(['notes', 'articles', 'twitters']),
};

DetailsTemplate.defaultProps = {
  pageContext: 'notes',
  children: PropTypes.element,
};

export default withContext(DetailsTemplate);
