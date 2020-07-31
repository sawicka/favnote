import React, { Component } from 'react';
import { PropTypes } from 'prop-types';
import { connect } from 'react-redux';
import GridTemplate from 'templates/GridTemplate';
import Card from 'components/molecules/Card/Card';
import { fetchItems } from 'actions';

class Twitters extends Component {
  componentDidMount() {
    const { fetchTwitters } = this.props;
    fetchTwitters();
  }

  render() {
    const { twitters } = this.props;

    return (
      <GridTemplate amount={twitters.length}>
        {twitters.map(({ title, content, twitterName, created, _id: id }) => (
          <Card
            id={id}
            title={title}
            content={content}
            created={created}
            twitterName={twitterName}
            key={title}
          />
        ))}
      </GridTemplate>
    );
  }
}

Twitters.propTypes = {
  fetchTwitters: PropTypes.func.isRequired,
  twitters: PropTypes.arrayOf(
    PropTypes.shape({
      _id: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
      content: PropTypes.string.isRequired,
      twitterName: PropTypes.string.isRequired,
      created: PropTypes.string,
    }),
  ),
};
Twitters.defaultProps = {
  twitters: [],
};

// wyciąga ze stora state twiters i zwraca go
// zwracany obiekt to {twitters: twitters} ale es6 pozwala to zapisać tak bo nazwy są takie same
const mapStateToProps = ({ twitters }) => ({ twitters });

const mapDispatchToProps = (dispatch) => ({
  fetchTwitters: () => dispatch(fetchItems('twitters')),
});

export default connect(mapStateToProps, mapDispatchToProps)(Twitters);
