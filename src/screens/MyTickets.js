import React from 'react';
import {
  Container,
  Content,
  View,
  Header,
  Card,
  Button,
  Text,
  CardItem,
  Footer,
  Item,
} from 'native-base';
import {ScrollView, TouchableHighlight} from 'react-native';
import styles from '../styles/style';
import Footers from '../components/Footer';
import {Ticket} from '../components/MyTicketList';
import Icon from 'react-native-vector-icons/FontAwesome5';

export default class User extends React.Component {
  constructor() {
    super();
    this.state = {
      list: 'Semua Tiket',
    };
  }
  render() {
    const {list} = this.state;
    return (
      <Container>
        <Header style={styles.header}>
          <Text style={styles.headerText}>MyTicket</Text>
        </Header>
        <Content padder>
          <ScrollView horizontal showsHorizontalScrollIndicator={false}>
            <TouchableHighlight
              underlayColor="white"
              onPress={() =>
                this.setState({
                  list: 'Semua Tiket',
                })
              }>
              {list === 'Semua Tiket' ? (
                <Card style={styles.myTicketSVCard2}>
                  <Text style={{color: 'white'}}> Semua Ticket</Text>
                </Card>
              ) : (
                <Card style={styles.myTicketSVCard}>
                  <Text> Semua Ticket</Text>
                </Card>
              )}
            </TouchableHighlight>
            <TouchableHighlight
              underlayColor="white"
              onPress={() =>
                this.setState({
                  list: 'Kereta',
                })
              }>
              {list === 'Kereta' ? (
                <Card style={styles.myTicketSVCard2}>
                  <Text style={{color: 'white'}}>Kereta</Text>
                </Card>
              ) : (
                <Card style={styles.myTicketSVCard}>
                  <Text>Kereta</Text>
                </Card>
              )}
            </TouchableHighlight>
            <TouchableHighlight
              underlayColor="white"
              onPress={() =>
                this.setState({
                  list: 'Pesawat',
                })
              }>
              {list === 'Pesawat' ? (
                <Card style={styles.myTicketSVCard2}>
                  <Text style={{color: 'white'}}> Pesawat</Text>
                </Card>
              ) : (
                <Card style={styles.myTicketSVCard}>
                  <Text>Pesawat</Text>
                </Card>
              )}
            </TouchableHighlight>
          </ScrollView>
          <Ticket list={list} />
        </Content>
        <Footer>
          <Footers navigation={this.props.navigation} myTicket={true} />
        </Footer>
      </Container>
    );
  }
}
