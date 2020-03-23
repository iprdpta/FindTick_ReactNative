import React from 'react';

import {View, Card, Text} from 'native-base';
import {Dimensions, Image, ScrollView, TouchableHighlight} from 'react-native';

import styles from '../styles/style';

const {height, width} = Dimensions.get('window');

export class Promo extends React.Component {
  constructor() {
    super();
    this.state = {
      data: [
        {
          pics:
            'https://cdn2.tstatic.net/tribunnews/foto/bank/images/ilustrasi-promo-tiket-kereta-api-di-travelokacom-tanggal-1-3-april-2019.jpg',
        },
        {
          pics:
            'https://static.tiket.photos/image/upload/v1580479137/promo_list/2020/01/31/279aa100-a089-4ead-97e7-ebbd155427cf-1580479133672-02f8943b70caf017e27eb2278497a0e5.jpg',
        },
        {
          pics:
            'https://giladiskon-uploads.s3-ap-southeast-1.amazonaws.com/images/deals/photo%20-%201509944592.png',
        },
        {
          pics:
            'https://static.tiket.photos/image/upload/v1584267558/home/2020/03/15/fb2f4e95-c776-4020-a518-72b6747344b2-1584267556984-c924537ec639cf5b331054d10df2c1a3.jpg',
        },
      ],
    };
  }
  render() {
    return (
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        {this.state.data.map((item, index) => (
          <TouchableHighlight
            key={index}
            onPress={() => {}}
            underlayColor="white">
            <View>
              <Card style={styles.promoCard}>
                <Image
                  source={{
                    uri: item.pics,
                  }}
                  style={{flex: 1, resizeMode: 'cover', borderRadius:10}}
                />
              </Card>
            </View>
          </TouchableHighlight>
        ))}
      </ScrollView>
    );
  }
}

export class Wisata extends React.Component {
  constructor() {
    super();
    this.state = {
      data: [
        {
          name: 'Bali',
          pics:
            'https://specials-images.forbesimg.com/imageserve/675172642/960x0.jpg?fit=scale',
        },
        {
          name: 'Pulau Seribu',
          pics:
            'https://awsimages.detik.net.id/customthumb/2019/10/16/1025/img_20191016163543_5da6e46f0b34a.jpg?w=600&q=90',
        },
        {
          name: 'Raja Ampat',
          pics:
            'https://anekatempatwisata.com/wp-content/uploads/2014/10/Raja-Ampat.jpg',
        },
        {
          name: 'Pulau Komodo',
          pics:
            'https://anekatempatwisata.com/wp-content/uploads/2014/10/Pantai-Pink-Pulau-Komodo-300x200.jpg',
        },
      ],
    };
  }
  render() {
    return (
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        {this.state.data.map((item, index) => (
          <TouchableHighlight
            key={index}
            onPress={() => {}}
            underlayColor="white">
            <View>
              <Card style={styles.recCard}>
                <Image
                  source={{
                    uri: item.pics,
                  }}
                  style={{flex: 1, resizeMode: 'cover', borderRadius:10}}
                />
                <Text style={styles.textRec}>{item.name}</Text>
              </Card>
            </View>
          </TouchableHighlight>
        ))}
      </ScrollView>
    );
  }
}
