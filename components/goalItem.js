import React from "react";
import { StyleSheet, View, Text, TouchableOpacity } from "react-native";

const goalItem = props => {
  return (
    <TouchableOpacity onPress={() => props.onDelete(props.itemId)}>
      <View style={styles.listItem}>
        <Text>{props.title}</Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    margin: 30,
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "flex-start",
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
  },
  listItem: {
    padding: 10,
    marginVertical: 10,
    backgroundColor: "#ccc",
    borderColor: "black",
    borderWidth: 1
  }
});

export default goalItem;
