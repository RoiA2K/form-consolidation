import { BebasNeue_400Regular } from "@expo-google-fonts/bebas-neue"
import axios from "axios"
import { useFonts } from "expo-font"
import { useEffect, useState } from "react"
import { FlatList } from "react-native"
import { Card, Text, useTheme } from "react-native-paper"

const dummyData = [
  { title: "Test Title" },
  { title: "My Title" },
  { title: "Another Title" },
]

const FormDashboard = () => {
  const theme = useTheme()

  const [fonstLoaded] = useFonts({
    BebasNeue_400Regular,
  })

  if (!fonstLoaded) {
    return <Text>Loading...</Text>
  }

  const [formData, setFormData] = useState([])

  const getForms = async () => {
    try {
      const res = await axios.get("http://192.168.1.111:4000/api/forms")
      setFormData(res.data.forms)
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    getForms()
  }, [])

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
