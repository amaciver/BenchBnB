import React from 'react';
import ReactDOM from 'react-dom';

import * as SessionAPIUtil from './util/session_api_util.js';
import * as SessionActions from './actions/session_actions';
import * as BenchActions from './actions/bench_actions';

import configureStore from './store/store';
import Root from './components/root';

document.addEventListener('DOMContentLoaded', () => {
    const root = document.getElementById('root');
    let store;
    if (window.currentUser) {
      const preloadedState = { session: { currentUser: window.currentUser } };
      store = configureStore(preloadedState);
    } else {
      store = configureStore();
    }

    window.store = store;
    // window.receiveCurrentUser = SessionActions.receiveCurrentUser;
    // window.signup = SessionActions.signup;
    // window.login = SessionActions.login;
    // window.logout = SessionActions.logout;
    window.fetchBenches = BenchActions.fetchBenches;

    ReactDOM.render(<Root store={store} />, root);
});
