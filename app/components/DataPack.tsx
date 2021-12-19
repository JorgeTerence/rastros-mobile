import React from 'react';
import { View, StyleSheet, Text } from 'react-native';

type Prop = { children: JSX.Element | JSX.Element[] };

export const DataPack = ({ children }: Prop) => (
	<View style={styles.pack}>{children}</View>
);

type DataProp = { subject: string; data: string };

export const Data = ({ subject, data }: DataProp) => (
	<View style={styles.data}>
		<Text>
			<Text style={styles.bold}>{subject}: </Text>
			{data}
		</Text>
	</View>
);

const styles = StyleSheet.create({
	pack: {
		backgroundColor: 'white',
		width: '85%',
		shadowColor: 'black',
		elevation: 2,
		padding: 10,
		marginBottom: 15,
	},
	data: {
		marginBottom: 10,
	},
	bold: { fontWeight: 'bold' },
});
