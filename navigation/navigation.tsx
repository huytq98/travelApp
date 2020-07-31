import React from 'react';
import 'react-native-gesture-handler';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import ExploreCities from '../screen/explore-cities';
import MyTrips from '../screen/my-trips';
import TripDetails from '../screen/trip-details';

const AppStack = createStackNavigator();
export default function Navigator({navigation}) {
  return (
    <NavigationContainer>
      <AppStack.Navigator screenOptions={{headerShown: false}}>
        {/*<AppStack.Screen name="Home" component={HomeScreen} />*/}
        <AppStack.Screen name="exploreCities" component={ExploreCities} />
        <AppStack.Screen name="myTrips" component={MyTrips} />
        <AppStack.Screen name="tripDetails" component={TripDetails} />
      </AppStack.Navigator>
    </NavigationContainer>
  );
}
