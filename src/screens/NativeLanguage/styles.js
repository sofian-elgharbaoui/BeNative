import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    padding: 15,
  },
  header: {
    fontFamily: "Nunito_800ExtraBold",
    fontSize: 24,
    textAlign: "center",
    marginVertical: 20,
  },
  descContainer: {
    marginHorizontal: 10,
    position: "relative",
  },
  bf: {
    width: 45,
    height: 20,
    backgroundColor: "#00ffc1",
    position: "absolute",
    top: -2,
    left: -2,
  },
  decr: {
    fontFamily: "Nunito_500Medium",
    fontSize: 18,
    textAlign: "center",
    zIndex: 2,
    backgroundColor: "#fff",
    paddingVertical: 5,
  },
  af: {
    width: 45,
    height: 20,
    backgroundColor: "#00ffc1",
    position: "absolute",
    bottom: -2,
    right: -2,
  },
  selectTxt: {
    fontFamily: "Nunito_700Bold",
    color: "#555",
    fontSize: 16,
    textAlign: "center",
    marginTop: 25,
    marginBottom: 10,
  },
  list: {
    gap: 10,
  },
  lang: {
    fontFamily: "Nunito_700Bold",
    fontSize: 16,
    textAlign: "center",
    borderWidth: 1,
    borderColor: "#e9e9e9",
    borderRadius: 10,
    padding: 10,
  },
});

export default styles;
