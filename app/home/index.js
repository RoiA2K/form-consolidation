import { router } from "expo-router"
import React from "react"
import { TouchableHighlight, View } from "react-native"
import { ScrollView } from "react-native-gesture-handler"
import { Avatar, Icon, Text, useTheme } from "react-native-paper"

const HomePage = () => {
  const theme = useTheme()

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

          <Avatar.Image
            source={{
              uri: "https://cdn4.iconfinder.com/data/icons/avatars-xmas-giveaway/128/batman_hero_avatar_comics-512.png",
            }}
            size={60}
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
        <TouchableHighlight
          underlayColor={theme.colors.primary}
          style={{
            width: "85%",
            height: 75,

            backgroundColor: theme.colors.inversePrimary,
            alignSelf: "center",

            borderRadius: 10,
            borderWidth: 1,
            borderStyle: "dashed",
            marginTop: 20,
            padding: 20,
            paddingHorizontal: 50,
          }}
          onPress={() => {
            router.push("/submit")
          }}
        >
          <View
            style={{
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
            }}
          >
            <Text
              variant="headlineSmall"
              style={{
                flex: 4,
              }}
            >
              Submit a Form
            </Text>
            <View
              style={{
                flex: 1,
              }}
            >
              <Icon source={"upload"} size={40} />
            </View>
          </View>
        </TouchableHighlight>
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
