import React from "react";
import { View, Text, StyleSheet } from "react-native";

const Task = ({ task }) => {
  console.log(task);
  return (
    <View style={task?.done ? styles.itemDone : styles.item}>
      <View style={styles.itemLeft}>
        <View style={task?.done ? styles.squareDone : styles.square}></View>
        <Text
          style={
            styles.itemText &&
            task?.done && { textDecorationLine: "line-through" }
          }
        >
          {task.title}
        </Text>
      </View>
      <View style={task.done ? styles.circularDone : styles.circular}></View>
    </View>
  );
};

const styles = StyleSheet.create({
  item: {
    backgroundColor: "#f8f9fa",
    padding: 15,
    borderRadius: 10,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: 20,
  },
  itemDone: {
    backgroundColor: "#dee2e6",
    padding: 15,
    borderRadius: 10,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: 20,
  },
  itemLeft: { flexDirection: "row", alignItems: "center", flexWrap: "wrap" },
  square: {
    width: 24,
    height: 24,
    backgroundColor: "#55BCF6",
    opacity: 0.4,
    borderRadius: 5,
    marginRight: 15,
  },
  squareDone: {
    width: 24,
    height: 24,
    backgroundColor: "#00b4d8",
    opacity: 0.4,
    borderRadius: 5,
    marginRight: 15,
  },
  itemText: {
    maxWidth: "80%",
  },
  circular: {
    width: 12,
    height: 12,
    borderColor: "#55BCF6",
    opacity: 0.4,
    borderWidth: 2,
    borderRadius: 5,
  },
  circularDone: {
    width: 12,
    height: 12,
    borderColor: "#00b4d8",
    backgroundColor: "#00b4d8",
    borderWidth: 2,
    borderRadius: 5,
  },
});

export default Task;
