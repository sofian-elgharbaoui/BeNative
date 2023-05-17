import { View, Text, Image, TouchableOpacity } from "react-native";

import styles from "./styles";

const Lesson = ({ lesson, index, navigation, currLessonIndex }) => {
  let { title, desc, completed } = lesson;
  let lessonNum = index + 1;
  // let finalLesson = arrLength === index + 1;
  return (
    <TouchableOpacity
      style={[
        styles.lessonContainer,
        index === currLessonIndex ? styles.currLesson : {},
      ]}
      onPress={() =>
        navigation.navigate(
          index <= currLessonIndex ? "Conversation" : "Premium"
        )
      }
    >
      <Image
        style={[
          styles.lessonImg,
          completed ? styles.finished : styles.notFinished,
        ]}
        source={require("../assets/icons/grinning-face.png")}
      />
      <View style={styles.lessonTxtContainer}>
        <Text style={styles.lessonNum}>Lesson {lessonNum}</Text>
        <Text style={styles.lessonTitle}>{title}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default Lesson;
