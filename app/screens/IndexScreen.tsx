import React from 'react';
import { FlatList, StyleSheet, Text, View } from 'react-native';
import { palette } from '../theme/colors';
import Body from '../components/Body';

type Animal = { name: string; alt: string };

const animals: Animal[] = [
	{ name: 'Capivara', alt: 'Hydrochoerus hydrochaeris' },
	{ name: 'Onça-pintada', alt: 'Panthera onca' },
	{ name: 'Tamanduá-bandeira', alt: 'Myrmecophaga tridactyla' },
	{ name: 'Cobra-coral', alt: 'Micrurus frontalis' },
	{ name: 'Téiu', alt: 'Salvator merianae' },
	{ name: 'Cágado-de-barbicha', alt: 'Phrynops geoffroanus' },
];

export default () => (
	<Body>
		<View>
			<Text style={styles.title}>Índex de Animais</Text>
			<FlatList
				data={animals}
				renderItem={ListItem}
				keyExtractor={({ name }) => name}
			/>
		</View>
	</Body>
);

type ListItemProps = { item: Animal };

const ListItem = ({ item }: ListItemProps) => (
	<View style={styles.listItem}>
		<Text>{item.name}</Text>
		<Text>{item.alt}</Text>
	</View>
);

const styles = StyleSheet.create({
	listItem: {
		padding: 6,
		backgroundColor: palette.sand,
		alignItems: 'flex-start',
		justifyContent: 'center',
		borderRadius: 10,
		shadowColor: 'black',
		elevation: 2,
		marginBottom: 6,
	},
	title: {
		fontSize: 20,
		fontWeight: 'bold',
		textAlign: 'center',
		marginBottom: 16,
	},
});
