import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import React, { useContext } from "react";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
export default function TopNavigation({ index, setIndex }) {
  return (
    <View style={styles.container}>
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center",width:200 }}>
        {index === 0 ? (
          <TouchableOpacity>
            <Text style={{ ...styles.active }}>
             
              <Icon name="image-search" style={styles.text} />{" "}
              Search{" "}
            </Text>
          </TouchableOpacity>
        ) : (
          <TouchableOpacity onPress={() => setIndex(index === 1 ? 0 : 1)}>
            <Text style={styles.text}>
             
              <Icon name="image-search" style={styles.text} />{" "}
              Search{"  "}
            </Text>
          </TouchableOpacity>
        )}
      </View>
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        {index === 1 ? (
          <TouchableOpacity>
            <Text style={{ ...styles.active }}>Search Result</Text>
          </TouchableOpacity>
        ) : (
          <TouchableOpacity onPress={() => setIndex(index === 0 ? 1 : 0)}>
            <Text style={styles.text}>Search Result</Text>
          </TouchableOpacity>
        )}
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-between",
    padding: 10,
    alignItems: "center",
    borderBottomColor: "black",
    borderBottomWidth: 1,
  },
  active: {
    borderBottomColor: "blue",
    borderBottomWidth: 5,
    borderRadius: 5,
    fontWeight: "700",
    fontSize: 20,
  },
  text: {
    fontSize: 20,
  },
});
