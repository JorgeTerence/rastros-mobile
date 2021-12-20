import React from 'react';
import {
	View,
	SafeAreaView,
	StatusBar,
	Platform,
	StyleSheet,
	StyleProp,
	ViewStyle,
} from 'react-native';

type Prop = { children: JSX.Element | JSX.Element[], style?: StyleProp<ViewStyle> };

export default ({ children, style }: Prop) => {
	if (Platform.OS == 'ios') {
		return <SafeAreaView style={[styles.body, style]}>{children}</SafeAreaView>;
	} else {
		return <View style={[styles.body, styles.android, style]}>{children}</View>;
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
