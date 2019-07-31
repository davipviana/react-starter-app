import React, { Component } from 'react';
import PropTypes from 'prop-types';

import './Home.scss';

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount = async () => {
    const { loadRandomInteger } = this.props;
    await loadRandomInteger();
  };

  render = () => {
    const { randomInteger } = this.props;
    const { data, success } = randomInteger;

    return (
      <div>
          <p>{!success ? "" : data}</p>
      </div>
    );
  };
}

Home.propTypes = {
  randomInteger: PropTypes.object.isRequired,
  loadRandomInteger: PropTypes.func.isRequired,
};

export default Home;
