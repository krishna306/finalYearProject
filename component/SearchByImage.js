import React, { useState, useEffect, useContext } from "react";
import {
  Button,
  Image,
  View,
  Platform,
  StyleSheet,
  TouchableOpacity,
  Text,
  ActivityIndicator,
} from "react-native";
import * as ImagePicker from "expo-image-picker";
import { AppContext } from "../APIS/Context";
export default function SearchByImage() {
  const { isLoading,k, image, setImage,pickImage,detectDisease } = useContext(AppContext);

  return (
    <View style={{ flex: 1, alignItems: "center" }}>
      {image && (
        <Image source={{ uri: image }} style={{ width: 400, height: 300 }} />
      )}
      {!image && <Button title="Choose Image" onPress={pickImage} />}
      {image  && <Button title="Upload Image" onPress={detectDisease} />}
      <TouchableOpacity>
        <View style={{ backgroundColor: "blue", margin: 10, padding: 10 }}>
          <Text>Reset</Text>
        </View>
      </TouchableOpacity>
      {isLoading && (
        <View
          style={{ flex: 1, justifyContent: "center", alignItems: "center" }}
        >
          <ActivityIndicator size="large" color="#00ff00" />
        </View>
      )}
    </View>
  );
}
const styles = StyleSheet.create({
  image: {
    height: 220,
    width: 350,
  },
});
