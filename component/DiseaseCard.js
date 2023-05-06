import React, { useContext } from "react";
import {
  View,
  Text,
  StyleSheet,
  StatusBar,
  ScrollView,
  FlatList,
  Image,
  ImageBackground,
  TouchableOpacity,
  Dimensions,
  Linking,
} from "react-native";
import Disease from "../Diseases";
import Icon from "react-native-vector-icons/FontAwesome5";
import { AppContext } from "../APIS/Context";
import { Card } from "react-native-paper";
const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;
export default function DiseaseCard() {
  const {detectedDisease} = useContext(AppContext);
  const disease = Disease[detectedDisease];
  if(!detectedDisease){
    return (<>
      <View style={{flex:1,justifyContent:"center",alignItems:"center"}}>
        <Text style={{fontSize:20,padding:10}}>
          Please select and upload an image to identify disease....
        </Text>
      </View>
    </>)
  }
  return (
    <>
    <Card>
      <ScrollView>
        <ImageBackground
          blurRadius={30}
          source={{ uri: disease.imageurl }}
          style={styles.titlecontainer}
        >
          <Text style={styles.title}>{disease.title}</Text>
        </ImageBackground>

        <View style={styles.section}>
          <Text style={styles.sectionHeading}>About the Disease</Text>
          <View style={styles.imagecontainer}>
            <Image
              style={styles.image}
              alt="image of cattle infected"
              source={{ uri: disease.imageurl }}
            />
          </View>

          <View >
            {disease.description.map((item, idx) => {
              return (
                <Text key={idx} style={styles.content}>
                  {"    "}
                  {item}
                </Text>
              );
            })}
          </View>
        </View>
        <View style={styles.section}>
          <Text style={styles.sectionHeading}>Causes</Text>
          <View >
            {disease.causes.map((item, idx) => {
              return (
                <Text key={idx} style={styles.content}>
                  <Icon name="chevron-circle-right" style={{fontSize:20}} /> {item}
                </Text>
              );
            })}
          </View>
        </View>
        <View style={styles.section}>
          <Text style={styles.sectionHeading}>Symptoms</Text>

          <View>
            {disease.symptoms.map((item, idx) => {
              return (
                <Text key={idx} style={styles.content}>
                  <Icon name="chevron-circle-right" style={{fontSize:20}} /> {item}
                </Text>
              );
            })}
          </View>
        </View>
        <View style={styles.section}>
          <Text style={styles.sectionHeading}>Treatment</Text>
          <View >
            {disease.treatment.map((item, idx) => {
              return (
                <Text key={idx} style={styles.content}>
                  <Icon name="chevron-circle-right" style={{fontSize:20}} /> {item}
                </Text>
              );
            })}
          </View>
        </View>
        <View style={styles.section}>
          <Text style={styles.sectionHeading}>Vaccine </Text>
          <View >
            {disease.vaccine.map((item, idx) => {
              return (
                <Text key={idx} style={styles.content}>
                  <Icon name="chevron-circle-right" style={{fontSize:20}} /> {item}
                </Text>
              );
            })}
          </View>
        </View>
        <View >
          <ImageBackground
            blurRadius={30}
            style={styles.footer}
            source={{ uri: disease.imageurl }}
          >
            <TouchableOpacity onPress={() => Linking.openURL(disease.url)}>
              <Text
                style={{ fontSize: 17, fontWeight: "bold", color: "white" }}
              >
                Read more about the disease....
              </Text>
            </TouchableOpacity>
          </ImageBackground>
        </View>
      </ScrollView>
      </Card>
    </>
  );
}
const styles = StyleSheet.create({
  titlecontainer: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    height: 70,
  },
  title: {
    fontSize: 30,
    paddingHorizontal: 10,
    fontWeight: "600",
  },
  content: {
    paddingHorizontal: 15,
    fontSize:20,
  },
  section: {
    blurRadius:30,
    padding: 15,
    borderBottomWidth: 0.5,
    borderColor: "black",
  },
  sectionHeading: {
    fontSize: 25,
    fontWeight: "500",
    marginBottom:10,
  },
  image: {
    height: 220,
    width: 350,
  },
  imagecontainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    paddingBottom:20
  },
  footer: {
    height: 80,
    bottom: 0,
    backgroundColor: "#d7be69",
    justifyContent: "center",
    paddingHorizontal: 20,
    // marginBottom: 40,
  },
});
