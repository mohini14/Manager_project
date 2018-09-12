import React, { Component } from 'react';
import { ListView, View, Text } from 'react-native';
import _ from 'lodash';
import { employeesFetch } from '../actions';
import { connect } from 'react-redux';
import ListItem from './ListItem';

class EmployeeList extends Component {
    componentWillMount() {
        this.props.employeesFetch();
        this.createDataSource(this.props.employees);

    }

    componentWillReceiveProps(nextProps) {
        this.createDataSource(nextProps.employees);

    }

    createDataSource(employees) {

        // console.log("employee" + JSON.stringify(employee));
        const ds = new ListView.DataSource({
            rowHasChanged: (r1, r2) => r1 != r2
        });

        this.dataSource = ds.cloneWithRows(employees);
    }

    renderRow(employee) {
        //console.log("in render row", employee);
        return <ListItem employee={employee}/>;
    }

    render() {
        //console.log("render in employee list" + JSON.stringify(this.dataSource));
        return (
            <ListView enableEmptySections
                dataSource={this.dataSource}
                renderRow={this.renderRow.bind(this)}>
            </ListView>
        );
    }
}


function mapStateToProps(state) {

    
    const employees = _.map(state.employeeUpdate, (val, uid) => {
        return { ...val, uid };
    });
    console.log("MaptoState", employees);
    return { employees };
}

export default connect(mapStateToProps, { employeesFetch })(EmployeeList);