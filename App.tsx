import { Ionicons } from '@expo/vector-icons';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import {
	NavigationContainer,
	ParamListBase,
	RouteProp,
} from '@react-navigation/native';
import React from 'react';
import HomeScreen from './app/screens/HomeScreen';
import IndexDataScreen from './app/screens/IndexDataScreen';
import { brand } from './app/theme/colors';
import TabBarIcon from './app/components/TabBarIcon';

const Tab = createMaterialBottomTabNavigator();

export default () => (
	<NavigationContainer>
		<Tab.Navigator
			initialRouteName="Início"
			shifting={true}
			barStyle={{ backgroundColor: brand.ocean }}
			screenOptions={({ route }) => ({ tabBarIcon: () => <TabBarIcon route={route} /> })}
		>
			<Tab.Screen name="Início" component={HomeScreen} />
			<Tab.Screen name="Índex" component={IndexDataScreen} />
		</Tab.Navigator>
	</NavigationContainer>
);
