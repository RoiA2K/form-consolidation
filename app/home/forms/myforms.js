import React from "react"
import { FlatList } from "react-native"
import { Card, Text, useTheme } from "react-native-paper"

const dummyData = [
  { title: "Test Title" },
  { title: "My Title" },
  { title: "Another Title" },
]

const submit = () => {
  const theme = useTheme()

  return (
    <FlatList
      data={dummyData}
      showsVerticalScrollIndicator={false}
      renderItem={({ item }) => (
        <Card
          style={{
            margin: 10,
            backgroundColor: theme.colors.primaryContainer,
          }}
        >
          <Card.Title title={item.title} />
          <Card.Cover
            source={{ uri: "https://picsum.photos/700" }}
            style={{
              margin: 20,
            }}
          />
          <Card.Content>
            <Text variant="titleLarge">{item.title}</Text>
            <Text variant="bodyMedium">Card content</Text>
          </Card.Content>
        </Card>
      )}
    />
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
