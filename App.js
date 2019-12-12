import React, { useState } from "react";
import { StyleSheet, Text, View, Button, TextInput } from "react-native";

export default function App() {
  const [outputText, setOutputText] = useState("start working on your app!");

  return (
    <View style={styles.container}>
      <View style={styles.inputContainer}>
        <TextInput style={styles.input} placeholder="Couse Goal" />
        <Button style={{ marginTop: 10 }} title="ADD" />
      </View>
      <View style={styles.inputContainer}></View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center"
  },
  inputContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center"
  },
  input: {
    width: "80%",
    height: 40,
    borderBottomColor: "black",
    borderBottomWidth: 1
  }
});
