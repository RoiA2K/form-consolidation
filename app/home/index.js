import React from "react"
import { View } from "react-native"
import { ScrollView } from "react-native-gesture-handler"
import { Avatar, Text, useTheme } from "react-native-paper"

const HomePage = () => {
  const theme = useTheme()

  const fetchData = async () => {
    try {
      console.log("yes")
    } catch (err) {
      console.log(err)
    }
  }

  return (
    <ScrollView
      style={{
        backgroundColor: "white",
      }}
      // refreshControl={<RefreshPage cb={fetchData} />}
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
