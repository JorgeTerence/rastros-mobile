import { collection, doc, getDoc } from 'firebase/firestore/lite';
import React, { useContext, useEffect, useState } from 'react';
import {
	FlatList,
	Image,
	StyleSheet,
	Text,
	View
} from 'react-native';
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
					style={{
						width: '100%',
						paddingTop: 5,
						marginBottom: 45,
						paddingBottom: 10,
					}}
				/>
			</View>
		</Body>
	);
};

type ListItemProps = { item: Animal };

const ListItem = ({ item }: ListItemProps) => {
	// TODO: Make this responsive to each and every collection, not just animals
	let imageSource;
	if (item.asset == 'Mamífero')
		imageSource = require('../../assets/mammal.png');
	else if (item.asset == 'Réptil')
		imageSource = require('../../assets/reptile.png');
	else if (item.asset == 'Ave') imageSource = require('../../assets/bird.png');
	return (
		<View style={styles.listItem}>
			<Image source={imageSource} style={styles.classIcon} />
			<View>
				<Text style={{ fontWeight: 'bold', fontSize: 16 }}>
					{item.name}
				</Text>
				<Text>{item.sub}</Text>
			</View>
		</View>
	);
};

const styles = StyleSheet.create({
	classIcon: {
		height: 36,
		width: undefined,
		aspectRatio: 1,
		borderRadius: 18,
		marginRight: 15,
		marginLeft: 5,
		resizeMode: 'contain',
	},
	listItem: {
		padding: 12.5,
		backgroundColor: palette.sand,
		alignItems: 'center',
		justifyContent: 'flex-start',
		borderRadius: 15,
		shadowColor: 'black',
		elevation: 3,
		marginBottom: 12,
		width: '85%',
		alignSelf: 'center',
		flexDirection: 'row',
	},
	title: {
		fontSize: 20,
		fontWeight: 'bold',
		textAlign: 'center',
		marginBottom: 16,
	},
});
