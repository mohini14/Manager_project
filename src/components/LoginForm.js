import React, { Component } from 'react';
import { Text, View } from 'react-native';
import { Card, Spinner, CardSection, TextInput, Button } from './common';
import { connect } from 'react-redux';
import { emailChanged, passwordChange, loginUser } from '../actions';
class LoginForm extends Component {
     onEmailChange(text) {
        this.props.emailChanged(text);
    }

    onPasswordChange(text) {
        this.props.passwordChange(text);
    }

    onLoginButtonPress() {
        const { email, password } = this.props;
        console.log('props ' + JSON.stringify(this.props));
        this.props.loginUser({ email, password });
    }


    renderError() {
        if (this.props.error) {
            return (
                <View style={{ backgroundColor: 'white' }}>
                    <Text style={styles.errorTextStyle}>{this.props.error}</Text>
                </View >
            );
        }
    }

    renderButton() {
        if (this.props.loading) {
            return <Spinner size="small"></Spinner>;

        } else
            return (
                <Button
                    onPress={this.onLoginButtonPress.bind(this)}>Login</Button>);
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
                {this.renderError()}
                <CardSection>
                    {this.renderButton()}
                </CardSection>
            </Card>);
    }
}


const styles = {
    textInputStyle: {
        flex: 1,
        height: 40
    },

    errorTextStyle: {
        color: 'red',
        fontSize: 20,
        alignSelf: 'center'
    }

};



function mapStateToProps(state) {
    return {
        email: state.auth.email,
        password: state.auth.password,
        user: state.auth.user,
        error: state.auth.error,
        loading: state.auth.loading

    };
}

export default connect(mapStateToProps, { emailChanged, passwordChange, loginUser })(LoginForm);