import React from 'react';
import { Scene, Router } from 'react-native-router-flux';
import LoginForm from './components/LoginForm';
import EmployeeList from './components/EmployeeList';
import EmployeeCreate from './components/EmployeeCreate';
import {Actions} from "react-native-router-flux";

const RouterComponent = () => {
    return (
        <Router>
            <Scene
                key="root" hideNavBar>
                <Scene key= "auth">
                <Scene
                    key="login" component={LoginForm}
                    title="Please login"
                    titleStyle={{ alignSelf: 'center', flex: 1 }} 
                    initial
                ></Scene>
                </Scene>
                <Scene key="main">
                <Scene
                rightTitle="Add"
                onRight={() => Actions.employeeCreate()}
                 key="employeeList" title="Employee"
                    component={EmployeeList}
                ></Scene>
                </Scene>
                <Scene
                key="employeeCreate"
                 title = "Create employee" 
                component={EmployeeCreate}></Scene>
            </Scene>
        </Router>
    );
};

export default RouterComponent;