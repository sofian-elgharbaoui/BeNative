import { ScrollView, View, Text } from "react-native";
import { LinearGradient } from "expo-linear-gradient";

import { MaterialIcons } from "@expo/vector-icons";
import { MaterialCommunityIcons } from "@expo/vector-icons";

import styles from "./styles";

import Topic from "../../components/Topic";

const topics = [
  {
    title: "Reading 📚",
    desc: "Describe your favorite book and why you like it.",
    completed: false,
  },
  {
    title: "Travel ✈️",
    desc: "Talk about a memorable travel experience you've had.",
    completed: false,
  },
  {
    title: "Hobbies 🎨",
    desc: "Discuss your hobbies and why you enjoy them.",
    completed: false,
  },
  {
    title: "Role Model 🌟",
    desc: "Describe a famous person you admire and explain why.",
    completed: false,
  },
  {
    title: "Movie/TV Show 🎬",
    desc: "Talk about a movie or TV show that made a strong impression on you.",
    completed: false,
  },
  {
    title: "Language Learning 🌍",
    desc: "Discuss the benefits of learning a second language.",
    completed: false,
  },
  {
    title: "Dream Vacation Destination ✈️",
    desc: "Describe your dream vacation destination and what you would do there.",
    completed: false,
  },
  {
    title: "Overcoming Challenges 💪",
    desc: "Talk about a challenging situation you have overcome.",
    completed: false,
  },
  {
    title: "Environmental Conservation 🌿",
    desc: "Discuss the importance of environmental conservation.",
    completed: false,
  },
  {
    title: "Historical Event 📜",
    desc: "Describe a historical event that interests you and why.",
    completed: false,
  },
  {
    title: "Social Media Impact 📱",
    desc: "Discuss the impact of social media on society.",
    completed: false,
  },
  {
    title: "Exercise and Fitness 💪",
    desc: "Talk about your favorite form of exercise and its benefits.",
    completed: false,
  },
  {
    title: "Childhood Experience 🧒",
    desc: "Describe a memorable childhood experience and what you learned from it.",
    completed: false,
  },
  {
    title: "Living in a Big City 🏙️",
    desc: "Discuss the advantages and disadvantages of living in a big city.",
    completed: false,
  },
  {
    title: "Music 🎶",
    desc: "Talk about your favorite type of music and why you enjoy it.",
    completed: false,
  },
  {
    title: "Difficult Decisions 🤔",
    desc: "Describe a time when you had to make a difficult decision.",
    completed: false,
  },
  {
    title: "Technology in Daily Life 🌐",
    desc: "Discuss the role of technology in our daily lives.",
    completed: false,
  },
  {
    title: "Cultural Traditions 🎉",
    desc: "Talk about a cultural tradition in your country and its significance.",
    completed: false,
  },
  {
    title: "Facing Fears 😱",
    desc: "Describe a time when you faced a fear and how you overcame it.",
    completed: false,
  },
  {
    title: "Importance of Education 🎓",
    desc: "Discuss the importance of education in today's society.",
    completed: false,
  },
  {
    title: "Current News Event 🗞️",
    desc: "Talk about a recent news event that caught your attention.",
    completed: false,
  },
  {
    title: "Favorite Childhood Memory 🎈",
    desc: "Describe a favorite childhood memory and why it is special to you.",
    completed: false,
  },
  {
    title: "Climate Change 🌍",
    desc: "Discuss the impact of climate change on the environment.",
    completed: false,
  },
  {
    title: "Skills and Talents 🎯",
    desc: "Talk about a skill or talent you would like to develop and why.",
    completed: false,
  },
  {
    title: "Influential Person 👥",
    desc: "Describe a person who has been a significant influence in your life.",
    completed: false,
  },
  {
    title: "Working from Home 💻",
    desc: "Discuss the pros and cons of working from home.",
    completed: false,
  },
  {
    title: "Perspective-changing Book/Movie 🌟",
    desc: "Talk about a book or movie that changed your perspective on life.",
    completed: false,
  },
  {
    title: "Overcoming Language Barrier 🗣️",
    desc: "Describe a time when you had to overcome a language barrier.",
    completed: false,
  },
  {
    title: "Volunteering 🤝",
    desc: "Discuss the benefits of volunteering and giving back to the community.",
    completed: false,
  },
  {
    title: "Favorite Season 🌸",
    desc: "Talk about your favorite season and what you enjoy about it.",
    completed: false,
  },
  {
    title: "Recommended Place to Visit 🗺️",
    desc: "Describe a place you have visited that you would recommend to others.",
    completed: false,
  },
  {
    title: "Art and Creativity 🎨",
    desc: "Discuss the role of art and creativity in society.",
    completed: false,
  },
  {
    title: "Personal Goal 🎯",
    desc: "Talk about a personal goal you have set for yourself and how you plan to achieve it.",
    completed: false,
  },
  {
    title: "Adapting to New Situations 🌍",
    desc: "Describe a time when you had to adapt to a new and unfamiliar situation.",
    completed: false,
  },
  {
    title: "Social Media and Relationships 👥",
    desc: "Discuss the impact of social media on interpersonal relationships.",
    completed: false,
  },
  {
    title: "Exploring International Cuisine 🍽️",
    desc: "Talk about a cuisine from another culture that you would like to try.",
    completed: false,
  },
  {
    title: "Influential Teacher or Mentor 👩‍🏫",
    desc: "Describe a teacher or mentor who has made a positive impact on your life.",
    completed: false,
  },
  {
    title: "Mental Health and Well-being 🧠",
    desc: "Discuss the importance of mental health and well-being.",
    completed: false,
  },
  {
    title: "Memorable Concert or Performance 🎵",
    desc: "Talk about a memorable concert or live performance you have attended.",
    completed: false,
  },
  {
    title: "Resolving Conflicts 🤝",
    desc: "Describe a time when you had to resolve a conflict with someone.",
    completed: false,
  },
  {
    title: "Multiculturalism 🌍",
    desc: "Discuss the challenges and benefits of multiculturalism in society.",
    completed: false,
  },
  {
    title: "Future Career Aspirations 👩‍💼",
    desc: "Talk about a goal or aspiration you have for your future career.",
    completed: false,
  },
  {
    title: "Impressive Invention or Technology 💡",
    desc: "Describe an invention or technological advancement that you find impressive.",
    completed: false,
  },
  {
    title: "Globalization and World Economies 🌍",
    desc: "Discuss the impact of globalization on world economies.",
    completed: false,
  },
  {
    title: "Famous Landmark or Tourist Attraction 🗺️",
    desc: "Talk about a famous landmark or tourist attraction you would like to visit.",
    completed: false,
  },
  {
    title: "Working as a Team 👥",
    desc: "Describe a time when you had to work as part of a team.",
    completed: false,
  },
  {
    title: "Influence of Advertising on Consumer Behavior 📺",
    desc: "Discuss the influence of advertising on consumer behavior.",
    completed: false,
  },
  {
    title: "Emotional Art or Music 🎭",
    desc: "Talk about a piece of art or music that evokes strong emotions in you.",
    completed: false,
  },
  {
    title: "Public Speaking 🎙️",
    desc: "Describe a time when you had to give a presentation or public speech.",
    completed: false,
  },
  {
    title: "Multicultural Society 🌍",
    desc: "Discuss the benefits and challenges of living in a multicultural society.",
    completed: false,
  },
  // {
  //   title: "Social Issues 🌐",
  //   desc: "Talk about a current social issue that is important to you.",
  //   completed: false,
  // },
  // {
  //   title: "Personal Achievement 🏆",
  //   desc: "Describe a personal achievement that you are proud of.",
  //   completed: false,
  // },
  // {
  //   title: "Technology and Future of Work 🤖",
  //   desc: "Discuss the impact of technology on the future of work.",
  //   completed: false,
  // },
  // {
  //   title: "Overcoming Setbacks or Failures 💪",
  //   desc: "Talk about a time when you had to overcome a setback or failure.",
  //   completed: false,
  // },
  // {
  //   title: "Memorable Conversation 👥",
  //   desc: "Describe a memorable conversation you had with someone and what you learned from it.",
  //   completed: false,
  // },
];

const PracticeScreen = ({ navigation }) => {
  const currTopicIndex = topics.reduce(
    (prev, curr) => (curr.completed ? prev + 1 : prev),
    0
  );

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <View style={styles.timer}>
          <Text style={styles.timer_Txt}>{"2:05:45"}</Text>
          <MaterialIcons name="timer" size={24} color="#aaa" />
        </View>
        <View style={styles.fires}>
          <Text style={styles.fires_Txt}>8</Text>
          <MaterialCommunityIcons name="fire" size={28} color="#FFB84C" />
        </View>
      </View>
      <ScrollView>
        <View style={styles.lessonsContainer}>
          {topics.map((topic, index) => (
            <Topic
              key={index}
              topic={topic}
              index={index}
              currTopicIndex={currTopicIndex}
              navigation={navigation}
            />
          ))}
        </View>
        <LinearGradient
          colors={["#00FFCA", "#088395"]}
          start={{ x: 0, y: 0 }}
          end={{ x: 1, y: 0 }}
          style={styles.loadMoreBn}
        >
          <Text
            style={styles.loadMoreBn_Txt}
            onPress={() => navigation.navigate("Subscription")}
          >
            Unlock more content
          </Text>
        </LinearGradient>
      </ScrollView>
    </View>
  );
};

export default PracticeScreen;
