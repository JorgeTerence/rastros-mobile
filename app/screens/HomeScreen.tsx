import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default () => (
	<View style={styles.container}>
		<Text style={styles.title}>🚧 Rastros Mobile 🦊 🚧</Text>
	</View>
);

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#fff',
		alignItems: 'center',
		justifyContent: 'center',
	},
	title: {
		fontSize: 16,
	},
});
