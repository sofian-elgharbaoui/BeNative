import { View, Text, TextInput } from "react-native";
import { useFormik } from "formik";
import * as Yup from "yup";
import axios from "axios";

import styles from "./styles";
import { useState } from "react";

const validationSchema = Yup.object({
  fullName: Yup.string()
    .required("Required")
    .min(2, "Must be 2 characters at least"),
  email: Yup.string().required("Required").email("invalid email"),
  password: Yup.string().required("Required").min(8, "Pass a strong password"),
});
// avatar: Yup.string().required("Required"),

const initialValues = {
  fullName: "",
  email: "",
  password: "",
  confirmPassword: "",
};
// avatar: "",

const RegisterScreen = ({ navigation }) => {
  const [blur, setBlur] = useState(false);

  const {
    values,
    errors,
    setFieldValue,
    handleBlur,
    // isSubmitting,
    handleSubmit,
  } = useFormik({
    validationSchema,
    initialValues,
    onSubmit: async function (values, onSubmitProps) {
      try {
        const { data: dataName } = await axios.patch("http", values);
        onSubmitProps.resetForm();
      } catch (error) {
        console.log(error);
      }
      navigation.navigate("Home");
    },
  });
  return (
    <View style={styles.container}>
      <View style={styles.form}>
        <View>
          <Text style={styles.label}>Full name:</Text>
          <TextInput
            value={values.fullName}
            onChangeText={(v) => setFieldValue("fullName", v)}
            onBlur={handleBlur("fullName")}
            style={styles.input}
          />
          <Text style={styles.validationErr}>
            {errors.fullName ? errors.fullName : ""}
          </Text>
        </View>
        <View>
          <Text style={styles.label}>Email:</Text>
          <TextInput
            keyboardType="email-address"
            value={values.email}
            onChangeText={(v) => setFieldValue("email", v)}
            onBlur={handleBlur("email")}
            style={styles.input}
          />
          <Text style={styles.validationErr}>
            {errors.email ? errors.email : ""}
          </Text>
        </View>
        <View>
          <Text style={styles.label}>Password:</Text>
          <TextInput
            keyboardType="visible-password"
            value={values.password}
            onChangeText={(v) => setFieldValue("password", v)}
            onBlur={handleBlur("password")}
            style={styles.input}
          />
          <Text style={styles.validationErr}>
            {errors.password ? errors.password : ""}
          </Text>
        </View>
        <View>
          <Text style={styles.label}>Reenter password:</Text>
          <TextInput
            keyboardType="visible-password"
            value={values.confirmPassword}
            onChangeText={(v) => setFieldValue("confirmPassword", v)}
            onBlur={() => values.password && setBlur(true)}
            style={styles.input}
          />
          <Text style={styles.validationErr}>
            {blur &&
            values.password.length > 0 &&
            values.password !== values.confirmPassword
              ? "Both password need to be the same"
              : ""}
          </Text>
        </View>
        <Text style={styles.registerBn} onPress={handleSubmit}>
          Sign up
        </Text>
      </View>

      <View style={styles.footer}>
        <Text>Terms & Conditions</Text>
      </View>
    </View>
  );
};

export default RegisterScreen;
