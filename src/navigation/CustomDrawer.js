import React from "react";
import { useWindowDimensions } from 'react-native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { MainStackNavigator } from "./StackNavigator";
import { PostListScreen } from "../screens/PostListScreen";
import BestPostsScreen from "../screens/BestPostsScreen";

const Drawer = createDrawerNavigator();

function MyDrawer() {
  const dimensions = useWindowDimensions();

  const isLargeScreen = dimensions.width >= 768;

  return (
    <Drawer.Navigator 
      drawerType={isLargeScreen ? 'permanent' : 'back'}
      drawerStyle={isLargeScreen ? null : { width: '70%' }}
      overlayColor="transparent"
    >
      <Drawer.Screen name="Главная" component={MainStackNavigator} />
      <Drawer.Screen name="Лучшее" component={BestPostsScreen} />
    </Drawer.Navigator>
  );
}
export default MyDrawer;