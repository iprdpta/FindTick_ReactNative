import React from 'react';

import {
  Container,
  Content,
  Icon,
  Button,
  Footer,
  FooterTab,
  View,
} from 'native-base';

import {
  Dimensions,
  StyleSheet,
  Image,
  FlatList,
  TouchableHighlight,
} from 'react-native';
import Home from './Home';
import MyTickets from './MyTickets';
import LoginRegister from './LoginRegister';
import User from './User';
import FooterNav from '../components/FooterNav';
import styles from '../styles/style';

export default class Landing extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      home: true,
      myticket: false,
      user: false,
      login: true,
    };
  }
  render() {
    const {home, myticket, user, login} = this.state;
    return (
      <Container>
        <Content>
          {home ? (
            <Home navigation={this.props.navigation} />
          ) : myticket ? (
            <MyTickets navigation={this.props.navigation} />
          ) : user ? (
            <User navigation={this.props.navigation} />
          ) : null}
        </Content>
        <Footer>
          <FooterTab
            style={{
              backgroundColor: '#3066be',
              textAlign: 'left',
              borderBottomWidth: 0,
            }}>
            <Button
              rounded
              vertical
              onPress={() =>
                this.setState({
                  myticket: false,
                  home: true,
                  user: false,
                })
              }>
              {home ? (
                <Icon name="home" style={styles.footerIcon} />
              ) : (
                <Icon name="home" style={styles.footerIcon2} />
              )}
            </Button>
            <Button
              rounded
              vertical
              onPress={() => {
                if (login) {
                  this.setState({
                    myticket: true,
                    home: false,
                    user: false,
                  });
                } else {
                  this.props.navigation.navigate('Login/Register');
                }
              }}>
              {myticket ? (
                <Icon
                  type="FontAwesome"
                  name="ticket"
                  style={styles.footerIcon}
                />
              ) : (
                <Icon
                  type="FontAwesome"
                  name="ticket"
                  style={styles.footerIcon2}
                />
              )}
            </Button>

            <Button
              rounded
              vertical
              onPress={() => {
                if (login) {
                  this.setState({
                    myticket: false,
                    home: false,
                    user: true,
                  });
                } else {
                  this.props.navigation.navigate('Login/Register');
                }
              }}>
              {user ? (
                <Icon name="person" style={styles.footerIcon} />
              ) : (
                <Icon name="person" style={styles.footerIcon2} />
              )}
            </Button>
          </FooterTab>
        </Footer>
      </Container>
    );
  }
}
