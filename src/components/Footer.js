import React from 'react';

import {Icon, Button, FooterTab} from 'native-base';
import styles from '../styles/style';

export default class Landing extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      login: true,
    };
  }
  render() {
    const {login} = this.state;
    const {myTicket,user,home} = this.props;
    return (
      <FooterTab
        style={{
          backgroundColor: '#3066be',
          textAlign: 'left',
          borderBottomWidth: 0,
        }}>
        <Button
          rounded
          vertical
          onPress={() => {
            this.props.navigation.navigate('Home');
          }}>
           {home ? (
            <Icon  name="home" style={styles.footerIcon} />
          ) : (
            <Icon  name="home" style={styles.footerIcon2} />
          )}
        </Button>
        <Button
          rounded
          vertical
          onPress={() => {
            if (login) {
              this.props.navigation.navigate('MyTicket');
            } else {
              this.props.navigation.navigate('Login/Register');
            }
          }}>
          {myTicket ? (
            <Icon type="FontAwesome" name="ticket" style={styles.footerIcon} />
          ) : (
            <Icon type="FontAwesome" name="ticket" style={styles.footerIcon2} />
          )}
        </Button>

        <Button
          rounded
          vertical
          onPress={() => {
            if (login) {
              this.props.navigation.navigate('User');
            } else {
              this.props.navigation.navigate('Login/Register');
            }
          }}>
          {user ? (
            <Icon  name="person" style={styles.footerIcon} />
          ) : (
            <Icon  name="person" style={styles.footerIcon2} />
          )}
        </Button>
      </FooterTab>
    );
  }
}
