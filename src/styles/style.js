import React from 'react';
import {
  Dimensions,
  StyleSheet,
  Image,
  FlatList,
  TouchableHighlight,
} from 'react-native';
import {Textarea} from 'native-base';
const {height, width} = Dimensions.get('window');
const styles = StyleSheet.create({
  header: {
    display: 'flex',
    flexDirection: 'row',
    backgroundColor: '#3066be',
    width: '100%',
  },
  headerText: {
    flex: 5,
    marginTop: 19,
    marginLeft: 10,
    fontSize: 17,
    fontFamily: 'Lato-Regular',
    color: 'white',
    fontWeight: 'bold',
  },
  findTick: {
    flex: 4,
    marginTop: 15,
    marginLeft: 10,
    fontSize: 20,
    fontWeight: 'bold',
    fontFamily: 'Lato-Regular',
    color: 'white',
  },
  login: {
    flex: 1,
    marginTop: 20,
    marginRight: 10,
    fontWeight: 'bold',
    fontSize: 15,
    fontFamily: 'Lato-Regular',
    color: 'white',
  },
  tick: {
    fontSize: 20,
    fontWeight: 'normal',
    fontFamily: 'Lato-Regular',
    color: 'white',
  },
  coinContainer: {
    display: 'flex',
    flex: 1.3,
    flexDirection: 'row',
    width: '100%',
    height: '100%',
  },
  coin: {
    width: 18,
    height: 18,
  },
  coinText: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 15,
    fontFamily: 'Lato-Regular',
  },
  menuItem: {
    height: width / 5,
    width: width / 5,
    borderRadius: 5,
    marginLeft: 5,
    marginRight: 5,
    alignItems: 'center',
    justifyContent: 'center',
  },
  cardImages: {
    width: 30,
    height: 30,
  },
  text: {
    fontSize: 15,
    fontFamily: 'Lato-Regular',
    color: 'white',
  },
  textx: {
    fontSize: 18,
    fontFamily: 'Lato-Regular',
    fontWeight: 'bold',
  },
  textxx: {
    fontSize: 15,
    fontFamily: 'Lato-Regular',
    color: 'grey',
  },
  textContainer: {
    padding: 15,
    marginTop: -230,
  },
  cardtext: {
    fontFamily: 'Lato-Regular',
    marginTop: 5,
    fontSize: 12,
    fontWeight: 'bold',
  },
  menuItemx: {
    borderRadius: 5,
    minHeight: 50,
    padding: 5,
  },
  footerIcon: {
    color: 'white',
  },
  footerIcon2: {
    color: 'white',
    opacity: 0.5,
  },

  loginText: {
    fontSize: 30,
    fontFamily: 'Lato-Regular',
    textAlign: 'center',
    marginBottom: 30,
  },
  formItem: {
    marginBottom: 20,
  },
  formInput: {
    fontSize: 15,
    fontFamily: 'Lato-Regular',
  },
  formContainer: {
    padding: 50,
  },
  formText: {
    fontFamily: 'Lato-Regular',
  },
  formButton: {
    marginTop: 20,
    height: 50,
    backgroundColor: '#3066be',
  },
  registerText: {
    fontSize: 15,
    fontFamily: 'Lato-Regular',
    textAlign: 'center',
    marginBottom: 50,
  },
  registerTextx: {
    fontSize: 15,
    fontFamily: 'Lato-Regular',
    textAlign: 'center',
    color: '#3066be',
  },
  formRadio: {
    display: 'flex',
    flexDirection: 'row',
  },
  formRadioText: {
    marginLeft: 5,
    fontSize: 12,
  },
  formRadioButt: {
    flex: 1,
  },

  cardView: {
    marginTop: -150,
    padding: 25,
  },
  cardItemHeader: {
    display: 'flex',
  },
  cardItemHeaderView1: {
    flex: 11,
  },
  cardItemHeaderView2: {
    flex: 1,
  },

  userListText: {
    fontSize: 20,
    fontWeight: 'bold',
    fontFamily: 'Lato-Regular',
  },
  userListText2: {
    fontSize: 15,
    fontFamily: 'Lato-Regular',
  },
  userListText3: {
    fontSize: 15,
    fontWeight: 'bold',
  },
  userListText4: {
    fontSize: 15,
    color: 'grey',
    fontWeight: 'normal',
  },
  userListImage: {
    width: 30,
    height: 30,
  },
  myTicketSVCard: {
    padding: 10,
    marginLeft: 5,
    borderRadius: 5,
  },
  myTicketSVCard2: {
    padding: 10,
    marginLeft: 5,
    backgroundColor: '#3066be',
    borderRadius: 5,
  },
  myTicketCardHeader: {
    display: 'flex',
    padding: 20,
    marginTop: 15,
  },
  myTicketCardHeaderv1: {
    flex: 15,
  },
  myTicketCardHeaderv2: {
    flex: 10,
    marginRight: -20,
  },
  myTicketCard: {
    display: 'flex',
    padding: 20,
    marginBottom: 15,
  },
  myTicketCardView1: {
    flex: 1.5,
  },
  myTicketCardView2: {
    flex: 2,
  },
  myTicketCardView3: {
    flex: 0.5,
  },
  myTicketCardView4: {
    flex: 2,
  },
  myTicketCardTextx: {
    fontSize: 15,
    fontFamily: 'Lato-Regular',
    fontWeight: 'bold',
  },
  myTicketCardText: {
    fontSize: 15,
    fontFamily: 'Lato-Regular',
  },
  myTicketCardView5: {
    flex: 1,
  },
  myTicketCardButton: {
    backgroundColor: '#3066be',
    justifyContent: 'center',
  },

  myTicketCardStatus: {
    fontFamily: 'Lato-Regular',
    color: 'green',
  },
  myTicketCardStatus2: {
    fontFamily: 'Lato-Regular',
    color: 'blue',
  },
  myTicketCardStatus3: {
    fontFamily: 'Lato-Regular',
    color: 'red',
  },

  textRec: {
    fontFamily: 'Lato-Regular',
    color: 'white',
    position: 'absolute',
    marginTop: 10,
    marginLeft: 15,
    fontSize: 15,
    fontWeight: 'bold',
  },
  recCard: {
    width: 200,
    height: 150,
    marginLeft: 5,
    marginRight: 5,
    marginBottom: 20,
    borderRadius: 10,
  },
  promoCard: {
    width: 250,
    height: 150,
    marginLeft: 5,
    marginRight: 5,
    marginBottom: 20,
    borderRadius: 10,
  },

  searchCard: {
    marginTop: -150,
    padding: 20,
  },
  cardFormView: {
    display: 'flex',
    flexDirection: 'row',
  },
  cardFormViewx1: {
    flex: 1,
    justifyContent: 'center',
    padding: 10,
  },
  cardFormViewx2: {
    flex: 7,
  },
  cardFormViewx3: {
    flex: 0.1,
    justifyContent: 'center',
    padding: 10,
  },
  searchButton: {
    justifyContent: 'center',
    marginTop: 30,
    borderRadius: 5,
    backgroundColor: '#3066be',
  },
});

export default styles;
