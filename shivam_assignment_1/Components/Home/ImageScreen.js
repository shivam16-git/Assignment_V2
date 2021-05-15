import { NavigationContainer } from '@react-navigation/native';
import React, {component} from 'react';
import { Button } from 'react-native';
import {View,Text} from 'react-native';
const ImageScreen=(props)=>{
    return(
        <View>
            <Text>ImageScreen</Text>
            <Button title="Click"
            onPress={()=>navigation.navigate("DetailScreen")}/>
        </View>
    )
}
export default ImageScreen;