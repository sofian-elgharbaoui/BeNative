import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
  },
  form: {
    backgroundColor: "#f8f9f9",
    width: "80%",
    padding: 15,
    borderRadius: 20,
    gap: 1,
    marginTop: 50,
    zIndex: 5,
    // flex: 1,
  },
  label: {
    fontFamily: "Nunito_800ExtraBold",
  },
  input: {
    borderWidth: 1,
    borderColor: "#e9e9e9",
    borderRadius: 10,
    height: 40,
    paddingLeft: 10,
  },
  validationErr: {
    color: "red",
  },
  registerBn: {
    fontFamily: "Nunito_700Bold",
    fontSize: 16,
    backgroundColor: "#088395",
    color: "#fff",
    letterSpacing: 0.5,
    marginLeft: "auto",
    marginRight: "auto",
    paddingVertical: 10,
    borderRadius: 50,
    width: 150,
    textAlign: "center",
  },
  footer: {
    position: "absolute",
    bottom: 10,
  },
});

export default styles;
