import React, { Component } from 'react';
import { View } from 'react-native';
import { Card, CardSection, TextInput, Button } from './common';


class EmployeeCreate extends Component {

    render() {
        return (
            <Card>
                <CardSection>
                    <TextInput
                        style={{
                            flex: 1,
                            height: 40
                        }}
                        label="Name"
                        placeholder="Jane"></TextInput>
                </CardSection>
                <CardSection>
                    <TextInput
                        style={{
                            flex: 1,
                            height: 40
                        }}
                        label="Phone"
                        placeholder="2222222222"></TextInput>
                </CardSection>
                <CardSection>
                    <TextInput
                        style={{
                            flex: 1,
                            height: 40
                        }}
                        label="Name"
                        placeholder="Jane"></TextInput>
                </CardSection>

                <CardSection>
                    <Button>Create</Button>
                </CardSection>
            </Card>
        );
    }
}

export default EmployeeCreate;