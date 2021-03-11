import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { MainStackNavigator } from "./navigation/StackNavigator";
import DrawerNavigator from "./navigation/DrawerNavigator";

import MyDrawer from "./navigation/CustomDrawer";

 const App = () => {
  return <NavigationContainer>
          <MyDrawer/>
        </NavigationContainer>;
}
export default App;