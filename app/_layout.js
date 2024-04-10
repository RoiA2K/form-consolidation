import { Stack } from "expo-router"
import React from "react"
import { PaperProvider } from "react-native-paper"

const RootLayout = () => {
  return (
    <PaperProvider settings={{ rippleEffectEnabled: true }}>
      <Stack
        screenOptions={{
          headerShown: false,
        }}
      >
        <Stack.Screen name="index" />
        <Stack.Screen name="home" />
        <Stack.Screen name="login" />
      </Stack>
    </PaperProvider>
  )
}

export default RootLayout
