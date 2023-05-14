import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
  },
  image: {
    width: 100,
    height: 100,
    marginTop: 20,
    borderRadius: 50,
  },
  fullName: {
    marginTop: 10,
    fontFamily: "Nunito_500Medium",
    fontSize: 24,
  },
  uniqueName: {
    fontFamily: "Nunito_700Bold",
    color: "gray",
  },
  cardInfo: {
    backgroundColor: "#eee",
    width: "90%",
    padding: 15,
    borderRadius: 20,
    marginTop: 20,
  },
  cardInfo_Item: {
    flexDirection: "row",
    justifyContent: "space-between",
    borderBottomWidth: 1,
    borderBottomColor: "#ddd",
    marginBottom: 15,
  },
  cardInfo_Item_Text: {
    fontFamily: "Nunito_700Bold",
    fontSize: 16,
  },
  cardInfo_Item_TextIcon: {
    flexDirection: "row",
  },
  gradientBotton: {
    borderRadius: 50,
    padding: 10,
  },
  cardInfo_Botton_Container: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    height: 40,
  },
  mt_10: {
    marginTop: 10,
  },
  faceIcon: {
    marginRight: 10,
    width: 50,
    height: 50,
  },
  cardInfo_Botton: {
    fontFamily: "Nunito_400Regular",
    fontSize: 20,
  },
  cardInfo_Botton_Premium: {
    fontFamily: "Nunito_700Bold",
    letterSpacing: 0.6,
  },
  logOut: {
    borderColor: "#bbb",
    paddingVertical: 10,
    paddingHorizontal: 30,
    borderWidth: 2,
    borderRadius: 50,
    marginVertical: 25,
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
  },
  logOut_Text: { fontFamily: "Nunito_500Medium", fontSize: 20 },
  navList: {},
});

export default styles;
