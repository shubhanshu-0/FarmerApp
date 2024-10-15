import React, { useState } from "react";
import {
    Modal , 
    View , 
    Text , 
    TextInput,
    Button , 
    StyleSheet, 
    TouchableOpacity
} from 'react-native'
import { black } from "react-native-paper/lib/typescript/styles/themes/v2/colors";


const PumpInputModal = ( {modalVisible , setModalVisible , handleDataUpdate}) => {
    const [PumpControlInfo, SetPumpControlInfo] = useState([{}]);
    const [inputValues , setInputValues] = useState({
        FarmId : "" , 
        FarmName : "",
        FarmLocation : "",
        PumpCode : ""
    });

    const handleInput = (key , values) =>{
        setInputValues({[key] : values});
        SetPumpControlInfo([...PumpControlInfo , inputValues]);
    }
    const handleSubmit = () =>{
        handleDataUpdate(PumpControlInfo);
        setModalVisible(false);
    }
    return(
        <Modal 
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        >
        <View style={styles.modalContainer}>
            <View style = {styles.InfoContainer}>
                <Text style = {{color : 'black'}}>ENTER DETAILS</Text>
                <TextInput 
                placeholder="Enter Farm Id" placeholderTextColor={'black'}
                value = {inputValues.FarmId} 
                onChangeText={handleInput}
                style = {styles.inputField}
                />
                <TextInput 
                placeholder="Enter Farm Name" placeholderTextColor={'black'}
                value = {inputValues.FarmName} 
                onChangeText={handleInput}
                style = {styles.inputField}
                />
                 <TextInput 
                placeholder="Enter Farm Location" placeholderTextColor={'black'}
                value = {inputValues.FarmLocation} 
                onChangeText={handleInput}
                style = {styles.inputField}
                />
                <TextInput 
                placeholder="Enter Pump Code" placeholderTextColor={'black'}
                value = {inputValues.PumpCode} 
                onChangeText={handleInput}
                style = {styles.inputField}
                />
                <Button title="Submit" onPress={handleSubmit} />
            </View>
        </View>
        </Modal>
    )
}

const styles = StyleSheet.create( {
    modalContainer : {
        flex : 1 , 
        justifyContent : 'center',
        alignItems :'center' ,
        backgroundColor : 'rgba(0, 0, 0, 0.5)'
    } ,
    InfoContainer : {
        backgroundColor: 'white',
        padding: 20,
        borderRadius: 10,
        width: '80%',
        maxWidth: 400,
        height : 400,
        alignItems: 'center',
        justifyContent : 'space-around',
        color : 'black',
    },
    inputField : {
        borderBottomColor : 'black' , 
        borderBottomWidth : 1, 
        marginBottom : 10 ,
        padding : 2,
        width : '100%',
        color : 'black'
    }
}
)

export default PumpInputModal