import React, { Component } from 'react';
import { Picker, Text, View } from 'react-native';
import { Card, CardSection, TextInput } from './common';
import { connect } from 'react-redux';
import { employeeUpdate } from '../actions';

class EmployeeForm extends Component {
    render() {

        return (
            <Card>
                <CardSection>
                    <TextInput
                        onChangeText={(text) => this.props.employeeUpdate({
                            prop: 'name',
                            value: text
                        })}
                        style={{
                            flex: 1,
                            height: 40
                        }}
                        label="Name"
                        placeholder="Jane"

                        value={this.props.name}
                    ></TextInput>
                </CardSection>
                <CardSection>
                    <TextInput
                        onChangeText={(text) => this.props.employeeUpdate({
                            prop: 'phone',
                            value: text
                        })}
                        style={{
                            flex: 1,
                            height: 40
                        }}
                        label="Phone"
                        placeholder="2222222222"

                        value={this.props.phone}
                    ></TextInput>
                </CardSection>

                <CardSection style={{ flexDirection: 'column' }}>
                    <Text style={styles.pickerStyle}></Text>

                    <Picker
                        style={{ flex: 1 }}
                        selectedValue={this.props.shift}
                        onValueChange={day => this.props.employeeUpdate({
                            prop: 'shift',
                            value: day
                        })}>
                        <Picker.Item label="Monday" value="Monday" />
                        <Picker.Item label="Tuesday" value="Tuesday" />
                        <Picker.Item label="Wednesday" value="Wednesday" />
                        <Picker.Item label="Thursday" value="Thursday" />
                        <Picker.Item label="Friday" value="Friday" />
                        <Picker.Item label="Saturday" value="Saturday" />
                        <Picker.Item label="Sunday" value="Sunday" />
                    </Picker>
                </CardSection>
            </Card>);
    }
}

const styles = {
    pickerStyle: {
        fontSize: 18,
        paddingLeft: 20

    }

};

function mapStateToProps(state) {
    console.log("the map state to prop " , state);
    return (
        {
            name: state.employeeUpdate.name,
            phone: state.employeeUpdate.phone,
            shift: state.employeeUpdate.shift
        }
    );
}

export default connect(mapStateToProps, { employeeUpdate })(EmployeeForm);