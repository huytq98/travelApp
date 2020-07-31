import React, {useEffect, useState} from 'react';
import {
  FlatList,
  Image,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
// import {useNavigation} from '@react-navigation/native';
import Icon from 'react-native-vector-icons/Ionicons';
import MapView from 'react-native-maps';
// const axios = require('axios').default;
const TripDetails = ({navigation}) => {
  const [images, setImage] = useState([
    {
      image: {
        uri:
          'https://images.pexels.com/photos/478544/pexels-photo-478544.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500',
      },
      key: '1',
    },
    {
      image: {
        uri:
          'https://images.pexels.com/photos/847483/pexels-photo-847483.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500',
      },
      key: '2',
    },
    {
      image: {
        uri:
          'https://images.pexels.com/photos/134392/pexels-photo-134392.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500',
      },
      key: '3',
    },
  ]);
  // const navigation = useNavigation();
  const goBack = () => navigation.goBack();
  return (
    <View style={styles.container}>
      <StatusBar barStyle="dark-content" backgroundColor="white" />
      {/*My trips*/}
      <View style={styles.textVertical}>
        <Text style={styles.textBold}>Trip Details</Text>
        <TouchableOpacity onPress={goBack}>
          <Icon name="arrow-back-outline" size={35} />
        </TouchableOpacity>
      </View>
      <View style={styles.paddingHori}>
        <ScrollView>
          <View>
            <Text style={styles.textBoldSmall}>Copenhagen, Denmark</Text>
            <FlatList
              style={{paddingVertical: 30}}
              horizontal={true}
              data={images}
              renderItem={({item}) => {
                return <Image source={item.image} style={styles.tripImage} />;
              }}
            />
          </View>
          <MapView
            initialRegion={{
              latitude: 37.78825,
              longitude: -122.4324,
              latitudeDelta: 0.0922,
              longitudeDelta: 0.0421,
            }}
          />
        </ScrollView>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  textVertical: {
    flexDirection: 'row',
    paddingHorizontal: 30,
    paddingVertical: 20,
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  tripImage: {
    width: 216,
    height: 129,
    marginRight: 10,
    borderRadius: 7,
  },
  paddingHori: {
    paddingHorizontal: 30,
  },
  textBold: {
    fontFamily: 'segoeui',
    fontSize: 30,
    fontWeight: 'bold',
  },
  textBoldSmall: {
    fontFamily: 'segoeui',
    fontSize: 20,
    fontWeight: 'bold',
  },
});
export default TripDetails;
