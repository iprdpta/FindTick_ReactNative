import React from 'react';

import {
  Container,
  Content,
  Header,
  Item,
  Input,
  Button,
  Text,
  Form,
  Label,
  Card,
  CardItem,
  Body,
  ListItem,
  Separator,
  List,
  Left,
  Right,
} from 'native-base';

import Icon from 'react-native-vector-icons/FontAwesome5';

import {
  Dimensions,
  StyleSheet,
  Image,
  FlatList,
  TouchableHighlight,
  View,
} from 'react-native';
import Svg, {Rect} from 'react-native-svg';

import styles from '../styles/style';

const {height, width} = Dimensions.get('window');

export default class Landing extends React.Component {
  render() {
    return (
      <Container>
        <Header style={styles.header}>
          <Text style={styles.headerText}>Akun</Text>
        </Header>
        <Content>
          <View style={{height: height / 4.5}}>
            <Svg>
              <Rect x="0" y="0" width="100%" height="120" fill="#3066be" />
            </Svg>
          </View>
          <View style={styles.cardView}>
            <Card>
              <CardItem header style={styles.cardItemHeader}>
                <View style={styles.cardItemHeaderView1}>
                  <Text style={styles.userListText}>Indra Pradipta</Text>
                  <Text style={styles.userListText2}>indraprdpta@gmail.com</Text>
                  <Text style={styles.userListText2}>Saldo : <Text style={{color:'green'}}>Rp1.000,-</Text></Text>
                </View>
                <View style={styles.cardItemHeaderView2}>
                  <Icon name="pen" color="#3066be" size={15} />
                  <Text></Text>
                  <Text></Text>
                </View>
              </CardItem>
            </Card>
          </View>
          <View>
            <List>
              <ListItem itemDivider></ListItem>
              <ListItem noIndent>
                <Left>
                  <Text style={styles.userListText2}>Pengaturan</Text>
                </Left>
                <Right>
                  <Icon name="chevron-right" color="#3066be" size={20} />
                </Right>
              </ListItem>
              <ListItem noIndent>
                <Left>
                  <Text style={styles.userListText2}>Pusat Bantuan</Text>
                </Left>
                <Right>
                  <Icon name="chevron-right" color="#3066be" size={20} />
                </Right>
              </ListItem>
              <ListItem itemDivider></ListItem>
              <ListItem noIndent>
                <Text style={styles.userListText2}>Log Out</Text>
              </ListItem>
            </List>
          </View>
        </Content>
      </Container>
    );
  }
}
