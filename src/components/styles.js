import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  lessonContainer: {
    flexDirection: "row",
    alignItems: "center",
    gap: 15,
    padding: 10,
    borderRadius: 20,
  },
  lessonImg: {
    width: 60,
    height: 60,
    borderRadius: 50,
    borderWidth: 3,
  },
  currLesson: {
    backgroundColor: "#43ffc122",
  },
  finished: {
    borderColor: "#00ffc1",
  },
  notFinished: {
    borderColor: "#ddd",
  },
  lessonTxtContainer: {
    flex: 1,
  },
  lessonNum: {
    fontFamily: "Nunito_700Bold",
    color: "#999",
  },
  lessonTitle: {
    fontFamily: "Nunito_700Bold",
    color: "#333",
  },
});

export default styles;
