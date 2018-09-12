import React from 'react';
import { Text, View, Modal } from 'react-native';
import { CardSection } from './CardSection';
import { Button } from './Button';


const Confirm = ({ children, visible, onAccept, onReject }) => {

    const { textStyle, containerStyle, cardSectionStyle } = styles;

    return (
        <Modal
            visible={visible}
            transparent={true}
            animationType="slide"
            onRequestClose={() => { }}
        ><View
            style={containerStyle}>
                <CardSection
                    style={cardSectionStyle}>
                    <Text
                        style={textStyle}>{children}</Text>
                </CardSection>
                <CardSection>
                    <Button
                        onPress={onAccept}>Yes</Button>
                    <Button
                        onPress={onReject}>NO</Button>
                </CardSection>
            </View>
        </Modal>
    );
};

const styles = {

    cardSectionStyle: {

        justifyContent: 'center'
    },
    textStyle: {
        flex: 1,
        fontSize: 18,
        lineHeight: 40
    },
    containerStyle: {
        backgroundColor: 'rgba(0,0,0,0.75)',
        position: 'relative',
        flex: 1,
        justifyContent: 'center'
    }
};
export { Confirm }; 