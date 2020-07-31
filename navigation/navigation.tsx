import React from 'react';
import 'react-native-gesture-handler';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import ExploreCities from '../screen/explore-cities';
import MyTrips from '../screen/my-trips';
import TripDetails from '../screen/trip-details';

/*function DetailsScreen() {r
  const navigation = useNavigation();
  const goBack = () => navigation.goBack();
  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Text>Details Screen</Text>
      <Button
        title="Go back Home"
        onPress={() => goBack()}
      />
    </View>
  );
}*/
const AppStack = createStackNavigator();
export default function Navigator({navigation}) {
  <ExploreCities />;
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
