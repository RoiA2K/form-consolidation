import { BebasNeue_400Regular } from "@expo-google-fonts/bebas-neue"
import { useFonts } from "expo-font"
import { router } from "expo-router"
import React from "react"
import {
  Keyboard,
  Pressable,
  TouchableWithoutFeedback,
  View,
} from "react-native"
import { Button, Text, TextInput, useTheme } from "react-native-paper"
import { SafeAreaView } from "react-native-safe-area-context"

const LoginPage = () => {
  const theme = useTheme()

  const [fonstLoaded] = useFonts({
    BebasNeue_400Regular,
  })

  if (!fonstLoaded) {
    return <Text>Loading...</Text>
  }

  return (
    <TouchableWithoutFeedback
      onPress={() => {
        Keyboard.dismiss()
      }}
    >
      <SafeAreaView>
        <Text
          variant="displayLarge"
          style={{
            fontFamily: "BebasNeue_400Regular",
            textAlign: "center",
            marginTop: 150,
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
          <TextInput
            label={"Username"}
            mode="outlined"
            style={{
              marginBottom: 10,
            }}
          />
          <TextInput
            label={"Password"}
            mode="outlined"
            secureTextEntry={true}
            style={{
              marginBottom: 10,
            }}
          />

          <Button
            mode="contained"
            onPress={() => {
              router.replace("/home")
            }}
            style={{
              marginVertical: 10,
              width: "85%",
              alignSelf: "center",
            }}
          >
            Login
          </Button>
          <Pressable
            style={{
              alignSelf: "center",
            }}
            onPress={() => {
              router.push("/register")
            }}
          >
            <Text>
              Don't have an account yet?{" "}
              <Text
                style={{
                  textDecorationLine: "underline",
                }}
              >
                Register Now.
              </Text>
            </Text>
          </Pressable>
        </View>
      </SafeAreaView>
    </TouchableWithoutFeedback>
  )
}

export default LoginPage
