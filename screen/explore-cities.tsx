import React, {useState, useEffect} from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  FlatList,
  ScrollView,
  TextInput,
  StatusBar,
  Image,
} from 'react-native';

import Icon from 'react-native-vector-icons/Ionicons';
const axios = require('axios').default;

const ExploreCities = ({navigation}) => {
  const [popularCities, setPopularCities] = useState([]);
  const [trendingPlace, setTrendingPlace] = useState([]);
  const [friends, setFriends] = useState([]);

  useEffect(() => {
    axios
      .get(
        'https://gist.githubusercontent.com/huytq98/7853a61ce83dde956ef5d619d6349665/raw/4a2dd4d3c9f01cfa44b65cf7b48aa73f20865cbb/travelApp.json',
      )
      .then(({data}) => {
        setPopularCities(data.popularCities);
        setTrendingPlace(data.trendingPlace);
        setFriends(data.friends);
      })
      .catch((error) => console.error(error));
  }, []);
  return (
    <View style={styles.container}>
      <StatusBar barStyle="dark-content" backgroundColor="white" />
      <View style={styles.textVertical}>
        <Text style={styles.textBold}>Explore Cities</Text>
        <TouchableOpacity onPress={() => navigation.navigate('myTrips')}>
          <Icon name="menu-outline" size={40} />
        </TouchableOpacity>
      </View>
      {/*TextInput*/}
      <View>
        <TextInput placeholder="Search" style={styles.textInput} />
        <Icon style={styles.micIcon} name="mic" size={30} />
        <Icon style={styles.searchIcon} name="search-outline" size={30} />
      </View>

      {/*Popular cities, trending places, Travel with friend*/}
      <ScrollView>
        {/*Popular Cities*/}
        <View style={styles.textVertical}>
          <Text style={styles.textBold2}>Popular Cities</Text>
          <TouchableOpacity>
            <Text style={styles.textOpacity}>View All</Text>
          </TouchableOpacity>
        </View>

        <View>
          <FlatList
            style={styles.paddingFlat}
            horizontal={true}
            data={popularCities}
            keyExtractor={(item, index) => {
              return index.toString();
            }}
            renderItem={({item}) => {
              return (
                <View>
                  <TouchableOpacity>
                    <Image source={item.image} style={styles.imageCities} />
                    <Text style={styles.textImage}>{item.title}</Text>
                    <Text style={styles.textImage2}>{item.text}</Text>
                  </TouchableOpacity>
                </View>
              );
            }}
          />
        </View>
        {/*Trending Places*/}
        <View style={styles.textVertical}>
          <Text style={styles.textBold2}>Trending Places</Text>
          <TouchableOpacity>
            <Text style={styles.textOpacity}>View All</Text>
          </TouchableOpacity>
        </View>
        <View>
          <FlatList
            style={styles.paddingFlat}
            horizontal={true}
            data={trendingPlace}
            keyExtractor={(item, index) => {
              return index.toString();
            }}
            renderItem={({item}) => {
              return (
                <View>
                  <TouchableOpacity>
                    <Image source={item.image} style={styles.imageTrending} />
                  </TouchableOpacity>
                </View>
              );
            }}
          />
        </View>
        {/*Travel with friends*/}
        <View style={styles.textVertical}>
          <Text style={styles.textBold2}>Travel with friends</Text>
          <TouchableOpacity>
            <Text style={styles.textOpacity}>View All</Text>
          </TouchableOpacity>
        </View>
        <View>
          <FlatList
            style={styles.paddingFlat}
            horizontal={true}
            data={friends}
            keyExtractor={(item, index) => {
              return index.toString();
            }}
            renderItem={({item}) => {
              return (
                <View>
                  <TouchableOpacity>
                    <Image source={item.image} style={styles.imageFriends} />
                  </TouchableOpacity>
                </View>
              );
            }}
          />
        </View>
      </ScrollView>
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
  micIcon: {
    position: 'absolute',
    opacity: 0.2,
    right: 45,
    top: 5,
  },
  searchIcon: {
    position: 'absolute',
    opacity: 0.2,
    top: 5,
    left: 50,
  },
  textInput: {
    backgroundColor: 'rgba(0,0,0,0.05)',
    borderRadius: 25,
    width: 320,
    height: 43,
    fontSize: 20,
    paddingHorizontal: 45,
    alignSelf: 'center',
  },
  textBold: {
    fontFamily: 'segoeui',
    fontSize: 30,
    fontWeight: 'bold',
  },
  textBold2: {
    fontSize: 25,
    fontWeight: 'bold',
    color: '#696969',
  },
  textOpacity: {
    opacity: 0.5,
  },
  imageCities: {
    width: 160,
    height: 245,
    marginRight: 14,
    borderRadius: 7,
  },
  imageFriends: {
    width: 55,
    height: 55,
    marginRight: 14,
    borderRadius: 50,
    opacity: 0.3,
  },
  paddingFlat: {
    marginLeft: 30,
  },
  imageTrending: {
    width: 150,
    height: 77,
    marginRight: 14,
    borderRadius: 7,
  },
  textImage: {
    fontWeight: 'bold',
    paddingTop: 8,
    fontSize: 18,
  },
  textImage2: {
    opacity: 0.7,
    fontSize: 12,
    paddingTop: 0.05,
  },
});
export default ExploreCities;
