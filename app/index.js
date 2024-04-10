import { BebasNeue_400Regular } from "@expo-google-fonts/bebas-neue"
import { Quicksand_400Regular } from "@expo-google-fonts/quicksand"
import { useFonts } from "expo-font"
import { router } from "expo-router"
import { Image, View } from "react-native"
import { Button, Text } from "react-native-paper"
import { SafeAreaView } from "react-native-safe-area-context"

const WelcomePage = () => {
  const [fonstLoaded] = useFonts({
    BebasNeue_400Regular,
    Quicksand_400Regular,
  })

  if (!fonstLoaded) {
    return <Text>Loading...</Text>
  }

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
              router.push("/login")
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
