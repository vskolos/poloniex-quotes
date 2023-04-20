import { useQuoteTicker } from '@/hooks'
import { QuoteData } from '@/schemas'
import { useRef, useState } from 'react'
import {
  Animated,
  Pressable,
  ScrollView,
  Text,
  View,
  VirtualizedList,
} from 'react-native'
import { QuoteCard } from './QuoteCard'

const getItem = (data: QuoteData, index: number) => Object.entries(data)[index]
const getItemCount = (data: QuoteData) => Object.entries(data).length

export function QuoteList() {
  const [isLoading, setIsLoading] = useState(false)
  const [isError, setIsError] = useState(false)

  const ticker = useQuoteTicker()

  return (
    <View
      style={{
        flex: 1,
        gap: 8,
        alignItems: 'center',
      }}
    >
      {(ticker.isError || isError) && (
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            padding: 20,
            gap: 16,
            backgroundColor: '#ffffff',
            borderRadius: 12,
          }}
        >
          <Text style={{ fontSize: 16, color: '#dc2626' }}>
            Ошибка загрузки данных...
          </Text>
        </View>
      )}

      {ticker.isLoading || isLoading ? (
        <QuoteListPlaceholder />
      ) : ticker.data ? (
        <View style={{ alignSelf: 'stretch', flexShrink: 1 }}>
          <VirtualizedList
            initialNumToRender={10}
            contentContainerStyle={{ gap: 8 }}
            data={ticker.data}
            getItem={getItem}
            getItemCount={getItemCount}
            keyExtractor={(item) => item[0]}
            renderItem={({ item: [name, data] }) => (
              <QuoteCard name={name} data={data} />
            )}
          />
        </View>
      ) : (
        <Text>Нет данных для отображения</Text>
      )}
      <View
        style={{
          marginTop: 'auto',
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'center',
          gap: 16,
          padding: 8,
        }}
      >
        <Pressable
          style={{
            backgroundColor: '#ea580c',
            padding: 8,
            borderRadius: 8,
          }}
          onPress={() => setIsLoading((isLoading) => !isLoading)}
        >
          <Text style={{ color: '#ffffff' }}>
            {isLoading ? 'Restore loading' : 'Force loading'}
          </Text>
        </Pressable>
        <Pressable
          style={{
            backgroundColor: '#dc2626',
            padding: 8,
            borderRadius: 8,
          }}
          onPress={() => setIsError((isError) => !isError)}
        >
          <Text style={{ color: '#ffffff' }}>
            {isError ? 'Restore error' : 'Force error'}
          </Text>
        </Pressable>
      </View>
    </View>
  )
}

function QuoteListPlaceholder() {
  const pulseOpacity = useRef(new Animated.Value(1)).current

  Animated.loop(
    Animated.sequence([
      Animated.timing(pulseOpacity, {
        toValue: 0.5,
        duration: 1000,
        useNativeDriver: true,
      }),
      Animated.timing(pulseOpacity, {
        toValue: 1,
        duration: 1000,
        useNativeDriver: true,
      }),
    ])
  ).start()

  return (
    <View style={{ alignSelf: 'stretch', flexShrink: 1 }}>
      <ScrollView contentContainerStyle={{ gap: 8 }}>
        {new Array(10).fill(null).map((_, index) => (
          <View
            key={index}
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              padding: 20,
              gap: 16,
              backgroundColor: '#ffffff',
              borderRadius: 12,
            }}
          >
            <View style={{ gap: 4, marginEnd: 'auto' }}>
              <Animated.View
                style={{
                  height: 26,
                  width: 100,
                  opacity: pulseOpacity,
                  backgroundColor: '#cccccc',
                  borderRadius: 8,
                }}
              />
              <Animated.View
                style={{
                  height: 16,
                  width: 150,
                  opacity: pulseOpacity,
                  backgroundColor: '#cccccc',
                  borderRadius: 8,
                }}
              />
              <Animated.View
                style={{
                  height: 16,
                  width: 150,
                  opacity: pulseOpacity,
                  backgroundColor: '#cccccc',
                  borderRadius: 8,
                }}
              />
            </View>
            <Animated.View
              style={{
                height: 26,
                width: 50,
                opacity: pulseOpacity,
                backgroundColor: '#cccccc',
                borderRadius: 8,
              }}
            />
          </View>
        ))}
      </ScrollView>
    </View>
  )
}
