/* eslint-disable arrow-body-style */
//import libraries for creating the component
import React from 'react';
import { Text, StyleSheet, View } from 'react-native';

//create the component
const Header = (props) => {
    return (
        <View style={styles.viewStyle}>
            <Text style={styles.textStyle}> {props.headerText} </Text>
        </View>
    );
};

const styles = StyleSheet.create({
    textStyle: {
        fontSize: 20,
    },
    viewStyle: {
        backgroundColor: '#F8F8F8',
        justifyContent: 'center',
        alignItems: 'center',
        height: 60,
        paddingTop: 15,
        elevation: 1,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 20 },
        shadowOpacity: 0.2,
        position: 'relative'
    }
}); 
//make this component available to other parts of the application
export default Header;
