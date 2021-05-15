
import React, { component } from 'react';
import { View, Text, Image, TouchableOpacity, Button, StyleSheet, TextInput } from 'react-native';
import { connect } from "react-redux";
import AsyncStorage from '@react-native-async-storage/async-storage';

class Tab1 extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      form: {
        FirstName: '',
        LastName: '',
        UserName: '',
        Password: '',
        ConfirmPassword: '',
      },
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
        this.props.dispatch({
          type: "SET_FORMVALUES",
          payload: this.state.form
        })
      }
    } catch (e) {
      return undefined;
    }
  }

  next = async () => {
    if (this.state.form.FirstName == "") {
      alert('First name can not be empty');
    } else if (this.state.form.LastName == "") {
      alert('Last name can not be empty');
    } else if (this.state.form.UserName == "") {
      alert('Username can not be empty');
    } else if (this.state.form.Password == "") {
      alert('Password can not be empty');
    } else if (this.state.form.ConfirmPassword == "") {
      alert('Confirm password can not be empty');
    } else {
      await AsyncStorage.setItem('state', JSON.stringify(this.props.formValues))
        this.props.jumpTo('second')
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
          <Text style={{ fontSize: 20, fontWeight: '900', color: 'black' }}>First Name</Text>

          <View style={styles.design}>
            <TextInput placeholder="Enter your first name"
              style={{ color: 'black', fontSize: 20, fontWeight: '900' }}
              onChangeText={(value) => this.handleInputChange('FirstName', value)}
              value={formValues.FirstName ? formValues.FirstName : form.FirstName}
            >
            </TextInput>
            <Text style={{ color: 'red' }}>{this.state.invalidAddress}</Text>
          </View>
        </View>

        <View style={{ margin: 10, marginLeft: 10 }}>
          <Text style={{ fontSize: 20, fontWeight: '900', color: 'black' }}>Last Name</Text>
          <View style={styles.design}>
            <TextInput placeholder="Enter your last name"
              style={{ color: 'black', fontSize: 20, fontWeight: '900' }}
              onChangeText={(value) => this.handleInputChange('LastName', value)}
              value={formValues.LastName ? formValues.LastName : form.LastName}
            >

            </TextInput>
            <Text style={{ color: 'red' }}>{this.state.invalidAddress}</Text>
          </View>
        </View>

        <View style={{ margin: 10, marginLeft: 10 }}>
          <Text style={{ fontSize: 20, fontWeight: '900', color: 'black' }}>User Name</Text>
          <View style={styles.design}>
            <TextInput placeholder="Enter user name"
              style={{ color: 'black', fontSize: 20, fontWeight: '900' }}
              onChangeText={(value) => this.handleInputChange('UserName', value)}
              value={formValues.UserName ? formValues.UserName : form.UserName}
            >
            </TextInput>
          </View>
        </View>

        <View style={{ margin: 10, marginLeft: 10 }}>
          <Text style={{ fontSize: 20, fontWeight: '900', color: 'black' }}>Password</Text>
          <View style={styles.design}>
            <TextInput placeholder="Enter your password"
              style={{ color: 'black', fontSize: 20, fontWeight: '900' }}
              onChangeText={(value) => this.handleInputChange('Password', value)}
              value={formValues.Password ? formValues.Password : form.Password}
            >
            </TextInput>
          </View>
        </View>

        <View style={{ margin: 10, marginLeft: 10 }}>
          <Text style={{ fontSize: 20, fontWeight: '900', color: 'black' }}>Confirm Password</Text>
          <View style={styles.design}>
            <TextInput placeholder="Re-enter your password "
              style={{ color: 'black', fontSize: 20, fontWeight: '900' }}
              onChangeText={(value) => this.handleInputChange('ConfirmPassword', value)}
              value={formValues.ConfirmPassword ? formValues.ConfirmPassword : form.ConfirmPassword}
            >
            </TextInput>
          </View>
        </View>
        <TouchableOpacity
          onPress={() => this.next()}>
          <View style={{ marginTop: 15, width: 100, height: 60, borderRadius: 30, backgroundColor: 'rgb(37, 150, 190)', alignSelf: 'center' }}>
            <Text style={{ fontSize: 24, fontWeight: 'bold', color: 'white', padding: 10, textAlign: 'center' }}>Next</Text>
          </View>
        </TouchableOpacity>
      </View>
    )
  }
}

const mapStateToProps = state => ({
  message: state.message,
  formValues: state.formValues
});

export default connect(mapStateToProps)(Tab1);

const styles = StyleSheet.create({
  container: {
    marginTop: 30,
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