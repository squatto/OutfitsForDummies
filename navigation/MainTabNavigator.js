import React from 'react';
import { Platform } from 'react-native';
import { createStackNavigator, createBottomTabNavigator } from 'react-navigation';

import TabBarIcon from '../components/TabBarIcon';
import OutfitsScreen from '../screens/OutfitsScreen';
import WardrobeScreen from '../screens/WardrobeScreen';
import HistoryScreen from '../screens/HistoryScreen';

const OutfitsStack = createStackNavigator({
  Outfits: OutfitsScreen,
});

OutfitsStack.navigationOptions = {
  tabBarLabel: 'Outfits',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={
        Platform.OS === 'ios'
          ? `ios-shirt${focused ? '' : '-outline'}`
          : 'md-shirt'
      }
    />
  ),
};

const WardrobeStack = createStackNavigator({
  Wardrobe: WardrobeScreen,
});

WardrobeStack.navigationOptions = {
  tabBarLabel: 'Wardrobe',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={Platform.OS === 'ios' ? `ios-images${focused ? '' : '-outline'}` : 'md-images'}
    />
  ),
};

const HistoryStack = createStackNavigator({
  History: HistoryScreen,
});

HistoryStack.navigationOptions = {
  tabBarLabel: 'History',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={Platform.OS === 'ios' ? `ios-time${focused ? '' : '-outline'}` : 'md-time'}
    />
  ),
};

export default createBottomTabNavigator({
  OutfitsStack,
  WardrobeStack,
  HistoryStack,
});
