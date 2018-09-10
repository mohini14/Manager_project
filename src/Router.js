import React from 'react';
import { Scene, Router } from 'react-native-router-flux';
import LoginForm from './components/LoginForm';
import EmployeeList from './components/EmployeeList';


const RouterComponent = () => {
    return (
        <Router>
            <Scene
                key="root">
                <Scene
                    key="login" component={LoginForm}
                    title="Please login"
                    titleStyle={{ alignSelf: 'center', flex: 1 }} initial
                ></Scene>
                <Scene key="employee_list" title="Employee"
                    component={EmployeeList}
                ></Scene>
            </Scene>
        </Router>
    );
};

export default RouterComponent;