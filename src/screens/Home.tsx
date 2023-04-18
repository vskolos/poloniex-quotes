import { Text, View } from 'react-native'
import { useSafeAreaInsets } from 'react-native-safe-area-context'

export function Home() {
  const insets = useSafeAreaInsets()

  return (
    <View
      style={{
        flex: 1,
        justifyContent: 'space-between',
        alignItems: 'center',

        paddingTop: insets.top,
        paddingBottom: insets.bottom,
        paddingLeft: insets.left,
        paddingRight: insets.right,
      }}
    >
      <Text style={{ fontSize: 18, fontWeight: '500' }}>О приложении</Text>
    </View>
  )
}
