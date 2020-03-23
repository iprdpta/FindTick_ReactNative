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
  Right,
} from 'native-base';

import {Image} from 'react-native';

import styles from '../styles/style';
import Footers from '../components/Footer';

import Icon from 'react-native-vector-icons/FontAwesome5';

export class Ticket extends React.Component {
  constructor() {
    super();
    this.state = {
      data: [
        {
          tipe: 'Kereta',
          Tanggal: '29-02-2020',
          hari: 'Minggu',
          status: 'Approved',
          asal: 'Jakarta',
          tujuan: 'Hogwarts',
          harga: 1000000,
        },
        {
          tipe: 'Pesawat',
          Tanggal: '29-02-2022',
          hari: 'Sabtu',
          status: 'Pending',
          asal: 'Jakarta',
          tujuan: 'Wuhan',
          harga: 1000000,
        },
        {
          tipe: 'Kereta',
          Tanggal: '29-02-2020',
          hari: 'Minggu',
          status: 'Declined',
          asal: 'Jakarta',
          tujuan: 'Segitiga Bermuda',
          harga: 1000000,
        },
        {
          tipe: 'Pesawat',
          Tanggal: '30-02-2022',
          hari: 'Senin',
          status: 'Pending',
          asal: 'Jakarta',
          tujuan: 'Bali',
          harga: 1000000,
        },
      ],
      kereta: [
        {
          tipe: 'Kereta',
          Tanggal: '29-02-2020',
          hari: 'Minggu',
          status: 'Approved',
          asal: 'Jakarta',
          tujuan: 'Hogwarts',
          harga: 1000000,
        },
        {
          tipe: 'Kereta',
          Tanggal: '29-02-2020',
          hari: 'Minggu',
          status: 'Declined',
          asal: 'Jakarta',
          tujuan: 'Segitiga Bermuda',
          harga: 1000000,
        },
      ],
      pesawat: [
        {
          tipe: 'Pesawat',
          Tanggal: '29-02-2022',
          hari: 'Sabtu',
          status: 'Pending',
          asal: 'Jakarta',
          tujuan: 'Wuhan',
          harga: 1000000,
        },
        {
          tipe: 'Pesawat',
          Tanggal: '30-02-2022',
          hari: 'Senin',
          status: 'Pending',
          asal: 'Jakarta',
          tujuan: 'Bali',
          harga: 1000000,
        },
      ],
    };
  }
  render() {
    const {list} = this.props;
    return (
      <View>
        {list === 'Semua Tiket' ? (
          <View>
            {this.state.data.map((item, index) => (
              <Card key={index}>
                <CardItem cardBody style={styles.myTicketCardHeader}>
                  <View cardBody style={styles.myTicketCardHeaderv1}>
                    <Text style={styles.myTicketCardTextx}>{item.tipe}</Text>
                    <Text style={styles.myTicketCardText}>
                      {item.hari}, {item.Tanggal}
                    </Text>
                  </View>
                  <View cardBody style={styles.myTicketCardHeaderv2}>
                    <Right>
                      <Text style={{fontSize: 15, color: 'orange'}}>
                        Rp{item.harga}
                      </Text>
                      {item.status === 'Approved' ? (
                        <Text style={styles.myTicketCardStatus}>
                          {item.status}
                        </Text>
                      ) : item.status === 'Pending' ? (
                        <Text style={styles.myTicketCardStatus2}>
                          {item.status}
                        </Text>
                      ) : item.status === 'Declined' ? (
                        <Text style={styles.myTicketCardStatus3}>
                          {item.status}
                        </Text>
                      ) : null}
                    </Right>
                  </View>
                </CardItem>
                <CardItem cardBody style={styles.myTicketCard}></CardItem>
                <CardItem cardBody style={styles.myTicketCard}>
                  <View style={styles.myTicketCardView1}>
                    {item.tipe === 'Kereta' ? (
                      <Image
                        source={require('../assets/train.png')}
                        style={styles.cardImages}
                      />
                    ) : item.tipe === 'Pesawat' ? (
                      <Image
                        source={require('../assets/plane.png')}
                        style={styles.cardImages}
                      />
                    ) : null}
                  </View>
                  <View style={styles.myTicketCardView2}>
                    <Text style={styles.myTicketCardText}>{item.asal}</Text>
                  </View>
                  <View style={styles.myTicketCardView3}>
                    <Icon name="chevron-right" size={10} />
                  </View>
                  <View style={styles.myTicketCardView4}>
                    <Text style={styles.myTicketCardText}>{item.tujuan}</Text>
                  </View>
                  <View style={styles.myTicketCardView5}>
                    <Button small rounded style={styles.myTicketCardButton}>
                      <Icon name="chevron-right" size={10} color="white" />
                    </Button>
                  </View>
                </CardItem>
              </Card>
            ))}
          </View>
        ) : list === 'Kereta' ? (
          <View>
            {this.state.kereta.map((item, index) => (
              <Card key={index}>
                <CardItem cardBody style={styles.myTicketCardHeader}>
                  <View cardBody style={styles.myTicketCardHeaderv1}>
                    <Text style={styles.myTicketCardTextx}>{item.tipe}</Text>
                    <Text style={styles.myTicketCardText}>
                      {item.hari}, {item.Tanggal}
                    </Text>
                  </View>
                  <View cardBody style={styles.myTicketCardHeaderv2}>
                    <Right>
                      <Text style={{fontSize: 15, color: 'orange'}}>
                        Rp{item.harga}
                      </Text>
                      {item.status === 'Approved' ? (
                        <Text style={styles.myTicketCardStatus}>
                          {item.status}
                        </Text>
                      ) : item.status === 'Pending' ? (
                        <Text style={styles.myTicketCardStatus2}>
                          {item.status}
                        </Text>
                      ) : item.status === 'Declined' ? (
                        <Text style={styles.myTicketCardStatus3}>
                          {item.status}
                        </Text>
                      ) : null}
                    </Right>
                  </View>
                </CardItem>
                <CardItem cardBody style={styles.myTicketCard}></CardItem>
                <CardItem cardBody style={styles.myTicketCard}>
                  <View style={styles.myTicketCardView1}>
                    {item.tipe === 'Kereta' ? (
                      <Image
                        source={require('../assets/train.png')}
                        style={styles.cardImages}
                      />
                    ) : item.tipe === 'Pesawat' ? (
                      <Image
                        source={require('../assets/plane.png')}
                        style={styles.cardImages}
                      />
                    ) : null}
                  </View>
                  <View style={styles.myTicketCardView2}>
                    <Text style={styles.myTicketCardText}>{item.asal}</Text>
                  </View>
                  <View style={styles.myTicketCardView3}>
                    <Icon name="chevron-right" size={10} />
                  </View>
                  <View style={styles.myTicketCardView4}>
                    <Text style={styles.myTicketCardText}>{item.tujuan}</Text>
                  </View>
                  <View style={styles.myTicketCardView5}>
                    <Button small rounded style={styles.myTicketCardButton}>
                      <Icon name="chevron-right" size={10} color="white" />
                    </Button>
                  </View>
                </CardItem>
              </Card>
            ))}
          </View>
        ) : list === 'Pesawat' ? (
          <View>
            {this.state.pesawat.map((item, index) => (
              <Card key={index}>
                <CardItem cardBody style={styles.myTicketCardHeader}>
                  <View cardBody style={styles.myTicketCardHeaderv1}>
                    <Text style={styles.myTicketCardTextx}>{item.tipe}</Text>
                    <Text style={styles.myTicketCardText}>
                      {item.hari}, {item.Tanggal}
                    </Text>
                  </View>
                  <View cardBody style={styles.myTicketCardHeaderv2}>
                    <Right>
                      <Text style={{fontSize: 15, color: 'orange'}}>
                        Rp{item.harga}
                      </Text>
                      {item.status === 'Approved' ? (
                        <Text style={styles.myTicketCardStatus}>
                          {item.status}
                        </Text>
                      ) : item.status === 'Pending' ? (
                        <Text style={styles.myTicketCardStatus2}>
                          {item.status}
                        </Text>
                      ) : item.status === 'Declined' ? (
                        <Text style={styles.myTicketCardStatus3}>
                          {item.status}
                        </Text>
                      ) : null}
                    </Right>
                  </View>
                </CardItem>
                <CardItem cardBody style={styles.myTicketCard}></CardItem>
                <CardItem cardBody style={styles.myTicketCard}>
                  <View style={styles.myTicketCardView1}>
                    {item.tipe === 'Kereta' ? (
                      <Image
                        source={require('../assets/train.png')}
                        style={styles.cardImages}
                      />
                    ) : item.tipe === 'Pesawat' ? (
                      <Image
                        source={require('../assets/plane.png')}
                        style={styles.cardImages}
                      />
                    ) : null}
                  </View>
                  <View style={styles.myTicketCardView2}>
                    <Text style={styles.myTicketCardText}>{item.asal}</Text>
                  </View>
                  <View style={styles.myTicketCardView3}>
                    <Icon name="chevron-right" size={10} />
                  </View>
                  <View style={styles.myTicketCardView4}>
                    <Text style={styles.myTicketCardText}>{item.tujuan}</Text>
                  </View>
                  <View style={styles.myTicketCardView5}>
                    <Button small rounded style={styles.myTicketCardButton}>
                      <Icon name="chevron-right" size={10} color="white" />
                    </Button>
                  </View>
                </CardItem>
              </Card>
            ))}
          </View>
        ) : null}
      </View>
    );
  }
}
