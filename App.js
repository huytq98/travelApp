/*
import React from 'react';
// import {Button, View, Text} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

// import file
import ExploreCities from './screen/explore-cities';
import TripDetails from './screen/trip-details';
import MyTrips from './screen/my-trips';
const Stack = createStackNavigator();
/!* function Home({navigation}) {
  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Text>Home Screen</Text>
      <Button
        title="Go to Details"
        onPress={() => navigation.navigate('Details')}
      />
    </View>
  );
}
function DetailsScreen({navigation}) {
  const goBack = () => navigation.goBack();
  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Text>Details Screen</Text>
      <Button title="Go back home" onPress={goBack} />
    </View>
  );
}*!/

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown: true}}>
        {/!*<Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Details" component={DetailsScreen} />*!/}
        <Stack.Screen name="Homes" component={ExploreCities} />
        <Stack.Screen name="myTrips" component={MyTrips} />
        <Stack.Screen name="tripDetails" component={TripDetails} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
export default App;
*/
