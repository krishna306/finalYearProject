import React, { useContext, useState } from "react";
import { StatusBar, StyleSheet, useWindowDimensions, View } from "react-native";
import { TabView, SceneMap } from "react-native-tab-view";
import { AppContext } from "../APIS/Context";
import DiseaseCard from "./DiseaseCard";
import SearchByImage from "./SearchByImage";
import TopNavigation from "./TopNavigation";

export default function Tabs() {
    const {index,setIndex} = useContext(AppContext)
  const layout = useWindowDimensions();
  const [routes] = useState([
    { key: "first", title: "Search" },
    { key: "second", title: "Result" },
  ]);

  const renderScene = SceneMap({
    first: SearchByImage,
    second: DiseaseCard,
  });

  return (
    <TabView
      navigationState={{ index, routes }}
      renderScene={renderScene}
      onIndexChange={setIndex}
      initialLayout={{ width: layout.width }}
      renderTabBar={() => <TopNavigation index={index} setIndex={setIndex} />}
    />
  );
}

const styles = StyleSheet.create({
    container: {
      marginTop: StatusBar.currentHeight,
    },
    scene: {
      flex: 1,
    },
  });

