import { useCallback } from "react";
import { NavigationContainer, DefaultTheme } from "@react-navigation/native";
import * as SplashScreen from "expo-splash-screen";
import {
  useFonts,
  Nunito_400Regular,
  Nunito_500Medium,
  Nunito_700Bold,
  Nunito_800ExtraBold,
} from "@expo-google-fonts/nunito";

import MyStack from "./src/navigation/MyStack";

SplashScreen.preventAutoHideAsync();

function App() {
  const [fontsLoaded] = useFonts({
    Nunito_400Regular,
    Nunito_500Medium,
    Nunito_700Bold,
    Nunito_800ExtraBold,
  });

  const onReady = useCallback(async () => {
    if (fontsLoaded)
      try {
        await SplashScreen.hideAsync();
      } catch (err) {
        console.log(err);
      }
  }, [fontsLoaded]);

  if (!fontsLoaded) {
    return null;
  }
  // to change the default bgColor
  const Theme = {
    ...DefaultTheme,
    colors: {
      ...DefaultTheme.colors,
      background: "#fff",
    },
  };

  return (
    <NavigationContainer theme={Theme} onReady={onReady}>
      <MyStack />
    </NavigationContainer>
  );
}

export default App;
