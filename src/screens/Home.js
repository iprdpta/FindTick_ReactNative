import React from 'react';

import {
  Container,
  Content,
  View,
  Header,
  Title,
  Left,
  Right,
  Item,
  Input,
  Card,
  Button,
  Text,
  CardItem,
  Body,
  Footer,
  FooterTab,
  Subtitle,
  ListItem,
} from 'native-base';

import Icon from 'react-native-vector-icons/FontAwesome5';
import {
  Dimensions,
  Image,
  FlatList,
  ScrollView,
  TouchableHighlight,
} from 'react-native';
import Svg, {Circle} from 'react-native-svg';

import styles from '../styles/style';

const {height, width} = Dimensions.get('window');

export default class Landing extends React.Component {
  render() {
    return (
      <ScrollView>
        <Header style={styles.header}>
          <Text style={styles.findTick}>
            Find<Text style={styles.tick}>Tick</Text>
          </Text>
          <Text
            style={styles.login}
            onPress={() => this.props.navigation.navigate('Login/Register')}>
            LOGIN
          </Text>
        </Header>
        <Content>
          <View style={{height: height / 4.5}}>
            <Svg>
              <Circle cx={width / 2} cy="-750" r="850" fill="#3066be" />
            </Svg>
          </View>
          <View style={styles.textContainer}>
            <Text style={styles.text}>Hai Ticket Seeker,</Text>
            <Text style={styles.text}>Mau kemana kamu hari ini?</Text>
          </View>

          <View
            style={{
              flexDirection: 'row',
              flexWrap: 'wrap',
              justifyContent: 'center',
            }}>
            <TouchableHighlight
              onPress={() => this.props.navigation.navigate('Login/Register')}
              underlayColor="white">
              <Card style={styles.menuItem}>
                <Icon name="train" style={{color: '#3366FF', fontSize: 40}} />
                <Text style={styles.cardtext}>Kereta</Text>
              </Card>
            </TouchableHighlight>
            <TouchableHighlight
              onPress={() =>
                this.props.navigation.navigate('Train', {name: 'Jane'})
              }
              underlayColor="white">
              <Card style={styles.menuItem}>
                <Icon name="plane" style={{color: '#00AAFF', fontSize: 40}} />
                <Text style={styles.cardtext}>Pesawat</Text>
              </Card>
            </TouchableHighlight>
            <TouchableHighlight
              onPress={() =>
                this.props.navigation.navigate('Train', {name: 'Jane'})
              }
              underlayColor="white">
              <Card style={styles.menuItem}>
                <Icon name="bus" style={{color: '#00E64D', fontSize: 40}} />
                <Text style={styles.cardtext}>Bus</Text>
              </Card>
            </TouchableHighlight>
            <TouchableHighlight
              onPress={() =>
                this.props.navigation.navigate('Train', {name: 'Jane'})
              }
              underlayColor="white">
              <Card style={styles.menuItem}>
                <Icon name="car" style={{color: '#FF3333', fontSize: 40}} />
                <Text style={styles.cardtext}>Sewa Mobil</Text>
              </Card>
            </TouchableHighlight>
            <TouchableHighlight
              onPress={() =>
                this.props.navigation.navigate('Train', {name: 'Jane'})
              }
              underlayColor="white">
              <Card style={styles.menuItem}>
                <Icon name="bed" style={{color: '#000099', fontSize: 40}} />
                <Text style={styles.cardtext}>Hotel</Text>
              </Card>
            </TouchableHighlight>
            <TouchableHighlight underlayColor="white">
              <Card style={styles.menuItem}>
                <Icon
                  name="ticket-alt"
                  style={{color: '#FFAA00', fontSize: 40}}
                />
                <Text style={styles.cardtext}>Event</Text>
              </Card>
            </TouchableHighlight>
          </View>
          <View style={{marginLeft: 25, marginTop: 30}}>
            <Text style={styles.textx}>
              Rekomendasi Tempat Wisata di Indonesia
            </Text>
          </View>
          <ScrollView horizontal>
            <TouchableHighlight onPress={() => {}} underlayColor="white">
              <View>
                <Card
                  style={{
                    width: 200,
                    height: 150,
                    marginLeft: 5,
                    marginRight: 5,
                    marginBottom: 20,
                  }}>
                  <Image
                    source={{
                      uri:
                        'https://specials-images.forbesimg.com/imageserve/675172642/960x0.jpg?fit=scale',
                    }}
                    style={{flex: 1, resizeMode: 'cover'}}
                  />
                  <Text style={styles.textRec}>Bali</Text>
                </Card>
              </View>
            </TouchableHighlight>
            <TouchableHighlight onPress={() => {}} underlayColor="white">
              <View>
                <Card
                  style={{
                    width: 200,
                    height: 150,
                    marginLeft: 5,
                    marginRight: 5,
                    marginBottom: 20,
                  }}>
                  <Image
                    source={{
                      uri:
                        'https://awsimages.detik.net.id/customthumb/2019/10/16/1025/img_20191016163543_5da6e46f0b34a.jpg?w=600&q=90',
                    }}
                    style={{flex: 1, resizeMode: 'cover'}}
                  />
                  <Text style={styles.textRec}>Pulau Seribu</Text>
                </Card>
              </View>
            </TouchableHighlight>
            <TouchableHighlight onPress={() => {}} underlayColor="white">
              <View>
                <Card
                  style={{
                    width: 200,
                    height: 150,
                    marginLeft: 5,
                    marginRight: 5,
                    marginBottom: 20,
                  }}>
                  <Image
                    source={{
                      uri:
                        'https://anekatempatwisata.com/wp-content/uploads/2014/10/Raja-Ampat.jpg',
                    }}
                    style={{flex: 1, resizeMode: 'cover'}}
                  />
                  <Text style={styles.textRec}>Raja Ampat</Text>
                </Card>
              </View>
            </TouchableHighlight>
            <TouchableHighlight onPress={() => {}} underlayColor="white">
              <View>
                <Card
                  style={{
                    width: 200,
                    height: 150,
                    marginLeft: 5,
                    marginRight: 5,
                    marginBottom: 20,
                  }}>
                  <Image
                    source={{
                      uri:
                        'https://anekatempatwisata.com/wp-content/uploads/2014/10/Pantai-Pink-Pulau-Komodo-300x200.jpg',
                    }}
                    style={{flex: 1, resizeMode: 'cover'}}
                  />
                  <Text style={styles.textRec}>Pulau Komodo</Text>
                </Card>
              </View>
            </TouchableHighlight>
          </ScrollView>
        </Content>
      </ScrollView>
    );
  }
}
