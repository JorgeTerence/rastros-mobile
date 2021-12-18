import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import IndexScreen from './IndexScreen';
import DataScreen from './DataScreen';

const Stack = createNativeStackNavigator();

export default () => (
	<Stack.Navigator
		initialRouteName="Index"
		screenOptions={{ headerShown: false }}
	>
		<Stack.Screen component={IndexScreen} name="Index" />
		<Stack.Screen component={DataScreen} name="Data" />
	</Stack.Navigator>
);
