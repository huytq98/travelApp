import React, {useState} from 'react';
import {
  FlatList,
  Image,
  ImageBackground,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
// import {useNavigation} from '@react-navigation/native';
const Separator = () => <View style={styles.separator} />;
const MyTrips = ({navigation}) => {
  // const navigation = useNavigation();
  const gotoTrip = () => {
    navigation.navigate('tripDetails');
  };
  // const navigation = useNavigation();
  const goBack = () => navigation.goBack();
  const denmarkImage = {
    uri:
      'https://images.pexels.com/photos/901944/pexels-photo-901944.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500',
  };
  const madridImage = {
    uri:
      'https://images.pexels.com/photos/2533092/pexels-photo-2533092.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500',
  };
  const marrakeshImage = {
    uri:
      'https://images.pexels.com/photos/716421/pexels-photo-716421.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500',
  };
  // Friends
  const [friends, setFriends] = useState([
    {
      image: {
        uri:
          'https://img.pngio.com/circle-gray-circulo-png-forma-sticker-by-boy-gray-circle-png-1024_1024.png',
      },
      key: '1',
    },
    {
      image: {
        uri:
          'https://img.pngio.com/circle-gray-circulo-png-forma-sticker-by-boy-gray-circle-png-1024_1024.png',
      },
      key: '2',
    },
    {
      image: {
        uri:
          'https://img.pngio.com/circle-gray-circulo-png-forma-sticker-by-boy-gray-circle-png-1024_1024.png',
      },
      key: '3',
    },
    {
      image: {
        uri:
          'https://img.pngio.com/circle-gray-circulo-png-forma-sticker-by-boy-gray-circle-png-1024_1024.png',
      },
      key: '4',
    },
    {
      image: {
        uri:
          'https://img.pngio.com/circle-gray-circulo-png-forma-sticker-by-boy-gray-circle-png-1024_1024.png',
      },
      key: '5',
    },
  ]);
  return (
    <View style={styles.container}>
      <StatusBar barStyle="dark-content" backgroundColor="white" />
      {/*My trips*/}
      <View style={styles.textVertical}>
        <Text style={styles.textBold}>My Trips</Text>
        <TouchableOpacity onPress={goBack}>
          <Icon name="arrow-back-outline" size={35} />
        </TouchableOpacity>
      </View>
      {/*Copenhagen, Denmark*/}
      <ScrollView>
        <View style={styles.locationContainer}>
          <Icon name="location" size={25} />
          <Text style={styles.textLocation}>Copenhagen, Denmark</Text>
        </View>
        {/*image*/}
        <View style={styles.paddingHori}>
          <TouchableOpacity onPress={gotoTrip}>
            <ImageBackground
              style={styles.image}
              source={denmarkImage}
              imageStyle={styles.imageBorderRadius}>
              <View style={styles.darkOverlay} />
              <Icon
                style={styles.dot}
                name="ellipsis-horizontal"
                size={30}
                color="white"
              />
              <View style={styles.textImagePadding}>
                <Text style={styles.textImage}>My First Visit</Text>
                <Text style={styles.textImage}>to Copenhagen</Text>
                <Text style={styles.textImageSmall}>Copenhagen, Denmark</Text>
                <Text style={styles.textImageSmall}>2019/12/01</Text>
              </View>
            </ImageBackground>
          </TouchableOpacity>
          <View style={styles.friendsPadding}>
            <FlatList
              horizontal={true}
              data={friends}
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
            <Icon style={styles.plus} name="add-circle" size={35} />
          </View>
        </View>
        <Separator />
        {/*Madrid Spain*/}
        <View style={styles.locationContainer}>
          <Icon name="location" size={25} />
          <Text style={styles.textLocation}>Madrid, Spain</Text>
        </View>
        {/*image*/}
        <View style={styles.paddingHori}>
          <ImageBackground
            style={styles.image}
            source={madridImage}
            imageStyle={styles.imageBorderRadius}>
            <View style={styles.darkOverlay} />
            <Icon
              style={styles.dot}
              name="ellipsis-horizontal"
              size={30}
              color="white"
            />
            <View style={styles.textImagePadding}>
              <Text style={styles.textImage}>Best of Madrid</Text>
              <Text style={styles.textImage}>in Two Day</Text>
              <Text style={styles.textImageSmall}>Madrid, Spain</Text>
              <Text style={styles.textImageSmall}>2019/12/01</Text>
            </View>
          </ImageBackground>
          <View style={styles.friendsPadding}>
            <FlatList
              horizontal={true}
              data={friends}
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
            <Icon style={styles.plus} name="add-circle" size={35} />
          </View>
        </View>
        <Separator />
        {/*Marrakesh, Morocco*/}
        <View style={styles.locationContainer}>
          <Icon name="location" size={25} />
          <Text style={styles.textLocation}>Marrakesh, Morocco</Text>
        </View>
        {/*image*/}
        <View style={styles.paddingHori}>
          <ImageBackground
            style={styles.image}
            source={marrakeshImage}
            imageStyle={styles.imageBorderRadius}>
            <View style={styles.darkOverlay} />
            <Icon
              style={styles.dot}
              name="ellipsis-horizontal"
              size={30}
              color="white"
            />
            <View style={styles.textImagePadding}>
              <Text style={styles.textImage}>Spending time</Text>
              <Text style={styles.textImage}>in Marrakesh</Text>
              <Text style={styles.textImageSmall}>Marrakesh, Morocco</Text>
              <Text style={styles.textImageSmall}>2019/12/01</Text>
            </View>
          </ImageBackground>
          <View style={styles.friendsPadding}>
            <FlatList
              horizontal={true}
              data={friends}
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
            <Icon style={styles.plus} name="add-circle" size={35} />
          </View>
        </View>
        <Separator />
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
  friendsPadding: {
    flexDirection: 'row',
    paddingTop: 10,
  },
  textBold: {
    fontSize: 30,
    fontWeight: 'bold',
  },
  paddingHori: {
    paddingHorizontal: 30,
    paddingVertical: 10,
  },
  plus: {
    alignSelf: 'center',
  },
  locationContainer: {
    flexDirection: 'row',
    paddingLeft: 30,
  },
  image: {
    width: 330,
    height: 190,
  },
  imageBorderRadius: {
    borderRadius: 7,
  },
  textLocation: {
    fontWeight: 'bold',
    fontSize: 19,
    alignSelf: 'center',
  },
  dot: {
    paddingLeft: 15,
    paddingTop: 5,
  },
  textImage: {
    fontFamily: 'FredokaOne-Regular',
    fontSize: 22,
    fontWeight: 'bold',
    color: 'white',
  },
  imageFriends: {
    width: 50,
    height: 50,
    marginRight: 10,
    borderRadius: 50,
    opacity: 0.3,
  },
  textImageSmall: {
    fontFamily: 'FredokaOne-Regular',
    fontSize: 13,
    fontWeight: 'bold',
    color: 'white',
  },
  textImagePadding: {
    paddingLeft: 15,
    paddingTop: 40,
  },
  separator: {
    marginVertical: 10,
    borderBottomColor: '#737373',
    borderBottomWidth: StyleSheet.hairlineWidth,
  },
  darkOverlay: {
    position: 'absolute',
    top: 0,
    right: 0,
    borderRadius: 7,
    left: 0,
    height: 190,
    opacity: 0.2,
    backgroundColor: '#000',
  },
});
export default MyTrips;
