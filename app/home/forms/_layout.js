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
          margin: 10,
          marginBottom: 10,
          height: 60,
          paddingVertical: 10,
          paddingBottom: 10,
          borderRadius: 20,
          backgroundColor: "#8d69b8",
        },
        tabBarItemStyle: {
          borderRadius: 100,
          marginHorizontal: 50,
        },
        // tabBarActiveBackgroundColor: theme.colors.primary,
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: "Forms",
          tabBarLabelStyle: {
            color: "black",
          },
          tabBarIcon: ({ focused, color, size }) => {
            let iconName = "document-text-outline"

            return <Ionicons name={iconName} size={size} color={"black"} />
          },
        }}
      />
      <Tabs.Screen
        name="myforms"
        options={{
          title: "My Forms",
          tabBarLabelStyle: {
            color: "black",
          },
          tabBarBadge: 3,
          tabBarIcon: ({ focused, color, size }) => {
            let iconName = "file-tray-full-outline"

            return <Ionicons name={iconName} size={size} color={"black"} />
          },
        }}
      />
    </Tabs>
  )
}

export default FormsLayout
