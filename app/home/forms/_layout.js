import { Tabs } from "expo-router"
import React from "react"
import { useTheme } from "react-native-paper"
import Ionicons from "react-native-vector-icons/Ionicons"

const FormsLayout = () => {
  const theme = useTheme()

  return (
    <Tabs
      screenOptions={{
        headerShown: false,
        tabBarStyle: {
          backgroundColor: theme.colors.inversePrimary,
        },
        tabBarLabelStyle: {
          color: 'black',
          fontFamily: 'BebasNeue_400Regular',
          letterSpacing: 2,
          fontSize: 14
        },
        tabBarActiveBackgroundColor: theme.colors.primaryContainer,

        // tabBarActiveTintColor: "purple",
        // tabBarActiveBackgroundColor: theme.colors.primary,
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: "Forms",
          tabBarIcon: () => {
            return (
              <Ionicons
                name={"document-text-outline"}
                size={30}
                color={"black"}
              />
            )
          },
        }}
      />

      <Tabs.Screen
        name="myforms"
        options={{
          title: "My Forms",
          tabBarBadge: 3,
          tabBarIcon: () => {
            return (
              <Ionicons
                name={"file-tray-full-outline"}
                size={30}
                color={"black"}
              />
            )
          },
        }}
      />
    </Tabs>
  )
}

export default FormsLayout
