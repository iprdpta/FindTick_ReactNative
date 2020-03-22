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
    flex: 4,
    marginTop: 15,
    marginLeft: 20,
    fontSize: 20,
    fontFamily: 'JosefinSans-Regular',
    color: 'white',
  },
  findTick: {
    flex: 4,
    marginTop: 15,
    marginLeft: 20,
    fontSize: 20,
    fontWeight: 'bold',
    fontFamily: 'JosefinSans-Regular',
    color: 'white',
  },
  login: {
    flex: 1,
    marginTop: 20,
    fontSize: 15,
    fontFamily: 'JosefinSans-Regular',
    color: 'white',
  },
  tick: {
    fontSize: 20,
    fontWeight: 'normal',
    fontFamily: 'JosefinSans-Regular',
    color: 'white',
  },
  menuItem: {
    height: width / 3.5,
    width: width / 3.5,
    borderRadius: 5,
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    fontSize: 15,
    fontFamily: 'JosefinSans-Regular',
  },
  textx: {
    fontSize: 15,
    fontFamily: 'JosefinSans-Regular',
    marginBottom:20
  },
  textContainer: {
    marginBottom: 10,
    marginLeft: 20,
  },
  cardtext: {
    fontFamily: 'JosefinSans-Regular',
    marginTop: 5,
    fontSize: 12,
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
    fontFamily: 'JosefinSans-Regular',
    textAlign: 'center',
    marginBottom: 30,
  },
  formItem: {
    marginBottom: 20,
  },
  formInput: {
    fontSize: 15,
    fontFamily: 'JosefinSans-Regular',
  },
  formContainer: {
    padding: 50,
  },
  formText: {
    fontFamily: 'JosefinSans-Regular',
  },
  formButton: {
    marginTop: 20,
    height: 50,
    backgroundColor: '#3066be',
  },
  registerText: {
    fontSize: 15,
    fontFamily: 'JosefinSans-Regular',
    textAlign: 'center',
    marginBottom: 50,
  },
  registerTextx: {
    fontSize: 15,
    fontFamily: 'JosefinSans-Regular',
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
    marginTop: -120,
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
    fontFamily: 'JosefinSans-Regular',
  },
  userListText2: {
    fontSize: 15,
    fontFamily: 'JosefinSans-Regular',
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
    flex: 5,
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
  myTicketCardText: {
    fontSize: 15,
    fontFamily: 'JosefinSans-Regular',
  },
  myTicketCardView5: {
    flex: 1,
  },
  myTicketCardButton: {
    backgroundColor: '#3066be',
    justifyContent: 'center',
  },

  myTicketCardStatus: {
    fontFamily: 'JosefinSans-Regular',
    color: 'green',
  },
  myTicketCardStatus2: {
    fontFamily: 'JosefinSans-Regular',
    color: 'blue',
  },

  textRec: {
    fontFamily: 'JosefinSans-Regular',
    color: 'white',
    position: 'absolute',
    marginTop:5,
    marginLeft:5,
    fontSize:20
  },
});

export default styles;
