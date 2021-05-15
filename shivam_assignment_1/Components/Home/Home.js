import React,{Component} from 'react';
import {View,Text,Image,TouchableOpacity,ScrollView,StyleSheet, ImageBackground} from 'react-native';
import Feature from './Features-1'
function HomeScreen({navigation})
{
return(

<ImageBackground
style={{flex:1}}
source={{uri:'https://cdn.statically.io/img/wallpaperaccess.com/full/541852.jpg'}}>
<View style={{position:'absolute',marginLeft:'80%',marginTop:30}}>
<TouchableOpacity
onPress={()=>navigation.navigate('Login')}>
<Text style={{fontSize:20,fontWeight:'bold',color:'#aaa'}}>Login</Text>
</TouchableOpacity>
</View>
<View style={{marginTop:60,marginHorizontal:'5%'}}>
<Text style={{fontSize:20,fontWeight:'800',color:'#aaa'}}>Choose one:</Text>
<ScrollView horizontal={true}>
<TouchableOpacity
onPress={()=>navigation.navigate('Wands')}
>
<Image
style={styles.Image}
source=
{{uri:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQnMFhAB526HBIk6u169MYHKcXzGbkdXxcrzdYKQghVbgeRUPqezAhj7pQz10o40aZeXKI&usqp=CAU'}}/>
</TouchableOpacity>
<TouchableOpacity
onPress={()=>navigation.navigate('Wands')}
>
<Image
style={styles.Image}

source={{uri:'https://lh5.googleusercontent.com/2PNe-kCP6wYQu8MFsGmuKcpIkROCpx7P_zMC6fF6IQwyLaycNBTiuAZgCsi2QF7vwSs5muqFx9QOoh14-bdt4kUVUEIFQSwkPgzOg07luLyGtTXL0xceMqH6LRnlGPzPog'}}/>
</TouchableOpacity>
<TouchableOpacity>
<Image
style={styles.Image}
source={{uri:'https://in.bookmyshow.com/entertainment/wp-content/uploads/2016/08/thumbnail10.jpg'}}/>

</TouchableOpacity>
<Image
style={styles.Image}
source={{uri:'https://i.stack.imgur.com/KmXtp.jpg'}}/>
</ScrollView>
</View>
<Feature/>
<View style={{marginTop:50,alignItems:'center'}}>
<TouchableOpacity
onPress={()=>navigation.navigate('Sign up')}>
<Text style={{fontSize:15,fontWeight:'900',color:'#aaa'}}>Sign up now</Text>
</TouchableOpacity>
</View>
</ImageBackground>
)
}
const styles=StyleSheet.create({
Image:{
height:150,
width:150,
margin:5,
borderRadius:50
}
})
export default HomeScreen;