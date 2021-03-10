import React, {Component} from 'react';
import {StyleSheet, View, Image, Text} from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import GestureRecognizer, {swipeDirections} from 'react-native-swipe-gestures';


export class PostScreen extends Component {
	 
	onSwipeRight(gestureState) {
	this.props.navigation.navigate('Главная')
	}
	render = () => {
		const {person} = this.props.route.params;
	 
		let image = 'https://openwheels.tk' + person.imageFile[0];
		return ( 
		<GestureRecognizer
			onSwipeRight={(state) => this.onSwipeRight(state)}>
			<ScrollView>
				<View style={styles.container}>
				<Text style={styles.cellTitle}>{person.title}</Text> 
				<Image
					source={{uri: image}}
					style={styles.avatar}
					resizeMode={'cover'}
				/>
				<View key={person.id} style={{margin: 10}}>
					
					<Text style={styles.cellSubtitle}>{person.subtitle}</Text>
					{   
						person.text.map((item, key)=>(
						<Text key={key} style={styles.cellValue}  > { item } </Text>)
					)}
					</View>
				</View>
			</ScrollView> 
			 
		</GestureRecognizer>
	);
	};
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
	margin: 10,
		alignItems: 'center',
	},
	avatar: {
		width: 400,
		height: 200, 
		marginTop: 20,
	},
	cell: {
		marginTop: 15,
		justifyContent: 'center',
		alignItems: 'center',
	},
	cellTitle: {
		fontSize: 24,
	marginTop:20,
		fontWeight: 'bold',
		color: '#b0b0b0',
	},
	cellSubtitle:{
	marginTop: 10,
	fontWeight: 'bold',
		fontSize: 20,
		color: '#b0b0b0',
	},
	cellValue: {
		marginTop: 10,
		fontSize: 16,
		color: '#2e2e2e',
	},
});