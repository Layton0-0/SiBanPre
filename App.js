import { NavigationContainer, StackActions } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import React from 'react'

import MyPageMain from './MyPage';
import Activity from './Activity'


const Stack = createStackNavigator();


const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='MYPAGE'>
        <Stack.Screen name="MYPAGE" component={MyPageMain} />
        <Stack.Screen name="ACTIVITY" component={Activity} />

      </Stack.Navigator>


    </NavigationContainer>
  );
}
export default App;

