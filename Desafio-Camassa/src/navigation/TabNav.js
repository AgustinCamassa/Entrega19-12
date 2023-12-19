import React from "react";

import { Entypo } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";

import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import RootNavigation from "./RootNavigation";
import Profile from "../screens/Profile";

import { colors } from "../theme/colors";

const Tab = createBottomTabNavigator();

const TabNav = () => {
  return (
    <Tab.Navigator screenOptions={{ title: "", headerShown: false }}>
      <Tab.Screen
        options={{
          tabBarIcon: ({ focused }) => (
            <Entypo
              name="shop"
              size={focused ? 35 : 20}
              color={focused ? colors.grey : "black"}
            />
          ),
        }}
        name="rootNavigation"
        component={RootNavigation}
      />
      <Tab.Screen
        options={{
          tabBarIcon: ({ focused }) => (
            <Ionicons
              name="person-circle-outline"
              size={focused ? 35 : 20}
              color={focused ? colors.grey : "black"}
            />
          ),
        }}
        name="profile"
        component={Profile}
      />
    </Tab.Navigator>
  );
};

export default TabNav;
