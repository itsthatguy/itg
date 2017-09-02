import React from 'react';
import PropTypes from 'prop-types';
import { Provider } from 'react-redux';
import Layout from 'containers/Layout';

const Root = ({ store }) => {
  return (
    <Provider store={store}>
      <Layout />
    </Provider>
  );
};

Root.propTypes = {
  store: PropTypes.object,
};

export default Root;
