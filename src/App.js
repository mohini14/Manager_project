import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import reducers from './reducers';
import LoginForm from './components/LoginForm'
import ReduxThunk from 'redux-thunk';
class App extends Component {

    componentWillMount() {

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
                <LoginForm />
            </Provider>
        );
    }
}

export default App;