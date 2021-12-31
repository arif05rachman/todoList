import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  KeyboardAvoidingView,
  Platform,
  TextInput,
  TouchableOpacity,
  Keyboard,
  ScrollView,
} from "react-native";
import {} from "react-native-web";
import Task from "./components/Task";

export default function App() {
  const [id, setId] = useState(1);
  const [tasks, setTasks] = useState([]);
  const [task, setTask] = useState({ id: 1, title: "", done: false });
  const handleAdd = () => {
    Keyboard.dismiss();
    setTasks([...tasks, task]);
    setTask({ ...task, title: "", id: task.id + 1 });
  };

  const completedTask = (id) => {
    const doneTasks = [...tasks].map((item) => {
      if (item.id === id) {
        return { ...item, done: true };
      }
      return item;
    });
    setTasks(doneTasks);
  };
  return (
    <View style={styles.container}>
      <View style={styles.taskWrapper}>
        <Text style={styles.titleText}>Today's tasks</Text>
        <View style={styles.items}>
          <ScrollView>
            {tasks?.map((item) => (
              <TouchableOpacity
                key={item?.id}
                onPress={() => completedTask(item?.id)}
              >
                <Task task={item} />
              </TouchableOpacity>
            ))}
          </ScrollView>
        </View>
      </View>
      <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding" : "height"}
        style={styles.writeTaskWrapper}
      >
        <TextInput
          value={task.title}
          style={styles.input}
          onChangeText={(text) => setTask({ ...task, title: text })}
          placeholder="Write a task"
        />
        <TouchableOpacity onPress={() => handleAdd()}>
          <View style={styles.addWrapper}>
            <Text style={styles.addText}>+</Text>
          </View>
        </TouchableOpacity>
      </KeyboardAvoidingView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#E8EAED",
  },
  taskWrapper: {
    paddingTop: 80,
    paddingHorizontal: 20,
  },
  titleText: {
    fontSize: 24,
    fontWeight: "bold",
  },
  items: {
    marginTop: 30,
    padding: 20,
    marginBottom: 180,
    backgroundColor: "#fff",
    minWidth: "80%",
    minHeight: "70%",
    borderRadius: 10,
  },
  writeTaskWrapper: {
    position: "absolute",
    bottom: 20,
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
  },
  input: {
    padding: 15,
    width: 250,
    backgroundColor: "#fff",
    borderWidth: 1,
    borderColor: "#c0c0c0",
    borderRadius: 60,
  },
  addWrapper: {
    width: 60,
    height: 60,
    borderRadius: 60,
    justifyContent: "center",
    backgroundColor: "#fff",
    alignItems: "center",
    borderWidth: 1,
    borderColor: "#c0c0c0",
  },
  addText: {},
});
