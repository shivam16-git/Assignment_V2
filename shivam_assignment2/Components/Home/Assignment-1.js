import { NavigationContainer } from '@react-navigation/native';
import React from 'react';
import {View,StyleSheet,Text,TouchableOpacity, Button} from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
class Assignment extends React.Component{
  constructor()
  {
    super();
    this.state={
      data:"Customer Address",
      }
  }
   render(navigation){
    return(
      <View style={{flex:1,backgroundColor:'grey'}}>
      <View style={styles.container}>
        <View style={{alignItems:'center',marginTop:10}}>
          <Text style={{fontSize:20,color:'black',fontWeight:'900'}}>Customer Details</Text>
        </View>
       
        <ScrollView>
        <View style={{margin:20}}>
        <TouchableOpacity
        onPress={()=>{this.setState({data:"Permanent address: 48,Doodh talai padawa Khandwa (MP)"})}}>
         <Text style={{fontSize:15,fontWeight:'900'}}>Name: Shivam Agrawal</Text>
        <Text style={{fontSize:15,fontWeight:'900'}}>Customer Id : 1234</Text>
        <Text style={{fontSize:15,fontWeight:'900'}}>Age: 24 </Text>
        <Text style={{fontSize:15,fontWeight:'900'}}>Sex: Male </Text>
        </TouchableOpacity>
        </View>

        <View style={{margin:20}}>
        <TouchableOpacity
        onPress={()=>{this.setState({data:"Permanent address: 23/802 Eastend Apartments New delhi"})}}>
         <Text style={{fontSize:15,fontWeight:'900'}}>Name: Shubhangi Sharma</Text>
         <Text style={{fontSize:15,fontWeight:'900'}}>Customer Id : 5678</Text>
        <Text style={{fontSize:15,fontWeight:'900'}}>Age: 28 </Text>
        <Text style={{fontSize:15,fontWeight:'900'}}>Sex: Female </Text>
        </TouchableOpacity>
        </View>

        <View style={{margin:20}}>
        <TouchableOpacity
         onPress={()=>{this.setState({data:"Permanent address: 24/702 Eastend Apartments New delhi"})}}>
         <Text style={{fontSize:15,fontWeight:'900'}}>Name: Muskan Dhadwal</Text>
        <Text style={{fontSize:15,fontWeight:'900'}}>Customer Id : 4321</Text>
        <Text style={{fontSize:15,fontWeight:'900'}}>Age: 40 </Text>
        <Text style={{fontSize:15,fontWeight:'900'}}>Sex: Female </Text>
        </TouchableOpacity>
        </View>

        <View style={{margin:20}}>
        <TouchableOpacity
         onPress={()=>{this.setState({data:"Permanent address: 29 indus Pragya parisar ,bda road awadhpuri bhel bhopal"})}}>
         <Text style={{fontSize:15,fontWeight:'900'}}>Name: Ankit Yadav</Text>
        <Text style={{fontSize:15,fontWeight:'900'}}>Customer Id : 4381</Text>
        <Text style={{fontSize:15,fontWeight:'900'}}>Age: 25 </Text>
        <Text style={{fontSize:15,fontWeight:'900'}}>Sex: Male </Text>
        </TouchableOpacity>
        </View>
        </ScrollView>
       </View>
       <View style={styles.container}>
       <View style={{alignItems:'center',justifyContent:'center',marginTop:50}}>
       <TouchableOpacity>
       <Text style={{fontSize:20,color:'red',fontWeight:'900'}}>
       {this.state.data}
       </Text>
       </TouchableOpacity>
        
       </View>
      </View>
    </View>
      
      
    )
  }
}
const styles = StyleSheet.create({
  container:{
    margin:20,
    width:350,
    height:310,
    backgroundColor:'white',
    borderRadius:20
  }
})
export default Assignment;