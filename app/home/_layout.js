import { BebasNeue_400Regular, useFonts } from "@expo-google-fonts/bebas-neue"
import {
  DrawerContentScrollView,
  DrawerItem,
  DrawerItemList,
} from "@react-navigation/drawer"
import { DrawerActions } from "@react-navigation/native"
import { router, useNavigation } from "expo-router"
import { Drawer } from "expo-router/drawer"
import { Pressable, View } from "react-native"
import { GestureHandlerRootView } from "react-native-gesture-handler"
import { Avatar, Text, useTheme } from "react-native-paper"
import { SafeAreaView } from "react-native-safe-area-context"
import Ionicons from "react-native-vector-icons/Ionicons"

const CustomDrawerHeader = (props) => {
  const theme = useTheme()
  const navigation = useNavigation()

  const [fonstLoaded] = useFonts({
    BebasNeue_400Regular,
  })

  if (!fonstLoaded) {
    return <Text>Loading...</Text>
  }

  return (
    <SafeAreaView
      style={{
        height: 120,
        backgroundColor: theme.colors.primary,
      }}
    >
      <View
        style={{
          height: 20,
        }}
      ></View>
      <View
        style={{
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
        }}
      >
        <Pressable
          style={{
            marginLeft: 20,
          }}
          onPress={() => {
            navigation.dispatch(DrawerActions.openDrawer())
          }}
        >
          <Ionicons name="menu-outline" size={30} color={"white"} />
        </Pressable>
        <Text
          variant="headlineLarge"
          style={{
            fontFamily: "BebasNeue_400Regular",
            color: "white",
            marginLeft: 10,
          }}
        >
          A2K GROUP
        </Text>
      </View>
    </SafeAreaView>
  )
}

const CustomDrawer = (props) => {
  const theme = useTheme()

  return (
    <View style={{ flex: 1 }}>
      <SafeAreaView
        style={{
          backgroundColor: theme.colors.primary,
        }}
      >
        <View
          style={{
            marginTop: 20,
            width: 120,
            height: 120,
            alignSelf: "center",
            borderStyle: "dashed",
            borderWidth: 5,
            borderColor: "yellow",
            justifyContent: "center",
            borderRadius: 100,
          }}
        >
          <Avatar.Image
            source={{
              uri: "https://cdn4.iconfinder.com/data/icons/avatars-xmas-giveaway/128/batman_hero_avatar_comics-512.png",
            }}
            size={100}
            style={{
              alignSelf: "center",
            }}
          />
        </View>
        <Text
          variant="headlineMedium"
          style={{
            textAlign: "center",
            marginTop: 10,
            marginBottom: 20,
            fontFamily: "BebasNeue_400Regular",

            color: "white",
          }}
        >
          ALFREDO ROI
        </Text>
        <Text
          style={{
            textAlign: "center",
            color: "yellow",
            marginTop: -20,
          }}
        >
          Employee
        </Text>
      </SafeAreaView>
      <DrawerContentScrollView
        {...props}
        scrollEnabled={false}
        style={{
          marginTop: -30,
        }}
      >
        <DrawerItemList {...props} />
        <DrawerItem
          label={"Logout"}
          onPress={() => {
            router.replace("/")
          }}
          style={{
            marginTop: 20,
          }}
          labelStyle={{
            color: "tomato",
            fontSize: 20,
            marginLeft: -20,
          }}
          icon={() => {
            return <Ionicons name="log-out-outline" size={30} />
          }}
        />
      </DrawerContentScrollView>
    </View>
  )
}

const UserRouteHeader = () => {
  const theme = useTheme()
  const navigation = useNavigation()

  return (
    <View
      style={{
        height: 200,
        backgroundColor: theme.colors.primary,
      }}
    >
      <SafeAreaView>
        <Pressable
          style={{
            marginLeft: 20,
          }}
          onPress={() => {
            navigation.dispatch(DrawerActions.openDrawer())
          }}
        >
          <Ionicons name="menu-outline" size={35} color={"white"} />
        </Pressable>
      </SafeAreaView>
      <Avatar.Image
        source={{
          uri: "https://cdn4.iconfinder.com/data/icons/avatars-xmas-giveaway/128/batman_hero_avatar_comics-512.png",
        }}
        size={175}
        style={{
          alignSelf: "center",
        }}
      />
    </View>
  )
}

const HomeLayout = () => {
  const theme = useTheme()

  return (
    <GestureHandlerRootView
      style={{
        flex: 1,
      }}
    >
      <Drawer
        drawerContent={CustomDrawer}
        screenOptions={{
          drawerActiveTintColor: theme.colors.primary,
          // drawerHideStatusBarOnOpen: true,
          header: () => {
            return <CustomDrawerHeader />
          },
        }}
      >
        <Drawer.Screen
          name="index"
          options={{
            title: "Home",
            drawerIcon: () => {
              return <Ionicons name="home-outline" size={25} />
            },
            drawerLabelStyle: {
              fontSize: 20,
              marginLeft: -15,
            },
          }}
        />
        <Drawer.Screen
          name="forms"
          options={{
            title: "Forms",
            drawerIcon: () => {
              return <Ionicons name="document-text-outline" size={25} />
            },
            drawerLabelStyle: {
              fontSize: 20,
              marginLeft: -15,
            },
          }}
        />
        <Drawer.Screen
          name="user"
          options={{
            title: "User",
            header: () => {
              return <UserRouteHeader />
            },
            drawerIcon: () => {
              return <Ionicons name="person-outline" size={25} />
            },
            drawerLabelStyle: {
              fontSize: 20,
              marginLeft: -15,
            },
          }}
        />
      </Drawer>
    </GestureHandlerRootView>
  )
}

export default HomeLayout
