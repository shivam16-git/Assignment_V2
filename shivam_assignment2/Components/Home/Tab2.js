import React, { component } from 'react';
import { View, Text, Button, StyleSheet, TextInput, TouchableOpacity } from 'react-native';
import { connect } from "react-redux";
import AsyncStorage from '@react-native-async-storage/async-storage';

class Tab2 extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      form: {
        phone: '',
        email: '',
      }
    }
  }

  submit = async () => {
    if (this.state.form.phone == "") {
      alert('Phone number can not be empty');
    } else if (this.state.form.email == "") {
      alert('Email can not be empty');
    } else {
      alert('Form Submitted successfully');
      try {
        const serializedState = await AsyncStorage.getItem('state')
        if (serializedState === null) {
          await AsyncStorage.setItem('state', JSON.stringify(this.state.form))
        } else {
          let finalObject = { ...this.state.form, ...this.props.formValues }
          await AsyncStorage.setItem('state', JSON.stringify(finalObject))
        }
      } catch (e) {
        return undefined;
      }
    }
  }
  async componentDidMount() {
    try {
      const serializedState = await AsyncStorage.getItem('state')
      if (serializedState === null) {
        return undefined;
      } else {
        this.setState({
          form: JSON.parse(serializedState)
        })
      }
      //return JSON.parse(serializedState);
    } catch (e) {
      return undefined;
    }
  }
  handleInputChange = (key, value) => {
    this.setState(
      {
        form: { ...this.state.form, [key]: value }
      },
      () =>
        this.props.dispatch({
          type: "SET_FORMVALUES",
          payload: this.state.form
        })
    );
  }
  render() {
    const { form } = this.state;
    const { formValues } = this.props;
    return (
      <View style={{ flex: 1, backgroundColor: 'white' }}>

        <View style={styles.container}>

          <Text style={styles.Text}>User Details</Text>
        </View>
        <View style={{ margin: 10, marginLeft: 10 }}>
          <Text style={{ fontSize: 20, fontWeight: '900', color: 'black' }}>Phone</Text>

          <View style={styles.design}>
            <TextInput placeholder="Enter your Phone number"
              style={{ color: 'black', fontSize: 20, fontWeight: '900' }}
              maxLength={14}
              keyboardType={'numeric'}
              onChangeText={(value) => this.handleInputChange('phone', value)}
              value={formValues && formValues.phone ? formValues.phone : form.phone}
            >

            </TextInput>

          </View>
        </View>

        <View style={{ margin: 10, marginLeft: 10 }}>
          <Text style={{ fontSize: 20, fontWeight: '900', color: 'black' }}>Email</Text>
          <View style={styles.design}>
            <TextInput placeholder="Enter your E-mail id"
              style={{ color: 'black', fontSize: 20, fontWeight: '900' }}
              onChangeText={(value) => this.handleInputChange('email', value)}
              value={formValues && formValues.email ? formValues.email : form.email}
            >
            </TextInput>
          </View>
        </View>

        <View style={{ marginTop: 20, width: 100, height: 60, backgroundColor: 'rgb(37, 150, 190)', borderRadius: 50, alignSelf: 'center' }}>
          <TouchableOpacity
            onPress={() => { this.submit() }}>

            <Text style={{ fontSize: 20, fontWeight: 'bold', color: 'white', padding: 14 }}>Submit</Text>
          </TouchableOpacity>

        </View>
        <View style={{ marginLeft: 20, marginTop: 190 }}>
          <TouchableOpacity

            onPress={() => this.props.jumpTo('first')}>

            <Text style={{ fontSize: 25, fontWeight: 'bold', color: 'rgb(37, 150, 190)', padding: 14, paddingLeft: 20 }}>-:Previous</Text>
          </TouchableOpacity>
        </View>

      </View>
    )
  }
}
const styles = StyleSheet.create({
  container: {
    marginTop: 100,
    alignItems: 'center',
  },
  Text: {
    fontSize: 30,
    fontWeight: '900',
    color: 'black'
  },
  design: {
    marginTop: 5,
    borderWidth: 1,
    marginHorizontal: '2%',
    height: 50,
    borderColor: 'blue'
  }

})
const mapStateToProps = state => ({
  message: state.message,
  formValues: state.formValues
});

export default connect(mapStateToProps)(Tab2);