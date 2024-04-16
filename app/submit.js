import { useEffect, useState } from "react"
import { Pressable } from "react-native"
import { List, Text } from "react-native-paper"
import { SafeAreaView } from "react-native-safe-area-context"
import axios from "../utils/axios/axios"

const SubmitForm = () => {
  const [formTitle, setFormTitle] = useState("Choose a Form")
  const [expanded, setExpanded] = useState(false)

  const [formTemplates, setFormTemplates] = useState([])

  const getFormTemplates = async () => {
    try {
      const res = await axios.get("/formtemplates/")
      setFormTemplates(res.data)
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    getFormTemplates()
  }, [])

  return (
    <SafeAreaView style={{}}>
      <Text variant="headlineMedium">Submit a Form</Text>

      <List.Accordion
        title={formTitle}
        expanded={expanded}
        onPress={() => {
          setExpanded(!expanded)
        }}
      >
        {formTemplates.map((formTemplate, i) => {
          return (
            <Pressable
              key={i}
              onPress={() => {
                setExpanded(!expanded)
                setFormTitle(formTemplate?.name)
              }}
            >
              <List.Item title={formTemplate?.name} />
            </Pressable>
          )
        })}
      </List.Accordion>
    </SafeAreaView>
  )
}

export default SubmitForm
