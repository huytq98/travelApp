/**
 * @format
 */
import {AppRegistry} from 'react-native';
import navigation from './navigation/navigation';
import App from './App';
import MyTrips from './screen/my-trips';
import ExploreCities from './screen/explore-cities';
import TripDetails from './screen/trip-details';
import Navigator from './navigation/navigation';

import {name as appName} from './app.json';
/*import messaging from '@react-native-firebase/messaging';

// Register background handler
messaging().setBackgroundMessageHandler(async (remoteMessage) => {
  console.log('Message handled in the background!', remoteMessage);
});*/
AppRegistry.registerComponent(appName, () => Navigator);
