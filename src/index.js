import React             from 'react';
import ReactDOM          from 'react-dom';
import { AppContainer }  from 'react-hot-loader';

import Root              from './containers/Root';
import configureStore from './store';

const store = configureStore();
const rootEl = document.getElementById('root');

const render = (Component) => {
  ReactDOM.render(
    <AppContainer>
      <Component store={store} />
    </AppContainer>,
    rootEl
  );
};

render(Root);

if (module.hot) {
  module.hot.accept('./containers/Root', () => {
    const NextRoot = require('./containers/Root').default;
    return render(NextRoot);
  });
}
