import React, { useState, useEffect, useContext } from "react";
import {
  Image,
  View,
  Platform,
  StyleSheet,
  TouchableOpacity,
  Text,
  ActivityIndicator,
  Alert,
} from "react-native";

var axios = require("axios");
import * as ImagePicker from "expo-image-picker";
import { AppContext } from "../APIS/Context";
import { Avatar, Button, Card } from "react-native-paper";
import Icon from "react-native-vector-icons/FontAwesome5";
export default function SearchByImage() {
  const { detectedDisease, setDetectedDisease, setIndex } =
    useContext(AppContext);
  const [image, setImage] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [response, setResponse] = useState(null);
  const pickImageFromGallery = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowEditing: true,
      aspect: [4, 3],
      quality: 1,
    });
    if (!result.cancelled) {
      setImage(result.uri);
    }
  };
  const pickImagefromCamera = async () => {
    let result = await ImagePicker.launchCameraAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowEditing: true,
      aspect: [4, 3],
      quality: 1,
    });
    if (!result.cancelled) {
      setImage(result.uri);
    }
  };

  const onSelectImage = async () => {
    Alert.alert("Upload photo to detect disease", "Choose an option", [
      { text: "Camera", onPress: pickImagefromCamera },
      { text: "Gallery", onPress: pickImageFromGallery },
      { text: "Cancel", onPress: () => {} },
    ]);
  };
  const uploadImage = async () => {
    setIsLoading(true);
    const data = new FormData();
    data.append("file", {
      name: image.fileName,
      type: image.type,
      uri: image.uri,
    });
    setTimeout(() => {
      setDetectedDisease("fmd");
      setIsLoading(false);
      setIndex(1);
    }, 7000);

    // setDetectedDisease("ringworm")

    //   fetch("http://192.168.154.232:5000/predict", {
    //     method: "post",
    //     headers: {
    //       "content-type": "multipart/form-data",
    //     },
    //     data: data,
    //   })
    //     .then((res) => {
    //       console.log("error1"+res.status);
    //       console.log("error1"+res.headers);
    //       return res.json();
    //     })
    //     .then(
    //       (result) => {
    //         console.log(result);
    //       },
    //       (error) => {
    //         setDetectedDisease("ibk")
    //       }
    //     );
    //     setIsLoading(false)
  };
  const reset = () => {
    setImage(null);
    setDetectedDisease(null);
  };
  const LeftContent = (props) => <Avatar.Icon {...props} icon="folder" />;
  if (isLoading) {
    return (
      <>
        <View
          style={{ flex: 1, justifyContent: "center", alignItems: "center" }}
        >
          <ActivityIndicator size="large" color="#00ff00" />
          <Text style={{ fontSize: 25 }}>Detecting disease....</Text>
        </View>
      </>
    );
  }

  return (
    <>
      <Card style={{ padding: 20 }}>
        <View style={styles.section}>
          <Card.Title
            title="Instructions for Detection of Disease"
            titleStyle={{ fontSize: 24, fontWeight: "bold" }}
            titleNumberOfLines={2}
          />

          <Card.Content>
            <Text style={styles.content}>
              <Icon name="chevron-circle-right" style={{ fontSize: 20 }} />{" "}
              Click on Button COOSE PHOTO
            </Text>
            <Text style={styles.content}>
              <Icon name="chevron-circle-right" style={{ fontSize: 20 }} /> You
              can select image from either Gallery or can capture using Camera
            </Text>
            <Text style={styles.content}>
              <Icon name="chevron-circle-right" style={{ fontSize: 20 }} />{" "}
              After Selecting image click on FETCH RESULT and you will be
              redirect to Search Result Tab
            </Text>
          </Card.Content>
        </View>
        <View style={styles.section1}>
          <Card.Title
            title="What will you get in Search Result ?"
            titleStyle={{ fontSize: 24, fontWeight: "bold" }}
            titleNumberOfLines={2}
          />
          <Card.Content>
            <Text style={styles.content}>
              <Icon name="chevron-circle-right" style={{ fontSize: 20 }} />{" "}
              About the Disease
            </Text>
            <Text style={styles.content}>
              <Icon name="chevron-circle-right" style={{ fontSize: 20 }} />{" "}
              Causes of Disease
            </Text>
            <Text style={styles.content}>
              <Icon name="chevron-circle-right" style={{ fontSize: 20 }} />{" "}
              Common Symptoms of Disease
            </Text>
            <Text style={styles.content}>
              <Icon name="chevron-circle-right" style={{ fontSize: 20 }} /> Some
              basic treatment and suggestions
            </Text>
            <Text style={styles.content}>
              <Icon name="chevron-circle-right" style={{ fontSize: 20 }} />{" "}
              Details about vaccine available for the disease
            </Text>
          </Card.Content>
        </View>
        {image && <Card.Cover source={{ uri: image }} />}
        <Card.Actions>
          {!image && <Button onPress={onSelectImage}>CHOOSE PHOTO</Button>}
          {image && <Button onPress={uploadImage}>FETCH RESULT</Button>}
          <Button onPress={reset} style={{ backgroundColor: "red" }}>
            RESET
          </Button>
        </Card.Actions>
      </Card>
    </>
  );
}
const styles = StyleSheet.create({
  image: {
    height: 220,
    width: 350,
  },
  content: {
    paddingHorizontal: 5,
    fontSize: 20,
  },
  section: {
    blurRadius:30,
    padding: 5,
    borderBottomWidth: 1,
    borderColor: "black",
  },
  section1: {
    blurRadius:30,
    padding: 5,
    borderColor: "black",
  },
});
