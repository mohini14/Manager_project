import React from 'react';
import { Scene, Router } from 'react-native-router-flux';
import LoginForm from './components/LoginForm';
import EmployeeList from './components/EmployeeList';
import EmployeeCreate from './components/EmployeeCreate';
import { Actions } from "react-native-router-flux";
import EmployeeEdit from './components/EmployeeEdit';
const RouterComponent = () => {
    return (
        <Router>
            <Scene
                key="root" hideNavBar>
                <Scene key="auth">
                    <Scene
                        key="login" component={LoginForm}
                        title="Please login"
                        titleStyle={{ alignSelf: 'center', flex: 1 }}
                        initial
                    ></Scene>
                </Scene>
                <Scene key="main">
                    <Scene
                       key="employeeList" title="Employee"
                        component={EmployeeList}
                        rightTitle="Add"
                        onRight={() => Actions.employeeCreate()}
                    ></Scene>
                    <Scene
                        key="employeeCreate"
                        title="Create employee"
                        component={EmployeeCreate}></Scene>
               <Scene key= "employeeEdit" 
               title = "Edit Employee"
               component={EmployeeEdit}></Scene>
               
                </Scene>
            </Scene>
        </Router>
    );
};

export default RouterComponent;