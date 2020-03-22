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
  ListItem,
  Picker,
  Form,
} from 'native-base';

import {StyleSheet, Dimensions} from 'react-native';
import styles from '../styles/style';

import Icon from 'react-native-vector-icons/FontAwesome5';

export default class User extends React.Component {
  render() {
    return (
      <Container>
        <Header style={styles.header}>
          <Text style={styles.headerText}>MyTicket</Text>
        </Header>
        <Content padder>
          <Card>
            <CardItem cardBody style={styles.myTicketCardHeader}>
              <View cardBody style={styles.myTicketCardHeaderv1}>
                <Text style={styles.myTicketCardText}>Kereta</Text>
                <Text style={styles.myTicketCardText}>
                  Minggu, 29 Februari 2020
                </Text>
              </View>
              <View cardBody style={styles.myTicketCardHeaderv2}>
                <Text style={styles.myTicketCardStatus}>Approved</Text>
                <Text></Text>
              </View>
            </CardItem>
            <CardItem cardBody style={styles.myTicketCard}></CardItem>
            <CardItem cardBody style={styles.myTicketCard}>
              <View style={styles.myTicketCardView1}>
                <Icon name="train" size={30} />
              </View>
              <View style={styles.myTicketCardView2}>
                <Text style={styles.myTicketCardText}>Jakarta</Text>
              </View>
              <View style={styles.myTicketCardView3}>
                <Icon name="chevron-right" size={10} />
              </View>
              <View style={styles.myTicketCardView4}>
                <Text style={styles.myTicketCardText}>Bekasi</Text>
              </View>
              <View style={styles.myTicketCardView5}>
                <Button small rounded style={styles.myTicketCardButton}>
                  <Icon name="chevron-right" size={10} color="white" />
                </Button>
              </View>
            </CardItem>
          </Card>


          <Card>
            <CardItem cardBody style={styles.myTicketCardHeader}>
              <View cardBody style={styles.myTicketCardHeaderv1}>
                <Text style={styles.myTicketCardText}>Kereta</Text>
                <Text style={styles.myTicketCardText}>
                  Minggu, 29 Februari 2020
                </Text>
              </View>
              <View cardBody style={styles.myTicketCardHeaderv2}>
                <Text style={styles.myTicketCardStatus}>Approved</Text>
                <Text></Text>
              </View>
            </CardItem>
            <CardItem cardBody style={styles.myTicketCard}></CardItem>
            <CardItem cardBody style={styles.myTicketCard}>
              <View style={styles.myTicketCardView1}>
                <Icon name="train" size={30} />
              </View>
              <View style={styles.myTicketCardView2}>
                <Text style={styles.myTicketCardText}>Jakarta</Text>
              </View>
              <View style={styles.myTicketCardView3}>
                <Icon name="chevron-right" size={10} />
              </View>
              <View style={styles.myTicketCardView4}>
                <Text style={styles.myTicketCardText}>Bali</Text>
              </View>
              <View style={styles.myTicketCardView5}>
                <Button small rounded style={styles.myTicketCardButton}>
                  <Icon name="chevron-right" size={10} color="white" />
                </Button>
              </View>
            </CardItem>
          </Card>


          <Card>
            <CardItem cardBody style={styles.myTicketCardHeader}>
              <View cardBody style={styles.myTicketCardHeaderv1}>
                <Text style={styles.myTicketCardText}>Kereta</Text>
                <Text style={styles.myTicketCardText}>
                  Minggu, 29 Februari 2020
                </Text>
              </View>
              <View cardBody style={styles.myTicketCardHeaderv2}>
                <Text style={styles.myTicketCardStatus2}>Pending</Text>
                <Text></Text>
              </View>
            </CardItem>
            <CardItem cardBody style={styles.myTicketCard}></CardItem>
            <CardItem cardBody style={styles.myTicketCard}>
              <View style={styles.myTicketCardView1}>
                <Icon name="train" size={30} />
              </View>
              <View style={styles.myTicketCardView2}>
                <Text style={styles.myTicketCardText}>Jakarta</Text>
              </View>
              <View style={styles.myTicketCardView3}>
                <Icon name="chevron-right" size={10} />
              </View>
              <View style={styles.myTicketCardView4}>
                <Text style={styles.myTicketCardText}>Hogwarts</Text>
              </View>
              <View style={styles.myTicketCardView5}>
                <Button small rounded style={styles.myTicketCardButton}>
                  <Icon name="chevron-right" size={10} color="white" />
                </Button>
              </View>
            </CardItem>
          </Card>
        </Content>
      </Container>
    );
  }
}
