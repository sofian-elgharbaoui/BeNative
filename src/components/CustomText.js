import { Text, StyleSheet } from "react-native";

const CustomText = ({ style, children }) => {
  return <Text style={[styles.default, style]}>{children}</Text>;
};

const styles = StyleSheet.create({
  default: {
    fontFamily: "Nunito_500Medium",
  },
});

export default CustomText;
