
import React ,{component} from 'react';
import {View,Text,Image,TouchableOpacity,Button,StyleSheet,TextInput} from 'react-native';

class Tab1 extends React.Component{
  constructor(props){
           super(props);
           this.state={
            FirstName: '',
            LastName: '',
            UserName: '',
            Password: '',
            ConfirmPassword: '',
           }
       }
       
         submit=()=>{
             alert('form submitted')
    }
    next = ()=>{
        if(this.state.FirstName == ""){
            alert('First name can not be empty');
        }else if(this.state.LastName == ""){
            alert('Last name can not be empty');
        }else if(this.state.UserName == ""){
            alert('Username can not be empty');
        }else if(this.state.Password == ""){
            alert('Password can not be empty');
        }else if(this.state.ConfirmPassword == ""){
            alert('Confirm password can not be empty');
        }else {
            this.props.jumpTo('second')
        }
         }
        
  render(){
  return(
     <View style={{flex:1,backgroundColor:'white'}}>
     <View style={styles.container}>
     
    <Text style={styles.Text}>User Details</Text>
     </View>
     <View style={{margin:10,marginLeft:10}}>
       <Text style={{fontSize:20,fontWeight:'900',color:'black'}}>First Name</Text>
       
       <View style={styles.design}>
         <TextInput placeholder="Enter your first name"
         style={{color:'black',fontSize:20,fontWeight:'900'}}
           onChangeText={(value) => this.setState({ FirstName: value })}>
        </TextInput>
        <Text style={{color:'red'}}>{this.state.invalidAddress}</Text>
       </View>
       </View>

     <View style={{margin:10,marginLeft:10}}>
       <Text style={{fontSize:20,fontWeight:'900',color:'black'}}>Last Name</Text>
       <View style={styles.design}>
         <TextInput placeholder="Enter your last name"
         style={{color:'black',fontSize:20,fontWeight:'900'}}
           onChangeText={(value) => this.setState({ LastName: value })}>
         
        </TextInput>
         <Text style={{color:'red'}}>{this.state.invalidAddress}</Text>
       </View>
     </View>

     <View style={{margin:10,marginLeft:10}}>
       <Text style={{fontSize:20,fontWeight:'900',color:'black'}}>User Name</Text>
       <View style={styles.design}>
         <TextInput placeholder="Enter user name"
         style={{color:'black',fontSize:20,fontWeight:'900'}}
         onChangeText={(value) => this.setState({ UserName: value })}>
        </TextInput>
       </View>
     </View>

     <View style={{margin:10,marginLeft:10}}>
       <Text style={{fontSize:20,fontWeight:'900',color:'black'}}>Password</Text>
       <View style={styles.design}>
         <TextInput placeholder="Enter your password"
         style={{color:'black',fontSize:20,fontWeight:'900'}}
           onChangeText={(value) => this.setState({ Password: value })}>
        </TextInput>
       </View>
     </View>

     <View style={{margin:10,marginLeft:10}}>
       <Text style={{fontSize:20,fontWeight:'900',color:'black'}}>Confirm Password</Text>
       <View style={styles.design}>
         <TextInput placeholder="Re-enter your password "
         style={{color:'black',fontSize:20,fontWeight:'900'}}
         onChangeText={(value) => this.setState({ ConfirmPassword: value })}>
        </TextInput>
       </View>
     </View>
     <TouchableOpacity
     onPress={() => this.next()}>
    
     <View style={{marginTop:15,marginLeft:270,width:100,height:60,borderRadius:30,backgroundColor:'rgb(37, 150, 190)'}}>
       <Text style={{fontSize:24,fontWeight:'bold',color:'white',padding:10,paddingLeft:20}}>Next</Text>
     </View>
     </TouchableOpacity>
     </View>
  )
  }
}
const styles = StyleSheet.create({
container:{
    marginTop:30,
    alignItems:'center',
},
Text:{
    fontSize:30,
    fontWeight:'900',
    color:'black'
},
design:{
  marginTop:5,
  borderWidth:1,
  marginHorizontal:'2%',
  height:50,
  borderColor:'blue'
}

})
export default Tab1;