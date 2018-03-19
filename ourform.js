//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet, TextInput, Button } from 'react-native';
import {reduxForm, Field} from 'redux-form';
// create a component
const validate = values =>{
    const error = {};
    return error;
}

const myFields = ({label}) =>{
    return(
        <View>
            <Text>{label}:</Text>
            <TextInput style = {{borderWidth:1, width:200, marginBottom: 20}}/>
        </View>
    );
}

const submit = values =>{
    alert(values);
}

const myFormCom = props =>{
    const {handleSubmit} = props;
    return(
        <View>
            <Field
                name = 'fname'
                component ={myFields}
                label = 'First name'/>
            <Field
                name = 'lname'
                component ={myFields}
                label = 'Last name'/>

            <Button title='Submit' onPress={handleSubmit(submit)}/>
        </View>
    );
}

const ourForm = reduxForm({
    form: 'something'
    
})(myFormCom);

export default ourForm;
