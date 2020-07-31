import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import GridTemplate from 'templates/GridTemplate';
import Card from 'components/molecules/Card/Card';
import { fetchItems } from 'actions';

class Notes extends Component {
  componentDidMount() {
    const { fetchNotes } = this.props;
    fetchNotes();
  }

  render() {
    const { notes } = this.props;

    return (
      <GridTemplate amount={notes.length}>
        {notes.map(({ _id: id, title, content, created }) => (
          <Card id={id} title={title} content={content} created={created} key={id} />
        ))}
      </GridTemplate>
    );
  }
}

Notes.propTypes = {
  notes: PropTypes.arrayOf(
    PropTypes.shape({
      _id: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
      content: PropTypes.string.isRequired,
      created: PropTypes.string,
    }),
  ),
  fetchNotes: PropTypes.func.isRequired,
};

Notes.defaultProps = {
  notes: [],
};

const mapStateToProps = ({ notes }) => ({ notes });

const mapDispatchToProps = (dispatch) => ({
  fetchNotes: () => dispatch(fetchItems('notes')),
});

export default connect(mapStateToProps, mapDispatchToProps)(Notes);
