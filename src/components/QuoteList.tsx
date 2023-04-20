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

const getItem = (data: QuoteData, index: number) => Object.entries(data)[index]
const getItemCount = (data: QuoteData) => Object.entries(data).length

export function QuoteList() {
  const [isLoading, setIsLoading] = useState(false)
  const [isError, setIsError] = useState(false)

  const ticker = useQuoteTicker()

  return (
    <>
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
              <View
                key={name}
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
                  <Text
                    style={{
                      fontSize: 20,
                      fontWeight: '500',
                    }}
                  >
                    {name}
                  </Text>
                  <Text>Last: {data.last}</Text>
                  <Text>High: {data.highestBid}</Text>
                </View>
                <View
                  style={{
                    padding: 8,
                    borderRadius: 8,
                    backgroundColor:
                      parseFloat(data.percentChange) > 0
                        ? '#16a34a'
                        : parseFloat(data.percentChange) < 0
                        ? '#dc2626'
                        : '#525252',
                  }}
                >
                  <Text
                    style={{
                      color: '#ffffff',
                      fontSize: 20,
                      fontWeight: '700',
                    }}
                  >
                    {parseFloat(data.percentChange) > 0 && '+'}
                    {data.percentChange.replace(/([0-9]{2})0+$/, '$1')}%
                  </Text>
                </View>
              </View>
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
    </>
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
