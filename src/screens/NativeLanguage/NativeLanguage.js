import { ScrollView, View, Text } from "react-native";

import styles from "./styles";

const langItem = (languageName) => {
  return (
    <Text key={languageName} style={styles.lang}>
      {languageName}
    </Text>
  );
};

const popularLangs = [
  "Arabic",
  "Bengali",
  "Hindi",
  "Spanish",
  "Portuguese",
  "chinese",
];
const allOtherLangs = [
  "Afrikaans",
  "Albanian",
  "Amharic",
  "Armenian",
  "Assamese",
  "Aymara",
  "Azerbaijani",
  "Basque",
  "Belarusian",
  "Bosnian",
  "Bulgarian",
  "Burmese",
  "Catalan",
  "Cebuano",
  "Chichewa",
  "Chinese",
  "Corsican",
  "Croatian",
  "Czech",
  "Danish",
  "Dutch",
  "English",
  "Esperanto",
  "Estonian",
  "Faroese",
  "Fijian",
  "Filipino",
  "Finnish",
  "French",
  "Galician",
  "Georgian",
  "German",
  "Greek",
  "Greenlandic",
  "Gujarati",
  "Haitian Creole",
  "Hausa",
  "Hawaiian",
  "Hebrew",
  "Hmong",
  "Hungarian",
  "Icelandic",
  "Igbo",
  "Indonesian",
  "Irish",
  "Italian",
  "Japanese",
  "Javanese",
  "Kannada",
  "Kazakh",
  "Khmer",
  "Kinyarwanda",
  "Korean",
  "Kurdish",
  "Kyrgyz",
  "Lao",
  "Latin",
  "Latvian",
  "Lithuanian",
  "Luxembourgish",
  "Macedonian",
  "Malagasy",
  "Malay",
  "Malayalam",
  "Maltese",
  "Maori",
  "Marathi",
  "Mongolian",
  "Montenegrin",
  "Nepali",
  "Norwegian",
  "Occitan",
  "Oriya",
  "Pashto",
  "Persian",
  "Polish",
  "Punjabi",
  "Quechua",
  "Romanian",
  "Russian",
  "Samoan",
  "Scots Gaelic",
  "Serbian",
  "Sesotho",
  "Shona",
  "Sindhi",
  "Sinhala",
  "Slovak",
  "Slovenian",
  "Somali",
  "Sundanese",
  "Swahili",
  "Swedish",
  "Tajik",
  "Tamil",
  "Tatar",
  "Telugu",
  "Thai",
  "Tibetan",
  "Tigrinya",
  "Tonga",
  "Turkish",
  "Turkmen",
  "Ukrainian",
  "Urdu",
  "Uzbek",
  "Vietnamese",
  "Welsh",
  "Xhosa",
  "Yiddish",
  "Yoruba",
  "Zulu",
];

const NativeLanguage = () => {
  return (
    <ScrollView>
      <View style={styles.container}>
        <Text style={styles.header}>
          Choose from the following list your native language.
        </Text>
        <View style={styles.descContainer}>
          <View style={styles.bf} />
          <View style={styles.af} />
          <Text style={styles.decr}>
            During conversations with Avatars, you will receive hints and
            translations in your native language.
          </Text>
        </View>
        <Text style={styles.selectTxt}>Popular languages:</Text>
        <View style={styles.list}>
          {popularLangs.map((lang) => langItem(lang))}
        </View>
        <Text style={styles.selectTxt}>All other languages:</Text>
        <View style={styles.list}>
          {allOtherLangs.map((lang) => langItem(lang))}
        </View>
      </View>
    </ScrollView>
  );
};

export default NativeLanguage;
