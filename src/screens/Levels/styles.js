import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    padding: 20,
  },
  header: {
    alignItems: "center",
    marginBottom: 80,
  },
  greeting: {
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
  },
  emoji: {
    width: 70,
    height: 70,
  },
  h1: {
    fontFamily: "Nunito_800ExtraBold",
    fontSize: 24,
  },
  h3: {
    fontFamily: "Nunito_700Bold",
    fontSize: 20,
    textAlign: "center",
    marginVertical: 15,
  },
  h4: {
    fontFamily: "Nunito_500Medium",
    fontSize: 18,
    textAlign: "center",
    textShadowColor: "#bbb",
    textShadowRadius: 5,
    marginHorizontal: 25,
  },
  list: {
    gap: 10,
  },
  listItem: {
    flexDirection: "row",
    alignItems: "center",
    gap: 5,
    borderWidth: 1,
    borderColor: "#e9e9e9",
    borderRadius: 10,
    overflow: "hidden",
  },
  listItemTxt: {
    flex: 1,
    fontFamily: "Nunito_500Medium",
  },
});

export default styles;
