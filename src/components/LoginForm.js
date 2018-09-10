import React, { Component } from 'react';
import { Text, View } from 'react-native';
import { Card, CardSection, TextInput, Button } from './common';
import { connect } from 'react-redux';
import { emailChanged, passwordChange, loginUser } from '../actions';
class LoginForm extends Component {


    onEmailChange(text) {
        this.props.emailChanged(text);
    }

    onPasswordChange(text) {
        this.props.passwordChange(text);
    }

    onLoginButtonPress(){
        const {email, password } = this.props;

        this.props.loginUser({email, password});
    }

    render() {
        return (
            <Card>
                <CardSection>
                    <TextInput
                        onChangeText={this.onEmailChange.bind(this)}
                        style={styles.textInputStyle}
                        label="Email"
                        placeholder=" email@gmail.com"
                        value={this.props.email}></TextInput>
                </CardSection>
                <CardSection>
                    <TextInput
                        value={this.props.Password}
                        style={styles.textInputStyle}
                        secureTextEntry={true}
                        label="Password"
                        placeholder="*******"
                        onChangeText={this.onPasswordChange.bind(this)}></TextInput>
                </CardSection>
                <CardSection>
                    <Button
                    onPress = {this.onLoginButtonPress.bind(this)}>Login</Button>
                </CardSection>
            </Card>);
    }
}


const styles = {
    textInputStyle: {
        flex: 1,
        height: 40
    }
};



function mapStateToProps(state) {
    return {
        email: state.auth.email,
        Password: state.auth.Password
    };
}

export default connect(mapStateToProps, { emailChanged, passwordChange, loginUser })(LoginForm);