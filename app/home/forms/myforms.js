import React, { useContext } from "react"
import { FlatList } from "react-native"
import { Card, Text, useTheme } from "react-native-paper"
import AuthContext from "../../../utils/context/AuthContext"

const submit = () => {
  const { dummyData } = useContext(AuthContext)

  const dummyyData = [
    { title: dummyData },
    { title: "My Title" },
    { title: "Another Title" },
  ]

  const theme = useTheme()

  return (
    <>
      <Text
        variant="displayMedium"
        style={{
          fontFamily: "BebasNeue_400Regular",
          width: "95%",
          alignSelf: "center",
          marginTop: 20,
        }}
      >
        My Forms
      </Text>
      <FlatList
        data={dummyyData}
        showsVerticalScrollIndicator={false}
        renderItem={({ item }) => (
          <Card
            style={{
              margin: 10,
              backgroundColor: theme.colors.primaryContainer,
            }}
          >
            <Card.Cover
              source={{ uri: "https://picsum.photos/700" }}
              style={{
                // margin: 10,
                borderRadius: 0,
                borderTopLeftRadius: 10,
                borderTopRightRadius: 10,
              }}
            />
            <Card.Content>
              <Text
                variant="titleLarge"
                style={{
                  marginVertical: 10,
                  fontFamily: "BebasNeue_400Regular",
                }}
              >
                {item.title}
              </Text>
              <Text variant="bodyMedium">
                Officia anim nulla nisi in qui. Veniam voluptate aliqua
                incididunt irure. Labore ea magna cillum in tempor deserunt
                velit aute aliquip culpa incididunt.
              </Text>
            </Card.Content>
          </Card>
        )}
      />
    </>
    // <ScrollView>
    //   <View>

    //     <View
    //       style={{
    //         width: "85%",
    //         height: 75,

    //         backgroundColor: theme.colors.primaryContainer,

    //         alignSelf: "center",
    //         borderRadius: 10,
    //       }}
    //     >
    //       <Text variant="bodyLarge">My Form</Text>
    //     </View>
    //     <View
    //       style={{
    //         width: "85%",
    //         height: 75,

    //         backgroundColor: theme.colors.primaryContainer,

    //         alignSelf: "center",
    //         borderRadius: 10,
    //       }}
    //     ></View>
    //     <View
    //       style={{
    //         width: "85%",
    //         height: 75,

    //         backgroundColor: theme.colors.primaryContainer,

    //         alignSelf: "center",
    //         borderRadius: 10,
    //       }}
    //     ></View>
    //   </View>
    // </ScrollView>
  )
}

export default submit
