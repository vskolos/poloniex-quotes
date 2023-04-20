import { ReactNode } from 'react'
import { Text } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'

type Props = { title: string; children: ReactNode }

export function Layout({ title, children }: Props) {
  return (
    <SafeAreaView style={{ flex: 1, gap: 16, padding: 8 }}>
      <Text style={{ fontSize: 20, fontWeight: '500', alignSelf: 'center' }}>
        {title}
      </Text>
      {children}
    </SafeAreaView>
  )
}
