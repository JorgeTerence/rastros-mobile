import React from 'react';
import { Ionicons } from '@expo/vector-icons';
import { ParamListBase, RouteProp } from '@react-navigation/native';

type PossibleIcons =
	| 'home'
	| 'list'
	| 'map'
	| 'information-circle'
	| 'settings';

type Props = { route: RouteProp<ParamListBase, string> }

export default ({ route: r }: Props) => {
	let iconName: PossibleIcons = 'settings';
	if (r.name == 'Início') iconName = 'home';
	else if (r.name == 'Índex') iconName = 'list';
	else if (r.name == 'Mapa') iconName = 'map';
	else if (r.name == 'Info') iconName = 'information-circle';

	return <Ionicons name={iconName} color={'white'} size={22} />;
};
