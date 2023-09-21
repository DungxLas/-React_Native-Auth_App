import { View, Text, TextInput, StyleSheet } from "react-native";

import { Colors } from "../../constants/styles";
import React from "react";

type InputProps = {
  label: string;
  keyboardType?: any;
  secure?: any;
  onUpdateValue: (text: string) => void;
  value: any;
  isInvalid: any;
};

const Input: React.FC<InputProps> = ({
  label,
  keyboardType,
  secure,
  onUpdateValue,
  value,
  isInvalid,
}) => (
  <View style={styles.inputContainer}>
    <Text style={[styles.label, isInvalid && styles.labelInvalid]}>
      {label}
    </Text>
    <TextInput
      style={[styles.input, isInvalid && styles.inputInvalid]}
      //autoCapitalize={false}
      autoCapitalize="none"
      keyboardType={keyboardType}
      secureTextEntry={secure}
      onChangeText={onUpdateValue}
      value={value}
    />
  </View>
);

export default Input;

const styles = StyleSheet.create({
  inputContainer: {
    marginVertical: 8,
  },
  label: {
    color: "white",
    marginBottom: 4,
  },
  labelInvalid: {
    color: Colors.error500,
  },
  input: {
    paddingVertical: 8,
    paddingHorizontal: 6,
    backgroundColor: Colors.primary100,
    borderRadius: 4,
    fontSize: 16,
  },
  inputInvalid: {
    backgroundColor: Colors.error100,
  },
});
