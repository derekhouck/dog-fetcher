import React from 'react';
import { Platform } from 'react-native';
import { createStackNavigator, createBottomTabNavigator } from 'react-navigation';

import TabBarIcon from '../components/TabBarIcon';
import HomeScreen from '../screens/HomeScreen';
import FavoritesScreen from '../screens/FavoritesScreen';
import SettingsScreen from '../screens/SettingsScreen';
import SingleFavoriteScreen from '../screens/SingleFavoriteScreen';

const HomeStack = createStackNavigator({
  Home: HomeScreen,
});

HomeStack.navigationOptions = {
  tabBarLabel: 'Dogs',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      type='material-community'
      name='dog'
    />
  ),
};

const FavoritesStack = createStackNavigator({
  Favorites: FavoritesScreen,
  SingleFavorite: SingleFavoriteScreen,
});

FavoritesStack.navigationOptions = {
  tabBarLabel: 'Favorites',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={Platform.OS === 'ios' ? 'ios-star' : 'md-star'}
    />
  ),
};

const SettingsStack = createStackNavigator({
  Settings: SettingsScreen,
});

SettingsStack.navigationOptions = {
  tabBarLabel: 'About',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={Platform.OS === 'ios' ? 'ios-information-circle' : 'md-information-circle'}
    />
  ),
};

export default createBottomTabNavigator({
  HomeStack,
  FavoritesStack,
  SettingsStack,
});
