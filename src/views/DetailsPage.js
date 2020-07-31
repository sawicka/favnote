import React, { Component } from 'react';
import DetailsTemplate from 'templates/DetailsTemplate';
import { connect } from 'react-redux';
import withContext from 'hoc/withContext';
import { PropTypes } from 'prop-types';
import axios from 'axios';

class DetailsPage extends Component {
  state = {
    activeItem: { title: '', content: '', activeUrl: '', twitterName: '' },
  };

  // pobiera element z bazy w przypadku gdy elementy nie zostały załadowane do stora (np. użytkownik wszedł na adres konkretnej notatki)
  componentDidMount() {
    const { activeItem, match } = this.props;
    if (activeItem) {
      // destrukturyzacja elementu z tablicy z jednym elementem
      const [item] = activeItem;
      this.setState({ activeItem: item });
    } else {
      const { id } = match.params;

      axios
        .get(`http://localhost:9001/api/note/${id}`)
        .then(({ data }) => {
          this.setState({ activeItem: data });
        })
        .catch((err) => {
          console.log(err);
        });
    }
  }

  render() {
    const { activeItem } = this.state;
    const { pageContext } = this.props;
    return <DetailsTemplate pageContext={pageContext} item={activeItem} />;
  }
}

DetailsPage.propTypes = {
  activeItem: PropTypes.arrayOf(PropTypes.object),
  pageContext: PropTypes.oneOf(['notes', 'articles', 'twitters']).isRequired,
  // eslint-disable-next-line react/forbid-prop-types
  match: PropTypes.object.isRequired,
};

DetailsPage.defaultProps = {
  activeItem: null,
};

const mapStateToProps = (state, ownProps) => {
  const activeItem = state[ownProps.pageContext]
    ? state[ownProps.pageContext].filter((item) => item._id === ownProps.match.params.id)
    : null;

  return {
    activeItem,
  };
};

// zamiana hoc by odczytać props pageContext i match z ownProps
export default withContext(connect(mapStateToProps)(DetailsPage));
