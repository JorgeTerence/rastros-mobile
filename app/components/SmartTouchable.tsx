import React from 'react'
import {
	TouchableNativeFeedback,
	TouchableOpacity,
	Platform,
	StyleProp,
	ViewStyle,
} from 'react-native';

type Prop = {
	children: JSX.Element | JSX.Element[];
	onPress: () => void;
	style?: StyleProp<ViewStyle>;
};

export default ({ children, onPress, style }: Prop) => {
	if (Platform.OS == 'android')
		return (
			<TouchableNativeFeedback onPress={onPress} style={style}>
				{children}
			</TouchableNativeFeedback>
		);
	else
		return (
			<TouchableOpacity onPress={onPress} style={style}>
				{children}
			</TouchableOpacity>
		);
};
