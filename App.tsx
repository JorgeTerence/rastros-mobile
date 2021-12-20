import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import React from 'react';
import TabBarIcon from './app/components/TabBarIcon';
import HomeScreen from './app/screens/HomeScreen';
import IndexDataScreen from './app/components/IndexTab';
import ReportScreen from './app/screens/ReportScreen';
import MapScreen from './app/screens/MapScreen';
import { brand } from './app/theme/colors';

const Tab = createMaterialBottomTabNavigator();

export default () => (
	<NavigationContainer>
		<Tab.Navigator
			initialRouteName="Início"
			shifting={true}
			barStyle={{ backgroundColor: brand.ocean }}
			screenOptions={({ route }) => ({
				tabBarIcon: () => <TabBarIcon route={route} />,
			})}
		>
			<Tab.Screen name="Início" component={HomeScreen} />
			<Tab.Screen name="Índex" component={IndexDataScreen} />
			<Tab.Screen name="Mapa" component={MapScreen} />
			<Tab.Screen name="Reportar" component={ReportScreen} />
		</Tab.Navigator>
	</NavigationContainer>
);
