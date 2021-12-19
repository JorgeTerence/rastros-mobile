import { collection, doc, getDoc } from 'firebase/firestore/lite';
import React, { useContext, useEffect, useState } from 'react';
import { FlatList, StyleSheet, Text } from 'react-native';
import { FirestoreContext } from '../../firebaseConfig';
import Body from '../components/Body';
import IndexItem from '../components/IndexItem';
import type { SummaryItem } from '../types/types';

// TODO: try to properly use react-native-navigation props
type Prop = { navigation: any };

export default ({ navigation }: Prop) => {
	const db = useContext(FirestoreContext);
	const [data, setData] = useState([] as SummaryItem[]);
	useEffect(() => {
		getDoc(doc(collection(db, 'summaries'), 'animals')).then(res =>
			setData(res.data()?.summary as SummaryItem[])
		);
	}, []);
	return (
		<Body>
			<Text style={styles.title}>Índex de Animais</Text>
			<FlatList
				data={data}
				renderItem={({ item }) => (
					<IndexItem
						item={item}
						action={() => navigation.navigate('Data', item)}
					/>
				)}
				keyExtractor={({ name }) => name}
				style={styles.list}
			/>
		</Body>
	);
};

const styles = StyleSheet.create({
	list: {
		width: '100%',
		paddingTop: 5,
	},
	title: {
		fontSize: 20,
		fontWeight: 'bold',
		textAlign: 'center',
		marginBottom: 16,
	},
});
