import {
	launchCameraAsync,
	requestCameraPermissionsAsync,
} from 'expo-image-picker';
import React, { useState } from 'react';
import {
	Image,
	Pressable,
	StyleSheet,
	Text,
	TextInput,
	View,
} from 'react-native';
import Body from '../components/Body';
import { brand } from '../theme/colors';

export default () => {
	const [image, setImage] = useState('');
	return (
		<Body>
			<Text style={styles.title}>Reportar Emergência</Text>
			<TextInput
				maxLength={511}
				multiline={true}
				style={styles.input}
				placeholder="Breve descrição"
			/>
			{image ? (
				<View style={styles.imageBox}>
					<Image source={{ uri: image }} style={styles.picture} />
				</View>
			) : (
				<Pressable
					style={{ width: '100%', alignItems: 'center' }}
					onPress={async () => {
						const permition = await requestCameraPermissionsAsync();
						if (!permition.granted) return;
						const picture = await launchCameraAsync();
						if (!picture.cancelled) setImage(picture.uri);
					}}
				>
					<View style={styles.imageBox}>
						<Image
							source={require('../../assets/camera.png')}
							style={styles.camera}
						/>
						<Text style={styles.imageAltText}>Adicionar Imagem</Text>
					</View>
				</Pressable>
			)}
			<Pressable
				onPress={() => alert('Notificação enviada')}
				style={{ width: '65%' }}
			>
				<View style={styles.btnSubit}>
					<Text style={styles.submitText}>Enviar</Text>
				</View>
			</Pressable>
		</Body>
	);
};

const styles = StyleSheet.create({
	camera: {
		width: 100,
		height: undefined,
		aspectRatio: 1,
	},
	btnSubit: {
		backgroundColor: brand.deepPool,
		alignItems: 'center',
		borderRadius: 25,
		padding: 12,
		shadowColor: 'black',
		elevation: 2,
	},
	picture: {
		width: '95%',
		height: undefined,
		aspectRatio: 3 / 4,
		resizeMode: 'contain',
	},
	imageAltText: {
		color: 'gray',
		fontFamily: 'monospace',
		marginTop: 10,
	},
	imageBox: {
		alignItems: 'center',
		borderWidth: 1,
		borderColor: 'gray',
		justifyContent: 'center',
		marginBottom: 25,
		paddingVertical: 12,
		width: '80%',
	},
	input: {
		width: '80%',
		borderColor: 'gray',
		borderWidth: 1,
		fontFamily: 'monospace',
		marginBottom: 25,
		padding: 6,
      paddingHorizontal: 10,
	},
	submitText: {
		color: 'white',
		fontWeight: 'bold',
		fontSize: 18,
	},
	title: {
		fontSize: 28,
		fontWeight: 'bold',
		marginBottom: 35,
	},
});
