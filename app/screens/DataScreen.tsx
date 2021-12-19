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
import { DataPack, Data } from '../components/DataPack';

type Prop = { navigation: any; route: any };

// TODO: A way for IOS users navigate back to the list ( 've been using the Android back button )
export default ({ navigation, route }: Prop) => {
	const { name } = route.params;

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
				<DataPack>
					<Text style={styles.title}>{data.name}</Text>
				</DataPack>
				<DataPack>
					<Text style={styles.subtitle}>{data.scientificName}</Text>
				</DataPack>
				<DataPack>
					<Image source={{ uri: imageUri }} style={styles.picture} />
				</DataPack>
				<DataPack>
					<Data subject="Classificação" data={data.classification} />
					<Data subject="Alimentação" data={data.feeding} />
					<Data subject="Descrição" data={data.description} />
					<Data
						subject="Estado de Concervação"
						data={data.conservationStatus}
					/>
					<Data subject="Dietas" data={data.diets} />
					<Data subject="Outros nomes" data={data.otherNames} />
				</DataPack>
			</View>
		</ScrollView>
	);
};

const styles = StyleSheet.create({
	container: {
		flex: 1,
		alignItems: 'center',
		paddingTop: 50,
		paddingBottom: 10,
	},
	picture: {
		width: '100%',
		height: undefined,
		aspectRatio: 3 / 2,
	},
	subtitle: {
		fontSize: 16,
		fontFamily: 'monospace',
		textAlign: 'center',
	},
	title: {
		fontSize: 25,
		fontWeight: 'bold',
		textAlign: 'center',
	},
});
