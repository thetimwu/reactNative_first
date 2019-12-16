import React, { useState } from "react";
import { StyleSheet, View, FlatList, Button } from "react-native";
import GoalInput from "./components/goalInput";
import GoalItem from "./components/goalItem";

export default function App() {
  const [courseGoal, setCourseGoal] = useState([]);
  const [isShow, setIsShow] = useState(false);

  const goalHandler = goalTitle => {
    setCourseGoal(currentGoal => [
      ...currentGoal,
      { id: Math.random().toString(), value: goalTitle }
    ]);
    setIsShow(false);
    console.log(courseGoal);
    // setEnterGoal("");
  };

  const deleteHandler = i => {
    setCourseGoal(() => courseGoal.filter(course => course.id !== i));
    console.log(i);
  };

  const showHandler = () => {
    setIsShow(true);
  };

  const handleClose = () => {
    setIsShow(false);
  };

  return (
    <View style={styles.screen}>
      <View style={styles.input}>
        <Button title="show" onPress={showHandler} />
      </View>
      <GoalInput
        onSubmit={goalHandler}
        visible={isShow}
        onClose={handleClose}
      />
      <View>
        <FlatList
          data={courseGoal}
          renderItem={({ item }) => (
            <GoalItem
              title={item.value}
              onDelete={deleteHandler}
              itemId={item.id}
            />
          )}
          keyExtractor={item => item.id}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    margin: 50
  },
  container: {
    margin: 50,
    backgroundColor: "#fff",
    alignItems: "flex-start",
    justifyContent: "center",
    width: "100%"
  },
  inputContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center"
  },
  input: {
    width: "100%",
    padding: 10
  },
  listItem: {
    padding: 10,
    marginVertical: 10,
    backgroundColor: "#ccc",
    borderColor: "black",
    borderWidth: 1
  },
  button: {
    justifyContent: "center",
    alignItems: "center",
    width: "100%"
  }
});
