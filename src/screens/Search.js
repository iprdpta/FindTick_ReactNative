import React from 'react';

import {
  Item,
  Input,
  Button,
  Text,
  Form,
  View,
  Radio,
  ListItem,
  Container,
  Content,
  Header,
  Card,
  Right,
  Left,
} from 'native-base';

import {
  Dimensions,
  StyleSheet,
  Image,
  FlatList,
  TouchableHighlight,
} from 'react-native';
import styles from '../styles/style';
import Svg, {Circle} from 'react-native-svg';
import DateTimePickerModal from 'react-native-modal-datetime-picker';
const {height, width} = Dimensions.get('window');
import moment from '../components/moment';
import Iconx from 'react-native-vector-icons/FontAwesome5';

export default class RegisterForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isDatePickerVisible: false,
      date: 'Pilih Tanggal',
      from: 'Jakarta',
      to: 'Hogwarts',
    };
  }

  showDatePicker = () => {
    this.setState({
      isDatePickerVisible: true,
    });
  };

  hideDatePicker = () => {
    this.setState({
      isDatePickerVisible: false,
    });
  };

  handleConfirm = date => {
    moment.locale('id');
    this.setState({
      date: moment(date).format('D/MMMM/YYYY'),
      isDatePickerVisible: false,
    });
  };

  render() {
    const {from, to} = this.state;
    return (
      <Container>
        <Header style={styles.header}>
          <Button
            transparent
            rounded
            style={{
              width: 40,
              height: 40,
            }}
            onPress={() => this.props.navigation.navigate('Home')}>
            <Iconx name="arrow-left" size={20} color="white" />
          </Button>
          <Text style={styles.headerText}>Cari Tiket</Text>
        </Header>
        <Content>
          <View style={{height: height / 4.5}}>
            <Svg>
              <Circle cx="180" cy="-390" r="500" fill="#3066be" />
            </Svg>
          </View>
          <View style={styles.searchCard}>
            <Card style={{borderRadius: 5}}>
              <Button
                style={{
                  width: 40,
                  height: 40,
                  position: 'absolute',
                  zIndex: 2,
                  marginLeft: 265,
                  marginTop: 30,
                  backgroundColor: 'white',
                  borderRadius: 20,
                  justifyContent: 'center',
                }}
                onPress={() =>
                  this.setState({
                    from: to,
                    to: from,
                  })
                }>
                <Image
                  source={require('../assets/sort.png')}
                  style={{
                    width: 25,
                    height: 25,
                  }}
                />
              </Button>
              <Item>
                <View style={styles.cardFormView}>
                  <View style={styles.cardFormViewx1}>
                    <Text>Dari</Text>
                  </View>
                  <View style={styles.cardFormViewx3}>
                    <Text>:</Text>
                  </View>
                  <View style={styles.cardFormViewx2}>
                    <Input
                      value={from}
                      onChangeText={value =>
                        this.setState({
                          from: value,
                        })
                      }
                    />
                  </View>
                </View>
              </Item>
              <Item>
                <View style={styles.cardFormView}>
                  <View style={styles.cardFormViewx1}>
                    <Text>Ke</Text>
                  </View>
                  <View style={styles.cardFormViewx3}>
                    <Text>:</Text>
                  </View>
                  <View style={styles.cardFormViewx2}>
                    <Input
                      value={to}
                      onChangeText={value =>
                        this.setState({
                          to: value,
                        })
                      }
                    />
                  </View>
                </View>
              </Item>
              <Item onPress={this.showDatePicker}>
                <View style={styles.cardFormView}>
                  <View style={styles.cardFormViewx1}>
                    <Image
                      source={require('../assets/calendar.png')}
                      style={{
                        width: 25,
                        height: 25,
                      }}
                    />
                  </View>
                  <View style={styles.cardFormViewx3}>
                    <Text>:</Text>
                  </View>
                  <View style={styles.cardFormViewx2}>
                    <Input disabled placeholder={this.state.date} />
                  </View>
                </View>
              </Item>
            </Card>
            <Button style={styles.searchButton}>
              <Text>Cari Tiket</Text>
            </Button>
          </View>
        </Content>
        <DateTimePickerModal
          isVisible={this.state.isDatePickerVisible}
          mode="date"
          onConfirm={this.handleConfirm}
          onCancel={this.hideDatePicker}
        />
      </Container>
    );
  }
}
