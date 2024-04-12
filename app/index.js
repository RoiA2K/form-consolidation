import { router } from "expo-router"
import { Image, View } from "react-native"
import { Button, Text } from "react-native-paper"
import { SafeAreaView } from "react-native-safe-area-context"

const WelcomePage = () => {
  return (
    <SafeAreaView
      style={{
        height: "100%",
        backgroundColor: "white",
      }}
    >
      <View
        style={{
          height: "100%",
        }}
      >
        <Image
          source={require("./images/welcome-banner.png")}
          style={{
            width: 300,
            height: 200,
            marginTop: 75,
            alignSelf: "center",
          }}
        />
        <Text
          variant="displayLarge"
          style={{
            fontFamily: "BebasNeue_400Regular",
            textAlign: "center",
            marginTop: 30,
          }}
        >
          A2K
        </Text>
        <Text
          variant="headlineLarge"
          style={{
            fontFamily: "Quicksand_400Regular",
            alignSelf: "center",
          }}
        >
          Form Consolidation
        </Text>
        <View
          style={{
            marginTop: 20,
            width: "75%",
            alignSelf: "center",
          }}
        >
          <Button
            mode="contained"
            onPress={() => {
              router.replace("/login")
            }}
            style={{
              marginVertical: 10,
              width: "85%",
              alignSelf: "center",
            }}
          >
            Get Started
          </Button>
        </View>
      </View>
    </SafeAreaView>
  )
}

export default WelcomePage
