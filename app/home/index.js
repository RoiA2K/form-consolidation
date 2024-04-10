import { BebasNeue_400Regular } from "@expo-google-fonts/bebas-neue"
import { useFonts } from "expo-font"
import React from "react"
import { View } from "react-native"
import { ScrollView } from "react-native-gesture-handler"
import { Avatar, Text, useTheme } from "react-native-paper"

const HomePage = () => {
  const theme = useTheme()

  const [fonstLoaded] = useFonts({
    BebasNeue_400Regular,
  })

  if (!fonstLoaded) {
    return <Text>Loading...</Text>
  }

  return (
    <ScrollView
      style={{
        backgroundColor: "white",
      }}
    >
      <View>
        <View
          style={{
            width: "85%",

            alignSelf: "center",

            marginTop: 20,
            marginBottom: 5,
          }}
        ></View>
        <View
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",

            width: "85%",
            height: 200,

            backgroundColor: theme.colors.primaryContainer,

            alignSelf: "center",

            borderRadius: 10,
            padding: 20,
          }}
        >
          <Avatar.Text size={50} label="A" style={{}} />
          <Text
            variant="headlineSmall"
            style={{
              marginLeft: 10,
            }}
          >
            Alfredo Roi B. Naluz
          </Text>
        </View>
        <View
          style={{
            width: "85%",
            height: 150,

            backgroundColor: theme.colors.primaryContainer,
            alignSelf: "center",

            borderRadius: 10,
            marginTop: 20,
            padding: 20,
          }}
        ></View>
        <View
          style={{
            width: "85%",
            height: 150,

            backgroundColor: theme.colors.primaryContainer,
            alignSelf: "center",

            borderRadius: 10,
            marginTop: 20,
            padding: 20,
          }}
        ></View>
        <View
          style={{
            width: "85%",
            height: 150,

            backgroundColor: theme.colors.primaryContainer,
            alignSelf: "center",

            borderRadius: 10,
            marginTop: 20,
            padding: 20,
          }}
        ></View>
        <View
          style={{
            width: "85%",
            height: 150,

            backgroundColor: theme.colors.primaryContainer,
            alignSelf: "center",

            borderRadius: 10,
            marginTop: 20,
            padding: 20,
          }}
        ></View>
      </View>
    </ScrollView>
  )
}

export default HomePage
