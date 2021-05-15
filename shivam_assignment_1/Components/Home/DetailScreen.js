import { NavigationContainer } from '@react-navigation/native';
import React, {component} from 'react';
import { Button } from 'react-native';
import {View,Text} from 'react-native';
const DetailScreen=(props)=>{
    return(
        <View>
            <Text>DetailScreen</Text>
            <Button title="Return"
            onPress={()=>navigation.navigate("ImageScreen")}/>
        </View>
    )
}
export default DetailScreen;