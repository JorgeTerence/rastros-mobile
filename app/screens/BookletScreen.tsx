import React from 'react';
import { StyleSheet, Button, Text } from 'react-native';
import * as Linking from 'expo-linking';
import Body from '../components/Body';
import { brand } from '../theme/colors';

const bookletUri =
	'https://observatoriodabicicleta.org.br/uploads/2021/05/Cartilha-ciclista-SBO-Prefeitura-SBO.pdf';

export default () => (
	<Body>
		<Text style={styles.title}>Cartilha do Ciclista SBO</Text>
		<Button
			title="Download"
			onPress={() => Linking.openURL(bookletUri)}
			color={brand.deepPool}
		/>
	</Body>
);

const styles = StyleSheet.create({
	title: {
		fontSize: 26,
		fontWeight: 'bold',
		marginBottom: 35,
	},
});
