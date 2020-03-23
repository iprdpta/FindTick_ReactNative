import React from 'react';

import {
  Container,
  Content,
  Header,
  Text,
  Card,
  CardItem,
  ListItem,
  List,
  Left,
  Right,
  Footer,
} from 'native-base';

import Icon from 'react-native-vector-icons/FontAwesome5';

import {Dimensions, View, Image} from 'react-native';
import Svg, {Rect} from 'react-native-svg';

import styles from '../styles/style';
import Footers from '../components/Footer';

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
              <Rect x="0" y="0" width="100%" height="100" fill="#3066be" />
            </Svg>
          </View>
          <View style={styles.cardView}>
            <Card>
              <CardItem header style={styles.cardItemHeader}>
                <View style={styles.cardItemHeaderView1}>
                  <Text style={styles.userListText}>Indra Pradipta</Text>
                  <Text style={styles.userListText2}>
                    indraprdpta@gmail.com
                  </Text>
                  <Text style={styles.userListText2}>
                    <Image
                      source={require('../assets/coin.png')}
                      style={styles.coin}
                    />{' '}
                    <Text style={{color: 'green'}}>1.000</Text>
                  </Text>
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
                  <View style={{display: 'flex', flexDirection: 'row'}}>
                    <View style={{flex: 1.2, justifyContent: 'center'}}>
                      <Image
                        source={require('../assets/account.png')}
                        style={styles.userListImage}
                      />
                    </View>
                    <View style={{flex: 6}}>
                      <Text style={styles.userListText3}>
                        Smart Profile{'\n'}
                        <Text style={styles.userListText4}>
                          Pesan tiket lebih cepat dengan Smart Profile
                        </Text>
                      </Text>
                    </View>
                  </View>
                </Left>
                <Right>
                  <Icon name="chevron-right" color="#3066be" size={20} />
                </Right>
              </ListItem>

              <ListItem noIndent>
                <Left>
                  <View style={{display: 'flex', flexDirection: 'row'}}>
                    <View style={{flex: 1, justifyContent: 'center'}}>
                      <Image
                        source={require('../assets/money.png')}
                        style={styles.userListImage}
                      />
                    </View>
                    <View style={{flex: 5}}>
                      <Text style={styles.userListText3}>
                        TickPay{'\n'}
                        <Text style={styles.userListText4}>
                          Dapatkan berbagai macam promo menarik dengan TickPay
                        </Text>
                      </Text>
                    </View>
                  </View>
                </Left>
                <Right>
                  <Icon name="chevron-right" color="#3066be" size={20} />
                </Right>
              </ListItem>

              <ListItem noIndent>
                <Left>
                  <View style={{display: 'flex', flexDirection: 'row'}}>
                    <View style={{flex: 1, justifyContent: 'center'}}>
                      <Image
                        source={require('../assets/refund.png')}
                        style={styles.userListImage}
                      />
                    </View>
                    <View style={{flex: 11}}>
                      <Text style={styles.userListText3}>
                        Daftar Refund{'\n'}
                        <Text style={styles.userListText4}>
                          Cek semua pengajuan refund
                        </Text>
                      </Text>
                    </View>
                  </View>
                </Left>
                <Right>
                  <Icon name="chevron-right" color="#3066be" size={20} />
                </Right>
              </ListItem>

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
                <Text style={styles.userListText2} underlayColor="white">
                  Log Out
                </Text>
              </ListItem>
            </List>
            <ListItem itemDivider></ListItem>
          </View>
        </Content>
        <Footer>
          <Footers navigation={this.props.navigation} user={true} />
        </Footer>
      </Container>
    );
  }
}
