import _ from 'lodash';
import React, { Component } from 'react';
import { Card, CardSection, Button, Confirm } from './common';
import { connect } from 'react-redux';
import EmployeeForm from './EmployeeForm';
import { employeeUpdate, employeeEdit } from '../actions';
import Communication from 'react-native-communications';


class EmployeeEdit extends Component {

    state = {showModal : false};


    onButtonPress() {
        const { name, phone, shift } = this.props.employee;
        this.props.employeeEdit({ name, phone, shift, uid: this.props.employee.uid });

    }

    componentWillMount() {
        console.log("the recieved item", this.props.employee);
        _.each(this.props.employee, (value, prop) => {
            this.props.employeeUpdate({ prop, value });
        })
    }

    onTextMessageSendPressed() {
        const { phone, shift } = this.props;
        Communication.text(phone, `Your upcoming shift is on ${shift}`);

    }

    onFirePressed() {
            this.setState({showModal : !this.state.showModal});
    }

    render() {
        return (
            <Card>
                <EmployeeForm />
                <CardSection>
                    <Button
                        onPress={this.onButtonPress.bind(this)}>Save Changes</Button>
                </CardSection>
                <CardSection>
                    <Button
                        onPress={this.onTextMessageSendPressed.bind(this)}>Send Message</Button>
                </CardSection>
                <CardSection>
                    <Button
                        onPress={this.onFirePressed.bind(this)}>Fire Employee</Button>
                </CardSection>

                <Confirm
                    visible={this.state.showModal}
                >
                    Are you sure you want to delete it?
                </Confirm>
            </Card>
        );
    }

}

function mapStateToProps(state) {
    console.log("map to state edit", JSON.stringify(state.employeeUpdate));
    return ({
        name: state.employeeUpdate.name,
        phone: state.employeeUpdate.phone,
        shift: state.employeeUpdate.shift

    });
}

export default connect(mapStateToProps, { employeeUpdate, employeeEdit })(EmployeeEdit);