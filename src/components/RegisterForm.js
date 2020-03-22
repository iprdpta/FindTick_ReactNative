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
  Picker,
  Radio,
  Left,
  Right,
  ListItem,
} from 'native-base';

import {
  Dimensions,
  StyleSheet,
  Image,
  FlatList,
  TouchableHighlight,
} from 'react-native';
import styles from '../styles/style';

export default class RegisterForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      radio1: false,
      radio2: false,
      radiotext: null
    };
  }
  render() {
    const {radio1, radio2} = this.state;
    return (
      <View style={styles.formContainer}>
        <View>
          <Text style={styles.loginText}>REGISTER</Text>
        </View>
        <Form>
          <Item regular last bordered style={styles.formItem}>
            <Input
              placeholder="Nama"
              placeholderTextColor="grey"
              style={styles.formInput}
            />
          </Item>
          <Item regular last bordered style={styles.formItem}>
            <Input
              placeholder="Username"
              placeholderTextColor="grey"
              style={styles.formInput}
            />
          </Item>
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
          <Text style={{fontFamily: 'JosefinSans-Regular', color: 'grey'}}>
            Jenis Kelamin :
          </Text>
          <View style={styles.formRadio}>
            <View style={styles.formRadioButt}>
              <ListItem
                selected={radio1}
                onPress={() =>
                  this.setState({
                    radio1: true,
                    radio2: false,
                    radiotext: 'Male',
                  })
                }>
                <Radio
                  color={'#3066be'}
                  selectedColor={'#3066be'}
                  selected={radio1}
                />
                <Text style={styles.formRadioText}>Laki - Laki</Text>
              </ListItem>
            </View>
            <View style={styles.formRadioButt}>
              <ListItem
                selected={radio2}
                onPress={() =>
                  this.setState({
                    radio1: false,
                    radio2: true,
                    radiotext: 'Female',
                  })
                }>
                <Radio
                  color={'#3066be'}
                  selectedColor={'#3066be'}
                  selected={radio2}
                />
                <Text style={styles.formRadioText}>Perempuan</Text>
              </ListItem>
            </View>
          </View>
          <Item regular last bordered style={styles.formItem}>
            <Input
              placeholder="No. HP"
              placeholderTextColor="grey"
              style={styles.formInput}
            />
          </Item>
          <Item regular last bordered style={styles.formItem}>
            <Input
              placeholder="Alamat"
              placeholderTextColor="grey"
              style={styles.formInput}
            />
          </Item>
          <Button vertical block style={styles.formButton}>
            <Text style={styles.formText}>Register</Text>
          </Button>
        </Form>
      </View>
    );
  }
}
