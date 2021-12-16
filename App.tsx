import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import { Ionicons } from '@expo/vector-icons';
import React from 'react';
import HomeScreen from './app/screens/HomeScreen';
import { brand } from './app/theme/colors';
import IndexScreen from './app/screens/IndexScreen';

const Tab = createMaterialBottomTabNavigator();

export default () => (
	<NavigationContainer>
		<Tab.Navigator
			initialRouteName="Início"
			shifting={true}
			barStyle={{ backgroundColor: brand.ocean }}
			screenOptions={({ route }) => ({
				tabBarIcon: () => {
					// Setup tab icons
					type PossibleIcons =
						| 'home'
						| 'list'
						| 'map'
						| 'information-circle'
						| 'settings';
					let iconName: PossibleIcons = 'settings';
					if (route.name == 'Início') iconName = 'home';
					else if (route.name == 'Índex') iconName = 'list';
					else if (route.name == 'Mapa') iconName = 'map';
					else if (route.name == 'Info') iconName = 'information-circle';

					return <Ionicons name={iconName} color={'white'} size={22} />;
				},
			})}
		>
			<Tab.Screen name="Início" component={HomeScreen} />
			<Tab.Screen name="Índex" component={IndexScreen} />
		</Tab.Navigator>
	</NavigationContainer>
);
