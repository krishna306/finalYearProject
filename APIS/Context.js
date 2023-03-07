import React, { createContext, useEffect, useState } from "react";
export const AppContext = createContext();
import axios from "axios";
import * as ImagePicker from "expo-image-picker";
export default Context = ({ children }) => {
  const [detectedDisease, setDetectedDisease] = useState(null);
  const [index, setIndex] = useState(0);
  const [image, setImage] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
const [k,setK] = useState(null)
  const detectDisease = async () => {
    if (image != null) {
      const data = new FormData();
      data.append("name", "infectedcattle");
      data.append("file", image);
      try {
        setIsLoading(true);
        axios
          .post("http://192.168.150.237:7000/detectdisease", data,{
            headers:{
              Accept:"application/json",
              'Content-Type':"multipart/form-data"
            }
          })
          .then((result) => {
            console.log(result.data)
            setK(result.data.image)
            setDetectedDisease(result.data.detectedDisease);
          })
          .catch((error) => {
            console.log(error);
          });
      } catch (error) {
        console.log(error);
      }
      setIsLoading(false);
    } else {
      alert("Please select an Image to upload");
      setIsLoading(false);
    }
  };

  const pickImage = async (reset = image) => {
    const result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });
    if (!result.canceled) {
      setImage(result.assets[0].uri);
    }
  };


  
  return (
    <AppContext.Provider
      value={{
        index,
        setIndex,
        detectedDisease,
        image,
        setImage,
        pickImage,
        isLoading,
        detectDisease,
        k
      }}
    >
      {children}
    </AppContext.Provider>
  );
};
