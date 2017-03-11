import React from 'react';
import ReactDOM from 'react-dom';

import * as SessionAPIUtil from './util/session_api_util.js';
import configureStore from './store/store';
import * as SessionActions from './actions/session_actions';
import Root from './components/root';

document.addEventListener('DOMContentLoaded', () => {
    const root = document.getElementById('root');
    const store = configureStore();

    window.store = store;
    window.receiveCurrentUser = SessionActions.receiveCurrentUser;
    window.signup = SessionActions.signup;
    window.login = SessionActions.login;
    window.logout = SessionActions.logout;

    ReactDOM.render(<Root store={store} />, root);
});
