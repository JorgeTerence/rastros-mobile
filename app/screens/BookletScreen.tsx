import React from 'react';
import { Button } from 'react-native';
import * as Linking from 'expo-linking';
import Body from '../components/Body';
import { brand } from '../theme/colors';
import { Title } from '../components/Typography';

const bookletUri =
	'https://observatoriodabicicleta.org.br/uploads/2021/05/Cartilha-ciclista-SBO-Prefeitura-SBO.pdf';

export default () => (
	<Body>
		<Title>Cartilha do Ciclista SBO</Title>
		<Button
			title="Download"
			onPress={() => Linking.openURL(bookletUri)}
			color={brand.deepPool}
		/>
	</Body>
);
