import { FinanceChartIcon, HouseIcon } from '@/icons'
import { Home, Quotes } from '@/screens'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { NavigationContainer } from '@react-navigation/native'

const Tab = createBottomTabNavigator()

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        initialRouteName="Home"
        screenOptions={{ headerShown: false }}
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
            tabBarLabel: 'Котировки',
            tabBarIcon: ({ color }) => <FinanceChartIcon color={color} />,
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  )
}
