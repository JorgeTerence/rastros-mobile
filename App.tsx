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

const Tab = createMaterialBottomTabNavigator();

type PossibleIcons =
	| 'home'
	| 'list'
	| 'map'
	| 'information-circle'
	| 'settings';

export default () => (
	<NavigationContainer>
		<Tab.Navigator
			initialRouteName="Início"
			shifting={true}
			barStyle={{ backgroundColor: brand.ocean }}
			screenOptions={({ route }) => ({ tabBarIcon: () => iconSetup(route) })}
		>
			<Tab.Screen name="Início" component={HomeScreen} />
			<Tab.Screen name="Índex" component={IndexDataScreen} />
		</Tab.Navigator>
	</NavigationContainer>
);

const iconSetup = (route: RouteProp<ParamListBase, string>) => {
	let iconName: PossibleIcons = 'settings';
	if (route.name == 'Início') iconName = 'home';
	else if (route.name == 'Índex') iconName = 'list';
	else if (route.name == 'Mapa') iconName = 'map';
	else if (route.name == 'Info') iconName = 'information-circle';

	return <Ionicons name={iconName} color={'white'} size={22} />;
};
