import { connect } from 'react-redux';
import Home from './Home';
import { loadRandomInteger } from '@ducks/RandomInteger';

const mapStateToProps = (state) => {
  const { randomInteger } = state;

  return { randomInteger };
};

const mapDispatchToProps = dispatch => ({
    loadRandomInteger: (data) => {
      dispatch(loadRandomInteger(data));
    },
  });

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Home);
