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
  TouchableOpacity,
} from 'react-native';
import Svg, {Circle} from 'react-native-svg';

import styles from '../styles/style';
import {Promo, Wisata} from '../components/HorizontalView';

import Footers from '../components/Footer';

const {height, width} = Dimensions.get('window');

export default class Home extends React.Component {
  constructor() {
    super();
    this.state = {
      login: true,
    };
  }
  render() {
    const {login} = this.state;
    return (
      <Container>
        <Header style={styles.header}>
          <Text style={styles.findTick}>
            Find<Text style={styles.tick}>Tick</Text>
          </Text>
          {login ? (
            <View style={styles.coinContainer}>
              <View style={{justifyContent: 'center'}}>
                <Text style={styles.coinText}>
                  <Image
                    source={require('../assets/coin.png')}
                    style={styles.coin}
                  />{' '}
                  1.000
                </Text>
              </View>
              {/* <Image
                source={require('../assets/coin.png')}
                style={styles.coin}
              /> */}
            </View>
          ) : (
            <View>
              <Text
                style={styles.login}
                onPress={() =>
                  this.props.navigation.navigate('Login/Register')
                }>
                LOGIN
              </Text>
            </View>
          )}
        </Header>
        <Content showsVerticalScrollIndicator={false}>
          <ScrollView>
            <View style={{height: height / 2.5}}>
              <Svg>
                <Circle cx="180" cy="-350" r="500" fill="#3066be" />
                {/* <Circle cx={width / 2} cy="-100" r="1000" fill="#3066be" /> */}
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
              <TouchableOpacity
                activeOpacity={0.9}
                onPress={() => this.props.navigation.navigate('Search')}>
                <Card style={styles.menuItem}>
                  <Image
                    source={require('../assets/train.png')}
                    style={styles.cardImages}
                  />

                  <Text style={styles.cardtext}>Kereta</Text>
                </Card>
              </TouchableOpacity>
              <TouchableOpacity
                activeOpacity={0.9}
                onPress={() => this.props.navigation.navigate('Search')}>
                <Card style={styles.menuItem}>
                  <Image
                    source={require('../assets/plane.png')}
                    style={styles.cardImages}
                  />
                  <Text style={styles.cardtext}>Pesawat</Text>
                </Card>
              </TouchableOpacity>
              <TouchableOpacity
                activeOpacity={0.9}
                onPress={() => this.props.navigation.navigate('Search')}>
                <Card style={styles.menuItem}>
                  <Image
                    source={require('../assets/hotel.png')}
                    style={styles.cardImages}
                  />
                  <Text style={styles.cardtext}>Hotel</Text>
                </Card>
              </TouchableOpacity>
              <TouchableOpacity activeOpacity={0.9}>
                <Card style={styles.menuItem}>
                  <Image
                    source={require('../assets/ticket.png')}
                    style={styles.cardImages}
                  />
                  <Text style={styles.cardtext}>Event</Text>
                </Card>
              </TouchableOpacity>
            </View>
            <View style={{padding: 15}}>
              <Text style={styles.textx}>Promo</Text>
              <Text style={styles.textxx}>
                Berbagai promo menarik yang bisa kamu dapatkan
              </Text>
            </View>
            <View>
              <Promo />
            </View>
            <View style={{padding: 15}}>
              <Text style={styles.textx}>Tempat Wisata</Text>
              <Text style={styles.textxx}>
                Rekomendasi tempat wisata yang wajib kamu kunjungi.
              </Text>
            </View>
            <View>
              <Wisata />
            </View>
          </ScrollView>
        </Content>
        <Footer>
          <Footers navigation={this.props.navigation} home={true} />
        </Footer>
      </Container>
    );
  }
}
