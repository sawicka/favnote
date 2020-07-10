import React, { Component } from 'react';
import DetailsTemplate from 'templates/DetailsTemplate';
import { routes } from 'routes/index';
import { PropTypes } from 'prop-types';
import PageContext from 'context';

class DetailsPage extends Component {
  state = {
    pageType: 'notes',
  };

  componentDidMount() {
    const { match } = this.props;

    switch (match.path) {
      case routes.note:
        this.setState({ pageType: 'notes' });
        break;
      case routes.article:
        this.setState({ pageType: 'articles' });
        break;
      case routes.twitter:
        this.setState({ pageType: 'twitters' });
        break;
      default:
        this.setState({ pageType: 'note' });
    }
  }

  render() {
    // const { match } = this.props;
    const { pageType } = this.state;

    return (
      <PageContext.Provider value={pageType}>
        <DetailsTemplate />
      </PageContext.Provider>
    );
  }
}

DetailsPage.propTypes = {
  // eslint-disable-next-line react/forbid-prop-types
  match: PropTypes.object,
};

DetailsPage.defaultProps = {
  match: routes.note,
};

export default DetailsPage;
