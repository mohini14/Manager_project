import React, { Component } from 'react';
import { Card, CardSection, Button } from './common';
import { connect } from 'react-redux';
import { employeeUpdate, employeeCreate } from '../actions';
import EmployeeForm from './EmployeeForm';

class EmployeeCreate extends Component {
     onSubmitButtonPressed() {
        const { name, phone, shift } = this.props;
        this.props.employeeCreate({ name, phone, shift: shift || 'Monday' });
    }


    render() {
        console.log("the create" ,this.props);
        return (
            <Card>
               <EmployeeForm {...this.props}/>
                <CardSection>
                    <Button
                        onPress={this.onSubmitButtonPressed.bind(this)}>Create</Button>
                </CardSection>
            </Card>
        );
    }
}



const mapStateToProps = (state) => {

    return{
        name : state.employeeUpdate.name,
        phone : state.employeeUpdate.phone,
        shift : state.employeeUpdate.shift
    };

};

export default connect(mapStateToProps, {
    employeeUpdate, employeeCreate
})(EmployeeCreate);