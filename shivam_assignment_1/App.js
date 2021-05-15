import React from 'react';
import {View,StyleSheet,Text,TouchableOpacity,shadowOpacity} from 'react-native';
import { ScrollView, TouchableHighlight } from 'react-native-gesture-handler';
import {Card} from 'react-native-shadow-cards';

class App extends React.Component{
  constructor()
  {
    super();
    this.state={
      data:"Click Above",
      }
  }
   render(){
    return(
      <View style={{flex:1,backgroundColor:'rgb(37, 150, 190)'}}>
      <View style={styles.container}>
        <View style={{alignItems:'center',marginTop:10}}>
          <Text style={{fontSize:30,color:'black',fontWeight:'900'}}>Customer Details</Text>
        </View>
       
        <ScrollView>
        <View style={{margin:20}}>
        <TouchableOpacity
        onPress={()=>{this.setState({data:"Permanent address: 48,Doodh talai padawa Khandwa (MP)"})}}>
         <Card style={styles.Card}>
         <Text style={styles.Text}>Name: Shivam Agrawal</Text>
        <Text style={styles.Text}>Customer Id : 1234</Text>
        <Text style={styles.Text}>Age: 24 </Text>
        <Text style={styles.Text}>Sex: Male </Text>
        </Card>
        </TouchableOpacity>
        </View>

        <View style={{margin:5}}>
        <TouchableOpacity
        onPress={()=>{this.setState({data:"Permanent address: 23/802 Eastend Apartments New delhi"})}}>
         <Card style={styles.Card}>
         <Text style={styles.Text}>Name: Shubhangi Sharma</Text>
         <Text style={styles.Text}>Customer Id : 5678</Text>
        <Text style={styles.Text}>Age: 28 </Text>
        <Text style={styles.Text}>Sex: Female </Text>
        </Card>
        </TouchableOpacity>
        </View>

        <View style={{margin:5}}>
        <TouchableOpacity
         onPress={()=>{this.setState({data:"Permanent address: 24/702 Eastend Apartments New delhi"})}}>
         <Card style={styles.Card}>
         <Text style={styles.Text}>Name: Muskan Dhadwal</Text>
        <Text style={styles.Text}>Customer Id : 4321</Text>
        <Text style={styles.Text}>Age: 40 </Text>
        <Text style={styles.Text}>Sex: Female </Text>
        </Card>
        </TouchableOpacity>
        </View>

        <View style={{}}>
        <TouchableOpacity
         onPress={()=>{this.setState({data:"Permanent address: 29 indus Pragya parisar ,bda road awadhpuri bhel bhopal"})}}>
        <Card style={styles.Card}>
         <Text style={styles.Text}>Name: Ankit Yadav</Text>
        <Text style={styles.Text}>Customer Id : 4381</Text>
        <Text style={styles.Text}>Age: 25 </Text>
        <Text style={styles.Text}>Sex: Male </Text>
       </Card>
        </TouchableOpacity>
        </View>
        </ScrollView>
       </View>
       <View style={{margin:20,width:350,height:300,backgroundColor:'#034076',marginTop:40,borderRadius:20,alignItems:'center'}}>
       <Text style={{fontSize:20,fontWeight:'900',color:'white'}}>Customer's Address</Text>
       <View style={{alignItems:'center',justifyContent:'center',marginTop:50}}>
       
       <TouchableOpacity>
       <Text style={{fontSize:25,color:'white',fontWeight:'600',alignItems:'center',justifyContent:'center'}}>
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
    
    width:390,
    height:400,
    backgroundColor:'white',
    borderRadius:20
  },
  Text:{
      fontSize:20,
      fontWeight:'900',
      color:'blue',
      
      textShadowRadius:1,
      textShadowColor:'grey'
  },
  Card:{
      height:110,
      width:'90%',
      justifyContent:'center',
      alignItems:'center',
      backgroundColor:'#ade7eb',
      margin:10,
      borderRadius:20,
      
  }
})
export default App;