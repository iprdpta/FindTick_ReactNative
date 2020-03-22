import React from 'react';

import {
  Container,
  Content,
  Header,
  Icon,
  Item,
  Input,
  Button,
  Text,
  Form,
  Label,
  View,
} from 'native-base';

import {
  Dimensions,
  StyleSheet,
  Image,
  FlatList,
  TouchableHighlight,
} from 'react-native';
import Svg, {Circle} from 'react-native-svg';

import styles from '../styles/style';
import Login from '../components/LoginForm';
import Register from '../components/RegisterForm';

const {height, width} = Dimensions.get('window');

export default class LoginRegister extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      login: true
    };
  }
  render() {
    const {login} = this.state;
    return (
      <Container>
        <Content>
          {login ? <Login /> : <Register/>}

          {/* <View style={styles.formContainer}>
            <View>
              <Text style={styles.loginText}>LOGIN</Text>
            </View>
            <Form>
              <Item regular last bordered style={styles.formItem}>
                <Input
                  placeholder="Email"
                  placeholderTextColor=""
                  style={styles.formInput}
                />
              </Item>
              <Item regular last bordered style={styles.formItem}>
                <Input
                  placeholder="Password"
                  placeholderTextColor=""
                  style={styles.formInput}
                />
              </Item>
              <Button vertical block style={styles.formButton}>
                <Text style={styles.formText}>Login</Text>
              </Button>
            </Form>
          </View> */}
          <View>
            {login ? (
              <Text style={styles.registerText}>
                Belum Punya Akun?{' '}
                <Text
                  style={styles.registerTextx}
                  onPress={() => this.setState({login: false})}>
                  Register
                </Text>
              </Text>
            ) : (
              <Text style={styles.registerText}>
                Sudah Punya Akun?{' '}
                <Text
                  style={styles.registerTextx}
                  onPress={() => this.setState({login: true})}>
                  Login
                </Text>
              </Text>
            )}
          </View>
        </Content>
      </Container>
    );
  }
}
