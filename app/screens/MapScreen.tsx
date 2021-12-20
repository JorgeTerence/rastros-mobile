import React, { useEffect, useState } from 'react';
import { View, StyleSheet, Text, TouchableOpacity } from 'react-native';
import MapView, { Region } from 'react-native-maps';
import { palette } from '../theme/colors';
import { Ionicons } from '@expo/vector-icons';
import {
	requestBackgroundPermissionsAsync,
	getCurrentPositionAsync,
} from 'expo-location';

export default () => {
   // Coordinates for Santa Bárbara d'Oeste and region
   const defaultLocation: Region =  {
      latitude: -22.7643227,
      longitude: -47.4892157,
      latitudeDelta: 0.5,
      longitudeDelta: 0.5
   }
	const [location, setLocation] = useState(defaultLocation);
	const getLocation = async () => {
      const { granted } = await requestBackgroundPermissionsAsync();
      if (!granted) return;
      const { coords } = await getCurrentPositionAsync();
      const position: Region = {
         latitude: coords.latitude,
         longitude: coords.longitude,
         latitudeDelta: 0.5,
         longitudeDelta: 0.5
      }
      setLocation(position);
   };
	return (
		<View style={styles.container}>
			<MapView
				style={StyleSheet.absoluteFillObject}
				region={{
               latitude: location.latitude,
               longitude: location.longitude,
               latitudeDelta: 0.5,
               longitudeDelta: 0.5,
            }}
			/>
			<TouchableOpacity
				style={styles.locationButtonContainer}
				onPress={getLocation}
			>
				<View style={styles.locationButton}>
					<Ionicons name="locate-sharp" size={40} color="white" />
				</View>
			</TouchableOpacity>
		</View>
	);
};

const styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
	},
	locationButtonContainer: {
		position: 'absolute',
		bottom: 15,
		right: 15,
	},
	locationButton: {
		width: 60,
		padding: 10,
		height: undefined,
		aspectRatio: 1,
		backgroundColor: palette.rose,
		borderRadius: 30,
	},
});
