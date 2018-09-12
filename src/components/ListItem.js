import React, { Component } from 'react';
import { Text, View, TouchableWithoutFeedback } from 'react-native';
import { CardSection } from './common';
import { Actions } from 'react-native-router-flux';

class ListItem extends Component {

    onRowPress() {
        console.log("the selected item", this.props.employee);
        Actions.employeeEdit({employee : this.props.employee});
    }

    render() {

        const { name } = this.props.employee;
        return (
            <TouchableWithoutFeedback
                onPress={this.onRowPress.bind(this)}>
                <View>
                    <CardSection>
                        <Text style={Styles.textStyle}>
                            {name}
                        </Text>
                    </CardSection>
                </View>
            </TouchableWithoutFeedback>
        );
    }
}

const Styles = {
    textStyle: {
        paddingLeft: 15,
        fontSize: 18
    }
};

export default ListItem;