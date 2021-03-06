import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import {
    Container,
    Header,
    Content,
    Card,
    CardItem,
    H1
} from 'native-base';
import moment from 'moment';


const User = ({ details }) => {
    return (
      <Card style={styles.card}>
        <CardItem cardBody style={styles.cardItem}>
          <Image
            sources={{
              uri: details.picture?.large,
              width: 150,
              height: 250,
            }}
            style={styles.image}
          />
        </CardItem>
        <CardItem style={styles.cardItem}>
          <H1 style={styles.text}>
            {details.name?.first}
            {details.name?.last}
          </H1>
        </CardItem>
        <CardItem bordered style={styles.cardItem}>
          <Text style={styles.text}>
            {details.cell}
           
          </Text>
        </CardItem>{' '}
        <CardItem style={styles.cardItem}>
          <Text style={{color: "#FFF"}}>
       
            
          </Text>
        </CardItem>
      </Card>
    );
};


export default User;

const styles = StyleSheet.create({
  card: {
    width: '90%',
    justifyContent: 'flex-start',
    alignItems: 'center',
    backgroundColor: '#4f8a8b',
    borderColor: '#4f8a8b',
    borderWidth: 2,
  },
  cardItem: {
    backgroundColor: '#4f8a8b',
  },
  image: {
    width: 150,
    height: 150,
    borderRadius: 150 / 2,
    overflow: 'hidden',
    borderWidth: 3,
    borderColor: '#fbd46d',
    marginTop: -50,
  },
  text: {
    color: '#eeeeee',
  },
});
  