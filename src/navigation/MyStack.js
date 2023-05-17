import { StyleSheet } from "react-native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import MyTabs from "./MyTabs";

import PremiumScreen from "../screens/Premium/Premium";
import RegisterScreen from "../screens/Register/Register";
import LevelsScreen from "../screens/Levels/Levels";
import SubscriptionScreen from "../screens/Subscription/Subscription";
import NativeLanguageScreen from "../screens/NativeLanguage/NativeLanguage";
import ConversationScreen from "../screens/Conversation/Conversation";

const Stack = createNativeStackNavigator();

function MyStack() {
  return (
    <Stack.Navigator
      initialRouteName="Home"
      screenOptions={{
        headerBackVisible: false,
        headerTitleStyle: styles.titleStyle,
      }}
    >
      <Stack.Screen
        name="MyTabs"
        component={MyTabs}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen name="Register" component={RegisterScreen} />
      <Stack.Screen name="Levels" component={LevelsScreen} />
      <Stack.Screen name="Native Language" component={NativeLanguageScreen} />
      <Stack.Screen name="Subscription" component={SubscriptionScreen} />
      <Stack.Screen name="Premium" component={PremiumScreen} />
      <Stack.Screen name="Conversation" component={ConversationScreen} />
    </Stack.Navigator>
  );
}

const styles = StyleSheet.create({
  titleStyle: {
    fontFamily: "Nunito_800ExtraBold",
    fontSize: 26,
    color: "#0A4D68",
  },
});

export default MyStack;
