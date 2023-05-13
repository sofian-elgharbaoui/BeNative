import { StyleSheet, View } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import {
  FontAwesome5,
  Ionicons,
  MaterialCommunityIcons,
} from "@expo/vector-icons";

import HomeScreen from "../screens/Home/Home";
import PracticeScreen from "../screens/Practice/Practice";
import AnalysisScreen from "../screens/Analysis/Analysis";
import ProfileScreen from "../screens/Profile/Profile";

const MyTabs = () => {
  const Tab = createBottomTabNavigator();
  return (
    <Tab.Navigator
      initialRouteName="Profile"
      screenOptions={{
        headerBackgroundContainerStyle: {
          backgroundColor: "transparent",
        },
        headerStyle: {
          backgroundColor: "transparent",
          borderBottomColor: "transparent",
          borderBottomWidth: 0,
        },
        headerBackVisible: false,
        headerTitleStyle: styles.titleStyle,
        tabBarShowLabel: false,
        tabBarStyle: styles.tabBarStyle,
      }}
    >
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          tabBarIcon: ({ focused }) => (
            <View style={focused ? styles.currTab : {}}>
              <FontAwesome5
                name="graduation-cap"
                size={30}
                color={focused ? "#0A4D68" : "#00FFCA"}
              />
            </View>
          ),
        }}
      />
      <Tab.Screen
        name="Practice"
        component={PracticeScreen}
        options={{
          tabBarIcon: ({ focused }) => (
            <View style={focused ? styles.currTab : {}}>
              <Ionicons
                name="chatbubbles"
                size={30}
                color={focused ? "#0A4D68" : "#00FFCA"}
              />
            </View>
          ),
        }}
      />
      <Tab.Screen
        name="Analysis"
        component={AnalysisScreen}
        options={{
          tabBarIcon: ({ focused }) => (
            <View style={focused ? styles.currTab : {}}>
              <MaterialCommunityIcons
                name="chart-box"
                size={30}
                color={focused ? "#0A4D68" : "#00FFCA"}
              />
            </View>
          ),
        }}
      />
      <Tab.Screen
        name="Profile"
        component={ProfileScreen}
        options={{
          tabBarIcon: ({ focused }) => (
            <View style={focused ? styles.currTab : {}}>
              <FontAwesome5
                name="user-alt"
                size={25}
                color={focused ? "#0A4D68" : "#00FFCA"}
              />
            </View>
          ),
        }}
      />
    </Tab.Navigator>
  );
};

const styles = StyleSheet.create({
  titleStyle: {
    fontFamily: "Nunito_800ExtraBold",
    fontSize: 26,
    color: "#0A4D68",
  },
  tabBarStyle: {
    height: 65,
    backgroundColor: "#0A4D68",
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
    borderTopWidth: 0,
    // position: "absolute",
  },
  currTab: {
    backgroundColor: "#05BFDB",
    justifyContent: "center",
    alignItems: "center",
    width: 45,
    height: 45,
    borderRadius: 20,
  },
});

export default MyTabs;
