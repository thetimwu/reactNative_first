import React, { useState } from "react";
import { StyleSheet, TextInput, Button, View, Modal } from "react-native";

const goalInput = props => {
  const [enterGoal, setEnterGoal] = useState("");

  const goalInputHandler = enteredText => {
    setEnterGoal(enteredText);
  };

  const addGoalHandler = () => {
    props.onSubmit(enterGoal);
    setEnterGoal("");
  };

  return (
    <Modal animationType="slide" visible={props.visible}>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          placeholder="Course Goal"
          onChangeText={goalInputHandler}
          value={enterGoal}
        />
        <View style={styles.buttonContainer}>
          <View style={styles.button}>
            <Button title="ADD" onPress={addGoalHandler} />
          </View>
          <View style={styles.button}>
            <Button title="Cancel" color="red" onPress={props.onClose} />
          </View>
        </View>
      </View>
    </Modal>
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
    flex: 1,
    flexDirection: "column",
    justifyContent: "center",
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
  },
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
    width: "60%"
  },
  button: {
    width: "40%"
  }
});

export default goalInput;
