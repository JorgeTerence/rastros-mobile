import React from 'react';
import { Text, StyleSheet, TextStyle } from 'react-native';

type TitleProp = { children: string };

export const Title = ({ children }: TitleProp) => <Text style={styles.title}>{children}</Text>;

const styles = StyleSheet.create({
	title: {
		fontSize: 26,
		fontWeight: 'bold',
		marginBottom: 35,
	},
});
