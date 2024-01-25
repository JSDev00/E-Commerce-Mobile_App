import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";
import ProfileScreen from "../Screens/ProfileScreen";
import CartScreen from "../Screens/CartScreen";
import { AntDesign } from "@expo/vector-icons";
import { Center } from "native-base";
import Colors from "../color";
import StackNav from "./StackNav";
const Tab = createMaterialBottomTabNavigator();
const BottomNav = () => {
  return (
    <Tab.Navigator
      backBehavior="Main"
      initialRouteName="Main"
      barStyle= { styles.tab }
      activeColor="#080"
      screenOptions={{
        tabBarShowLabel: false,
        headerShown: false,
        tabBarHideOnKeyboard: true,
      }}
    >
      <Tab.Screen
        name="Main"
        component={StackNav}
        options={{
          tabBarIcon: ({ focused }) => (
            <Center>
              {focused ? (
                <AntDesign name="home" size={24} color={Colors.main} />
              ) : (
                <AntDesign name="home" size={24} color={Colors.black} />
              )}
            </Center>
          ),
        }}
      />
     
      {/* Cart */}
      <Tab.Screen
        name="Cart"
        component={CartScreen}
        options={{
            tabBarIcon: ({ focused }) => (
            <Center>
              {focused ? (
                <AntDesign name="shoppingcart" size={24} color={Colors.main} />
              ) : (
                <AntDesign name="shoppingcart" size={24} color={Colors.black} />
              )}
            </Center>
          ),
        }}
      />
      {/* Profile */}
      <Tab.Screen
        name="profile"
        component={ProfileScreen}
        options={{
          tabBarIcon: ({ focused }) => (
            <Center>
              {focused ? (
                <AntDesign name="user" size={24} color={Colors.main} />
              ) : (
                <AntDesign name="user" size={24} color={Colors.black} />
              )}
            </Center>
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default BottomNav;

const styles = StyleSheet.create({
  tab: {
    elevation: 0,
    backgroundColor: Colors.white,
    height: 60,
    marginBottom:12
  },
});
