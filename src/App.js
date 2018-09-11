import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import reducers from './reducers';
import LoginForm from './components/LoginForm'
import ReduxThunk from 'redux-thunk';
import Router from './Router';
import { YellowBox } from 'react-native';
class App extends Component {

    componentWillMount() {

        YellowBox.ignoreWarnings(['Warning: isMounted(...) is deprecated', 'Module RCTImageLoader']);

        
        const firebase = require("firebase");

        // Initialize Firebase
        const config = {
            apiKey: 'AIzaSyARAL1ING0wolFr1tdfJx4WI3lvUGTshLY',
            authDomain: 'manager-66791.firebaseapp.com',
            databaseURL: 'https://manager-66791.firebaseio.com',
            projectId: 'manager-66791',
            storageBucket: 'manager-66791.appspot.com',
            messagingSenderId: '465281652437'
        };
        firebase.initializeApp(config);
    }

    render() {
        return (
            <Provider store={createStore(reducers, {},
                applyMiddleware(ReduxThunk))}>
            <Router/>
            </Provider>
        );
    }
}

export default App;