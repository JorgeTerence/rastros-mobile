import { collection, doc, getDoc } from 'firebase/firestore/lite';
import React, { useContext, useEffect, useState } from 'react';
import { FlatList, StyleSheet, Text, View } from 'react-native';
import { FirestoreContext } from '../../firebaseConfig';
import Body from '../components/Body';
import { palette } from '../theme/colors';

type Animal = { name: string; sub: string; asset: string };

const dummyData: Animal[] = [];

export default () => {
	const db = useContext(FirestoreContext);
	const [data, setData] = useState(dummyData);
	useEffect(() => {
		getDoc(doc(collection(db, 'summaries'), 'animals')).then(res =>
			setData(res.data()?.summary as Animal[])
		);
	}, []);
	return (
		<Body>
			<View style={{ width: '100%' }}>
				<Text style={styles.title}>Índex de Animais</Text>
				<FlatList
					data={data}
					renderItem={ListItem}
					keyExtractor={({ name }) => name}
					style={{ width: '100%', paddingTop: 5, marginBottom: 35, paddingBottom: 10 }}
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
		padding: 10,
		backgroundColor: palette.sand,
		alignItems: 'flex-start',
		justifyContent: 'center',
		borderRadius: 14,
		shadowColor: 'black',
		elevation: 2,
		marginBottom: 12,
		width: '80%',
		alignSelf: 'center',
	},
	title: {
		fontSize: 20,
		fontWeight: 'bold',
		textAlign: 'center',
		marginBottom: 16,
	},
});
