import { ScrollView, Text, View } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'

export function Home() {
  return (
    <SafeAreaView>
      <ScrollView>
        <View
          style={{
            flex: 1,
            gap: 16,
            padding: 8,
          }}
        >
          <Text
            style={{ fontSize: 20, fontWeight: '500', alignSelf: 'center' }}
          >
            О приложении
          </Text>
          <View
            style={{
              gap: 12,
              padding: 20,
              backgroundColor: '#ffffff',
              borderRadius: 12,
            }}
          >
            <Text>Приложение отображает котировки с биржи Poloniex</Text>
            <Text>
              Для загрузки данных и их кеширования используется библиотека
              Tanstack Query, для валидации - Zod
            </Text>
            <Text>
              На экране «Котировки» данные обновляются каждые 5 секунд
            </Text>
            <Text>
              На экране «О приложении» обновления котировок не происходит, что
              можно проследить по сообщениям 'refetch' в консоли, переключаясь
              между экранами
            </Text>
            <Text>
              Для удобства тестирования на экране «Котировки» добавлены кнопки,
              фиксирующие состояние загрузки и/или ошибки, чтобы можно было
              посмотреть, как себя ведет приложение
            </Text>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  )
}
