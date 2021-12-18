import {
	collection,
	DocumentData,
	getDocs,
	query,
	where,
} from 'firebase/firestore/lite';
import { getDownloadURL, ref } from 'firebase/storage';
import React, { useContext, useEffect, useState } from 'react';
import { Image, ScrollView, StyleSheet, Text, View } from 'react-native';
import { FirestoreContext, StorageContext } from '../../firebaseConfig';

type Props = { navigation: any; route: any };

// TODO: A way for IOS users navigate back to the list ( 've been using the Android back button )
export default ({ navigation, route }: Props) => {
	let { name } = route.params;

	const db = useContext(FirestoreContext);
	const storage = useContext(StorageContext);

	const [data, setData] = useState({} as DocumentData);
	const [imageUri, setImageUri] = useState('https://example.com');

	useEffect(() => {
		// Get data
		const search = query(
			collection(db, 'animals'),
			where('name', '==', name)
		);
		getDocs(search).then(res => setData(res.docs[0].data()));

		// Get image
		const imageRef = ref(storage, `pictures/animals/${name}`);
		getDownloadURL(imageRef).then(uri => setImageUri(uri));
	}, []);

	return (
		<ScrollView>
			<View style={styles.container}>
				<Text style={styles.title}>{data.name}</Text>
				<Text style={styles.subtitle}>{data.scientificName}</Text>
				<Image source={{ uri: imageUri }} style={styles.picture} />
				<DataBox subject="Classificação" data={data.classification} />
				<DataBox subject="Alimentação" data={data.feeding} />
				<DataBox subject="Descrição" data={data.description} />
				<DataBox
					subject="Estado de Concervação"
					data={data.conservationStatus}
				/>
				<DataBox subject="Dietas" data={data.diets} />
				<DataBox subject="Outros nomes" data={data.otherNames} />
			</View>
		</ScrollView>
	);
};

type DataProps = { subject: string; data: string };

const DataBox = ({ subject, data }: DataProps) => (
	<View
		style={{
			marginBottom: 8,
			elevation: 2,
			padding: 4,
			width: '80%',
		}}
	>
		<Text style={{ textAlign: 'left' }}>
			<Text style={{ fontWeight: 'bold' }}>{subject}: </Text>
			{data}
		</Text>
	</View>
);

const styles = StyleSheet.create({
	container: {
		flex: 1,
		alignItems: 'center',
		paddingVertical: 16,
	},
	picture: {
		width: '80%',
		height: undefined,
		aspectRatio: 3 / 2,
		marginBottom: 10,
	},
	subtitle: {
		fontSize: 16,
		marginBottom: 12,
		fontFamily: 'monospace',
	},
	title: {
		fontSize: 28,
		fontWeight: 'bold',
		marginBottom: 10,
	},
});
