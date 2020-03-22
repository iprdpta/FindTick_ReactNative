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
import Home from "../screens/Home"
import styles from '../styles/style';

export default class FooterNav extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      home: true,
      myticket: false,
      user: false,
      login: false,
    };
  }
  render() {
    const {home, myticket, user, login} = this.state;
    return (
      <Container>
          <Content>
              <Home/>
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
              onPress={() => this.props.navigation.navigate('Login')}>
              {home ? (
                <Icon name="home" style={styles.footerIcon} />
              ) : (
                <Icon name="home" style={styles.footerIcon2} />
              )}
            </Button>
            <Button
              rounded
              vertical
              onPress={() => this.props.navigation.navigate('Login')}>
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
              onPress={() => this.props.navigation.navigate('Login')}>
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
