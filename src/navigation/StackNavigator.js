import React from "react";
import { StyleSheet } from "react-native";
import { createStackNavigator } from "@react-navigation/stack";

import { PostListScreen } from "../screens/PostListScreen";
import BestPostsScreen from "../screens/BestPostsScreen";
import { PostScreen } from "../screens/PostScreen";

const Stack = createStackNavigator();
const screenOptionStyle = {
  headerStyle: {
    backgroundColor: "#9AC4F8",
  },
  headerTintColor: "white",
  headerBackTitle: "Back",
};

const MainStackNavigator = () =>{
    return(
        <Stack.Navigator
        screenOptions={screenOptionStyle}
          >
            <Stack.Screen name="Главная" component={PostListScreen} />
            <Stack.Screen name="Лучшее" component={BestPostsScreen} />
            <Stack.Screen name="Пост" component={PostScreen} />
        </Stack.Navigator>
    )
}

export { MainStackNavigator };

const styles = StyleSheet.create({
  center: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    textAlign: "center",
  },
});