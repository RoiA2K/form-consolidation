import { useCallback, useState } from "react"
import { RefreshControl } from "react-native-gesture-handler"

const RefreshPage = (props) => {
  const [refreshing, setRefreshing] = useState(false)

  const onRefresh = useCallback(async () => {
    setRefreshing(true)
    props?.cb().then(() => {
      setRefreshing(false)
    })
  }, [])

  return <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
}

export default RefreshPage
