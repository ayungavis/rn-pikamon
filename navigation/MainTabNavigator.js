import React from 'react';
import { Platform, Image } from 'react-native';
import { createStackNavigator, createBottomTabNavigator } from 'react-navigation';

import TabBarIcon from '../components/TabBarIcon';
import HomeScreen from '../screens/HomeScreen';
import MapScreen from '../screens/MapScreen';
import AccountScreen from '../screens/AccountScreen';
import ExploreScreen from '../screens/ExploreScreen';
import DetailScreen from '../screens/DetailScreen';
import EditScreen from '../screens/EditScreen';
import AddScreen from '../screens/AddScreen';
import LoginScreen from '../screens/LoginScreen';
// import RegisterScreen from '../screens/RegisterScreen';

const HomeStack = createStackNavigator({
  Home: HomeScreen,
});

HomeStack.navigationOptions = {
  tabBarLabel: 'Home',
  tabBarIcon: () => (
    <Image
      source={require('../assets/images/icons/home.png')}
      fadeDuration={0}
      style={{width: 25, height: 25}}
    />
  ),
};

const MapStack = createStackNavigator({
  Links: MapScreen,
});

MapStack.navigationOptions = {
  tabBarLabel: 'Map',
  tabBarIcon: ({ focused }) => (
    <Image
      source={require('../assets/images/icons/map.png')}
      fadeDuration={0}
      style={{width: 25, height: 25}}
    />
  ),
};

const AccountStack = createStackNavigator({
  Settings: AccountScreen,
});

AccountStack.navigationOptions = {
  tabBarLabel: 'Account',
  tabBarIcon: ({ focused }) => (
    <Image
      source={require('../assets/images/icons/user.png')}
      fadeDuration={0}
      style={{width: 25, height: 25}}
    />
  ),
};

// const ExploreStack = createStackNavigator({
// 	Explore: ExploreScreen,
// })

// ExploreStack.navigationOptions = {
// 	tabBarLabel: 'Explore',
// 	tabBarIcon: ({ focused }) => (
// 		<Image
//       source={require('../assets/images/icons/explore.png')}
//       fadeDuration={0}
//       style={{width: 25, height: 25}}
//     />
// 	),
// }

const BottomTabNavigator =  createBottomTabNavigator({
  HomeStack,
  // ExploreStack,
  MapStack,
  AccountStack,
});

export default createStackNavigator({
	Home: {
		screen: BottomTabNavigator,
		navigationOptions: {
			header: null
		}
	},
	Detail: { screen: DetailScreen },
	Edit: { screen: EditScreen },
	Add: { screen: AddScreen },
	Login: { screen: LoginScreen },
	// Register: { screen: RegisterScreen },
});
