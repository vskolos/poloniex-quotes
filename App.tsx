import { FinanceChartIcon, HouseIcon } from '@/icons'
import { Home, Quotes } from '@/screens'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { NavigationContainer } from '@react-navigation/native'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { SafeAreaProvider } from 'react-native-safe-area-context'

const Tab = createBottomTabNavigator()
const queryClient = new QueryClient()

export default function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <SafeAreaProvider>
        <NavigationContainer>
          <Tab.Navigator
            initialRouteName="Home"
            screenOptions={{
              headerShown: false,
            }}
          >
            <Tab.Screen
              name="Home"
              component={Home}
              options={{
                tabBarLabel: 'О приложении',
                tabBarIcon: ({ color }) => <HouseIcon color={color} />,
              }}
            />
            <Tab.Screen
              name="Quotes"
              component={Quotes}
              options={{
                unmountOnBlur: true,
                tabBarLabel: 'Котировки',
                tabBarIcon: ({ color }) => <FinanceChartIcon color={color} />,
              }}
            />
          </Tab.Navigator>
        </NavigationContainer>
      </SafeAreaProvider>
    </QueryClientProvider>
  )
}
