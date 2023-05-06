import { useState } from "react";
import { StyleSheet, View, Text, Image, Button, StatusBar } from "react-native";
import Context from "./APIS/Context";
// import DiseaseCard from "./component/DiseaseCard";
import Tabs from "./component/Tab";
import {
  GestureHandlerRootView
} from 'react-native-gesture-handler';


function App() {
  return (
    <>
      <View style={styles.statusbar} />
      <Tabs />
    </>
  );
}

const styles = StyleSheet.create({
  statusbar: {
    height: StatusBar.currentHeight,
    backgroundColor: "#f8f7fd",
  },
});

export default () => {
  return (
    <>
      <GestureHandlerRootView style={{ flex: 1 }}>
        <Context>
          <App />
        </Context>
      </GestureHandlerRootView>
    </>
  );
};