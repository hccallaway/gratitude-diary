import React, { Component } from 'react';
import { Text } from 'react-native';
import { Container, Form, Input, Item, Button, Label } from 'native-base';
import styles from '../styles';

import config from '../secrets.js';
const firebase = require('firebase');
require('firebase/firestore');
firebase.initializeApp(config);

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = { email: '', password: '' };
    this.signUpUser = this.signUpUser.bind(this);
    this.loginUser = this.loginUser.bind(this);
  }

  signUpUser(email, password) {
    try {
      if (this.state.password.length < 6) {
        alert('Please enter at least 6 characters');
        return;
      }
      firebase.auth().createUserWithEmailAndPassword(email, password);
      alert(`Account created for ${email}. Now you may login.`);
    } catch (err) {
      console.log(err.toString());
    }
  }

  loginUser(email, password) {
    try {
      firebase
        .auth()
        .signInWithEmailAndPassword(email, password)
        .then(user => console.log(user));
    } catch (err) {
      console.log(err.toString());
    }
  }

  render() {
    const navigation = this.props.navigation;
    return (
      <Container style={styles.container}>
        <Form>
          <Item floatingLabel>
            <Label>Email</Label>
            <Input
              autoCorrect={false}
              autoCapitalize="none"
              clearButtonMode="always"
              onChangeText={email => this.setState({ email })}
            />
          </Item>
          <Item floatingLabel>
            <Label>Password</Label>
            <Input
              secureTextEntry={true}
              autoCorrect={false}
              autoCapitalize="none"
              clearButtonMode="always"
              onChangeText={password => this.setState({ password })}
            />
          </Item>
          <Button
            style={{ marginTop: 10 }}
            full
            rounded
            success
            onPress={() => {
              this.loginUser(this.state.email, this.state.password);
              navigation.navigate('Diary', { email: this.state.email });
            }}
          >
            <Text style={{ color: 'white' }}>Login</Text>
          </Button>
          <Button
            style={{ marginTop: 10 }}
            full
            rounded
            primary
            onPress={() =>
              this.signUpUser(this.state.email, this.state.password)
            }
          >
            <Text style={{ color: 'white' }}>Sign Up</Text>
          </Button>
        </Form>
      </Container>
    );
  }
}

export default Login;
