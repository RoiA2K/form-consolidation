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
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",

            width: "85%",
            height: 150,

            marginTop: 20,

            backgroundColor: theme.colors.inversePrimary,

            alignSelf: "center",

            borderRadius: 10,
            padding: 20,
          }}
        >
          <View
            style={{
              alignSelf: "center",
            }}
          >
            <Text
              variant="bodyLarge"
              style={{
                marginLeft: 10,
                color: "#808080",
              }}
            >
              Welcome to A2K Group
            </Text>
            <Text
              variant="headlineMedium"
              style={{
                marginLeft: 10,
                fontFamily: "BebasNeue_400Regular",
              }}
            >
              Alfredo Roi B. Naluz
            </Text>
            <Text
              variant="bodyLarge"
              style={{
                marginLeft: 10,
                color: "#808080",
              }}
            >
              Employee
            </Text>
          </View>
          <Avatar.Text
            size={60}
            label="A"
            style={{
              alignSelf: "center",
            }}
          />
        </View>
        <Text
          variant="displaySmall"
          style={{
            fontFamily: "BebasNeue_400Regular",
            width: "85%",
            alignSelf: "center",
            marginTop: 20,
          }}
        >
          Dashboard
        </Text>
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
