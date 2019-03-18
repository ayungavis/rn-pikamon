import React from 'react';
import { MapView } from 'expo';
// import MapView, { Marker, AnimatedRegion } from 'react-native-maps';

export default class App extends React.Component {
	static navigationOptions = {
    header: null,
  };

	render() {
		return (
			<MapView
				style={{ flex: 1 }}
				initialRegion={{
					latitude: 37.78825,
					longitude: -122.4324,
					latitudeDelta: 0.0922,
					longitudeDelta: 0.0421,
				}}
			/>
		);
	}
}