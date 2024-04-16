import { BebasNeue_400Regular } from "@expo-google-fonts/bebas-neue"
import { Quicksand_400Regular } from "@expo-google-fonts/quicksand"
import { useFonts } from "expo-font"
import { Stack } from "expo-router"
import React from "react"
import { PaperProvider, Text } from "react-native-paper"
import { AuthProvider } from "../utils/context/AuthContext"

const RootLayout = () => {
  const [fonstLoaded] = useFonts({
    BebasNeue_400Regular,
    Quicksand_400Regular,
  })

  if (!fonstLoaded) {
    return <Text>Loading...</Text>
  }

  return (
    <PaperProvider settings={{ rippleEffectEnabled: true }}>
      <AuthProvider>
        <Stack
          screenOptions={{
            headerShown: false,
          }}
        >
          <Stack.Screen name="index" />
          <Stack.Screen
            name="submit"
            options={{
              presentation: "modal",
              headerShown: true,
            }}
          />
          <Stack.Screen name="home" />
          <Stack.Screen name="login" />
        </Stack>
      </AuthProvider>
    </PaperProvider>
  )
}

export default RootLayout
