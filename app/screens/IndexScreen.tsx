import { collection, doc, getDoc } from 'firebase/firestore/lite';
import React, { useContext, useEffect, useState } from 'react';
import { FlatList, StyleSheet, Text, View } from 'react-native';
import { FirestoreContext } from '../../firebaseConfig';
import Body from '../components/Body';
import IndexItem from '../components/IndexItem';
import type { Animal } from '../types/types';

const dummyData: Animal[] = [];

type Props = { navigation: any };

export default ({ navigation }: Props) => {
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
					renderItem={({ item }) => (
						<IndexItem
							item={item}
							action={() => navigation.navigate('Data', item)}
						/>
					)}
					keyExtractor={({ name }) => name}
					style={styles.list}
				/>
			</View>
		</Body>
	);
};

const styles = StyleSheet.create({
	title: {
		fontSize: 20,
		fontWeight: 'bold',
		textAlign: 'center',
		marginBottom: 16,
	},
	list: {
		width: '100%',
		paddingTop: 5,
		marginBottom: 45,
		paddingBottom: 10,
	},
});
