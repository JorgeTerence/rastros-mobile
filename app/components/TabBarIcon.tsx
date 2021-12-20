import React from 'react';
import { Ionicons } from '@expo/vector-icons';
import { ParamListBase, RouteProp } from '@react-navigation/native';
import type { PossibleIcons } from '../types/types';

type Prop = { route: RouteProp<ParamListBase, string> };

export default ({ route: { name } }: Prop) => {
	let iconName: PossibleIcons = 'settings';
	if (name == 'Início') iconName = 'home';
	else if (name == 'Índex') iconName = 'list';
	else if (name == 'Mapa') iconName = 'map';
	else if (name == 'Reportar') iconName = 'alert-circle';
	else if (name == 'Info') iconName = 'information-circle';
	else if (name == 'Cartilha') iconName = 'document';

	return <Ionicons name={iconName} color={'white'} size={22} />;
};
