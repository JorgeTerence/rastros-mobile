import React from 'react';
import { FlatList, StyleSheet, Text, View } from 'react-native';
import { brand, palette } from '../theme/colors';

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
	<View style={styles.container}>
		<Text style={styles.title}>Índex de Animais</Text>
		<FlatList
			data={animals}
			renderItem={ListItem}
			keyExtractor={({ name }) => name}
		/>
	</View>
);

type ListItemProps = { item: Animal };

const ListItem = ({ item }: ListItemProps) => (
	<View style={styles.listItem}>
		<Text>{item.name}</Text>
		<Text>{item.alt}</Text>
	</View>
);

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#fff',
		alignItems: 'center',
		justifyContent: 'center',
		paddingTop: 12,
	},
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
