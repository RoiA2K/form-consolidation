import { useCallback, useEffect, useState } from "react"
import { FlatList, View } from "react-native"
import { RefreshControl } from "react-native-gesture-handler"
import { Card, Text, useTheme } from "react-native-paper"
import axios from "../../../utils/axios/axios"

const FormDashboard = () => {
  const theme = useTheme()

  const [formData, setFormData] = useState([])
  const [refreshing, setRefreshing] = useState(false)

  const getForms = async () => {
    try {
      const res = await axios.get("/forms/")
      setFormData(res.data)
    } catch (error) {
      console.log(error)
    }
  }

  const onRefresh = useCallback(async () => {
    setRefreshing(true)
    getForms().then(() => {
      setRefreshing(false)
    })
  }, [])

  useEffect(() => {
    getForms()
  }, [])

  return (
    <FlatList
      data={formData}
      showsVerticalScrollIndicator={false}
      refreshControl={
        <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
      }
      numColumns={2}
      contentContainerStyle={{
        alignItems: "center",
        display: "flex",
        alignSelf: "center",
      }}
      renderItem={({ item }) => (
        <Card
          style={{
            backgroundColor: theme.colors.primaryContainer,
            marginHorizontal: 10,
            width: "42.5%",
            marginVertical: 10,
            height: 250,
          }}
          onLongPress={() => {}}
        >
          <Card.Cover
            source={{ uri: "https://picsum.photos/700" }}
            style={{
              // margin: 10,
              borderRadius: 0,
              borderTopLeftRadius: 10,
              borderTopRightRadius: 10,
              height: "40%",
            }}
          />
          <Card.Content>
            <Text
              variant="titleMedium"
              style={{
                marginVertical: 10,
                fontFamily: "BebasNeue_400Regular",
              }}
            >
              {item.title}
            </Text>
            <View
              style={{
                height: 100,
              }}
            >
              <Text variant="bodySmall" numberOfLines={5}>
                Officia anim nulla nisi in qui. Veniam voluptate aliqua
                incididunt irure. Labore ea magna cillum in tempor deserunt
                velit aute aliquip culpa incididunt.
              </Text>
            </View>
          </Card.Content>
        </Card>
      )}
    />

    // <ScrollView>
    //   <View>
    //     <View
    //       style={{
    //         width: "85%",
    //         alignSelf: "center",
    //         marginTop: 20,
    //       }}
    //     >
    //       <Text
    //         variant="displaySmall"
    //         style={{
    //           fontFamily: "BebasNeue_400Regular",
    //         }}
    //       >
    //         Form Dashboard
    //       </Text>
    //       <Searchbar
    //         placeholder="Search for a form"
    //         style={{
    //           marginVertical: 10,
    //         }}
    //       />
    //     </View>

    //     <View
    //       style={{
    //         display: "flex",
    //         flexDirection: "row",
    //         flexWrap: "wrap",
    //         width: "85%",
    //         alignSelf: "center",
    //         marginTop: 10,
    //         justifyContent: "space-between",
    //       }}
    //     >
    //       {formData.map((form, i) => (
    //         <View
    //           key={i}
    //           style={{
    //             display: "flex",

    //             alignItems: "center",
    //             justifyContent: "space-between",

    //             width: 167.5,
    //             height: 200,

    //             backgroundColor: theme.colors.primaryContainer,

    //             borderRadius: 10,
    //             marginTop: 20,
    //             marginBottom: 20,
    //             padding: 20,
    //           }}
    //         >
    //           <Image
    //             source={{
    //               uri: "https://drive.usercontent.google.com/download?id=1WZ3M0zGIBZOmw4MXgD35h-noTwFooqwx&export=download&authuser=0&confirm=t&uuid=e6ebb0b3-aa50-49c7-9ba9-934917adbbf7&at=APZUnTXp9qLdzde7Fg0pU3sZpWo3:1712213756221",
    //             }}
    //             style={{
    //               width: 100,
    //               height: 100,

    //               marginTop: -50,
    //             }}
    //           />
    //           <Text
    //             variant="bodyLarge"
    //             style={{
    //               textAlign: "center",
    //               minHeight: 50,
    //             }}
    //           >
    //             {form.form_name}
    //           </Text>
    //           <Button
    //             mode="contained"
    //             onPress={() => {
    //               router.push("/home/forms/myforms")
    //             }}
    //             style={{}}
    //           >
    //             Fill Up
    //           </Button>
    //         </View>
    //       ))}
    //     </View>
    //   </View>
    // </ScrollView>
  )
}

export default FormDashboard
