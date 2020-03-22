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
import styles from '../styles/style';

const {height, width} = Dimensions.get('window');

export default class Landing extends React.Component {
  render() {
    return (
      <View style={styles.formContainer}>
        <View>
          <Text style={styles.loginText}>LOGIN</Text>
        </View>
        <Form>
          <Item regular last bordered style={styles.formItem}>
            <Input
              placeholder="Email"
              placeholderTextColor="grey"
              style={styles.formInput}
            />
          </Item>
          <Item regular last bordered style={styles.formItem}>
            <Input
              placeholder="Password"
              placeholderTextColor="grey"
              style={styles.formInput}
            />
          </Item>
          <Button vertical block style={styles.formButton}>
            <Text style={styles.formText}>Login</Text>
          </Button>
        </Form>
      </View>
    );
  }
}
