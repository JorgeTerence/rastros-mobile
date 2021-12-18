import React from 'react';
import {
	View,
	SafeAreaView,
	StatusBar,
	Platform,
	StyleSheet,
} from 'react-native';

type BodyProps = { children: JSX.Element | JSX.Element[] };

export default ({ children }: BodyProps) => {
	if (Platform.OS == 'ios') {
		return <SafeAreaView style={styles.body}>{children}</SafeAreaView>;
	} else {
		return <View style={[styles.body, styles.android]}>{children}</View>;
	}
};

const styles = StyleSheet.create({
	body: {
		flex: 1,
		alignItems: 'center',
		justifyContent: 'flex-start',
		paddingTop: 10,
		backgroundColor: 'white',
	},
	android: {
		paddingTop: (StatusBar.currentHeight ?? 0) + 15,
	},
});
