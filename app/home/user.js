import { useNavigation } from "expo-router"
import React from "react"
import { View } from "react-native"
import { ScrollView } from "react-native-gesture-handler"
import { Text, useTheme } from "react-native-paper"

const UserPage = () => {
  const theme = useTheme()
  const navigation = useNavigation()

  return (
    <ScrollView>
      <View>
        <Text
          variant="displayMedium"
          style={{
            fontFamily: "BebasNeue_400Regular",
            color: "black",
            textAlign: "center",
            marginTop: 110,
          }}
        >
          ALFREDO ROI NALUZ
        </Text>
        <View
          style={{
            height: 150,
            width: "85%",
            backgroundColor: theme.colors.inverseOnSurface,
            borderRadius: 20,
            borderColor: "purple",
            borderStyle: "dashed",
            marginTop: 10,
            borderWidth: 2,
            // border
            alignSelf: "center",
          }}
        ></View>
        <View
          style={{
            height: 325,
            width: "85%",
            backgroundColor: theme.colors.inverseOnSurface,
            borderRadius: 20,
            borderColor: "purple",
            borderStyle: "dashed",
            marginTop: 10,
            borderWidth: 2,
            // border
            alignSelf: "center",
          }}
        ></View>
        <View
          style={{
            height: 325,
            width: "85%",
            backgroundColor: theme.colors.inverseOnSurface,
            borderRadius: 20,
            borderColor: "purple",
            borderStyle: "dashed",
            marginTop: 10,
            borderWidth: 2,
            // border
            alignSelf: "center",
          }}
        ></View>
      </View>
    </ScrollView>
  )
}

export default UserPage
