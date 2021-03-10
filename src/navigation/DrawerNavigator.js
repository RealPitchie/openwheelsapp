import React from "react";

import { createDrawerNavigator } from "@react-navigation/drawer";

import { MainStackNavigator } from "./StackNavigator";
import { PostListScreen } from "../screens/PostListScreen";
import BestPostsScreen from "../screens/BestPostsScreen";

const Drawer = createDrawerNavigator();

const DrawerNavigator = () => {
  return (
    <Drawer.Navigator>
      <Drawer.Screen name="Главная" component={MainStackNavigator} />
      <Drawer.Screen name="Лучшее" component={BestPostsScreen} />
    </Drawer.Navigator>
  );
}

export default DrawerNavigator;