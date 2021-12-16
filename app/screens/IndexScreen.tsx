import React, { useState, useEffect, useContext } from 'react';
import { FlatList, StyleSheet, Text, View } from 'react-native';
import { getDoc, collection, doc } from 'firebase/firestore/lite';
import { FirestoreContext } from '../../firebaseConfig';
import { palette } from '../theme/colors';
import Body from '../components/Body';

type Animal = { name: string; sub: string; asset: string };

const dummyData: Animal[] = [{ name: '', sub: '', asset: '' }];

export default () => {
	const db = useContext(FirestoreContext);
	const [data, setData] = useState(dummyData);
	useEffect(() => {
		getDoc(doc(collection(db, 'summaries'), 'animals'))
			.then(res => setData(res.data()?.summary as Animal[]))
	}, []);
	return (
		<Body>
			<View>
				<Text style={styles.title}>Índex de Animais</Text>
				<FlatList
					data={data}
					renderItem={ListItem}
					keyExtractor={({ name }) => name}
				/>
			</View>
		</Body>
	);
};

type ListItemProps = { item: Animal };

const ListItem = ({ item }: ListItemProps) => (
	<View style={styles.listItem}>
		<Text>{item.name}</Text>
		<Text>{item.sub}</Text>
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
