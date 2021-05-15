import React ,{component} from 'react';
import {View,Text, Button,StyleSheet,TextInput,TouchableOpacity} from 'react-native';

   class Tab2 extends React.Component{
       constructor(props){
           super(props);
           this.state={
                phone: '',
                email: '',
           }
       }
       
         submit = ()=>{
        if(this.state.phone == ""){
            alert('Phone number can not be empty');
        }else if(this.state.email == ""){
            alert('Email can not be empty');
        }else {
            alert('Form Submitted successfully');
        }
    }
   render(){
   return(
      <View style={{flex:1,backgroundColor:'white'}}>
      
     <View style={styles.container}>
     
    <Text style={styles.Text}>User Details</Text>
     </View>
     <View style={{margin:10,marginLeft:10}}>
       <Text style={{fontSize:20,fontWeight:'900',color:'black'}}>Phone</Text>
       
       <View style={styles.design}>
         <TextInput placeholder="Enter your Phone number"
         style={{color:'black',fontSize:20,fontWeight:'900'}}
         maxLength={14}
         keyboardType={'numeric'}
          onChangeText={(value) => this.setState({ phone: value })}>
         
        </TextInput>
       
       </View>
       </View>

     <View style={{margin:10,marginLeft:10}}>
       <Text style={{fontSize:20,fontWeight:'900',color:'black'}}>Email</Text>
       <View style={styles.design}>
         <TextInput placeholder="Enter your E-mail id"
         style={{color:'black',fontSize:20,fontWeight:'900'}}
           onChangeText={(value) => this.setState({ email: value })}>
        </TextInput>
       </View>
     </View>
     
     <View style={{marginTop:20,width:100,height:60,backgroundColor:'rgb(37, 150, 190)',borderRadius:50,marginHorizontal:'35%'}}>
    <TouchableOpacity
    onPress={()=>{this.submit()}}>
       
     <Text style={{fontSize:20,fontWeight:'bold',color:'white',padding:14,paddingLeft:20}}>Submit</Text>
     </TouchableOpacity>
     
     </View>
     <View style={{marginLeft:20,marginTop:190}}>
            <TouchableOpacity
            
            onPress={() => this.props.jumpTo('first')}>
             
             <Text style={{fontSize:25,fontWeight:'bold',color:'rgb(37, 150, 190)',padding:14,paddingLeft:20}}>-:Previous</Text>
          </TouchableOpacity>
         </View>
     
     </View>
  )
}
   }
   const styles = StyleSheet.create({
container:{
    marginTop:100,
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


export default Tab2;