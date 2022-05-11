import { NavigationContainer, StackActions } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import React from 'react'

import MyPageMain from './screens/MyPage/MyPage';
import Activity from './screens/MyPage/Activity';
import ChangePhoto from './screens/MyPage/ChangePhoto';


const Stack = createStackNavigator();


const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='MYPAGE'>
        <Stack.Screen name="MYPAGE" component={MyPageMain} />
        <Stack.Screen name="ACTIVITY" component={Activity} />
        <Stack.Screen name="CHANGEPHOTO" component={ChangePhoto} />

      </Stack.Navigator>


    </NavigationContainer>
  );
}
export default App;

