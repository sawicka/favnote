import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import UserPageTemplate from 'templates/UserPageTemplate';
import Heading from 'components/atoms/Heading/Heading';
import Paragraph from 'components/atoms/Paragraph/Paragraph';
import Button from 'components/atoms/Button/Button';

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
    const { pageContext, item } = this.props;
    const { redirect } = this.state;

    if (redirect) {
      return <Redirect to={`/${pageContext}`} />;
    }

    return (
      <UserPageTemplate>
        <DetailsWrapper>
          {pageContext === 'twitters' && (
            <StyledAvatar src={`http://twivatar.glitch.me/${item.twitterName}`} />
          )}
          <Heading big>{item.title}</Heading>
          <DateInfo>10 days ago</DateInfo>
          <Content> {item.content}</Content>
          {pageContext === 'articles' && <Link href={item.articleUrl}>open article</Link>}
          <CloseButton type={pageContext} onClick={this.handleClick}>
            close / save
          </CloseButton>
        </DetailsWrapper>
      </UserPageTemplate>
    );
  }
}

DetailsTemplate.propTypes = {
  pageContext: PropTypes.oneOf(['notes', 'articles', 'twitters']),
  // eslint-disable-next-line react/forbid-prop-types
  item: PropTypes.object.isRequired,
};

DetailsTemplate.defaultProps = {
  pageContext: 'notes',
};

export default DetailsTemplate;
