import React, {Fragment, Component} from 'react';
import {FlatList, Card, Dimensions, Text, View, StyleSheet} from 'react-native'; 
import { ScrollView } from 'react-native-gesture-handler';
import { CardViewWithImage } from 'react-native-simple-card-view';
import {
	widthPercentageToDP as wp,
	heightPercentageToDP as hp,
	listenOrientationChange as lor,
	removeOrientationListener as rol
  } from 'react-native-responsive-screen';
import { Header } from '../components/Header';

export class PostListScreen extends Component {
	_isMounted = false;
	state = {
		list: [],
		isFetching: false,
		pageNumber: 1,
	};

	componentDidMount = () => {
		this._isMounted = true; 
		fetch(`https://openwheels.tk/api/Posts/Get?page=` + this.state.pageNumber)
		.then(response => response.json())
		.then(result => {
			if(this._isMounted)
			{
				this.setState({list: this.state.list.concat(result), isFetching: false, pageNumber: this.state.pageNumber + 1 })
			}
		})
		.catch(e => {
		console.log(e); 
		});
	};

	getMoreData = (isRefreshing) => {
		const limit = 3;
		const offset = isRefreshing ? 0 : this.state.list.length;
		const page = Math.ceil(offset / limit) + 1;
		fetch(`https://openwheels.tk/api/Posts/Get?page=` + this.state.pageNumber)
		.then(response => response.json())
		.then(result => {
			if(this._isMounted)
			{
				this.setState( { list: this.state.list.concat(result), isFetching: false, pageNumber: this.state.pageNumber + 1 })
			}
		})
		.catch(e => {
		console.log(e); 
		});
	};
	componentWillUnmount() {
		this._isMounted = false;
	  }
	onRefresh = () => {
		this.getMoreData(true);
	};

	onScrollToEnd = ({distanceFromEnd}) => {
		if (distanceFromEnd < 0) {
			return;
		}
		this.getMoreData(false);
	};

	onItemPress = (item) => {
		this.props.navigation.navigate('Пост', {person: item});
	};

	keyExtractor = (person) => person.id;

	renderItem = ({item}) => {
		let image = 'https://openwheels.tk' + item.imageFile[0];
		return ( 
			
			<CardViewWithImage
				width={ wp('95%') }
				contentMargin={ {top: 10, left: 20, right: 10} }
				titleMargin={ { left: 10 } }
				source={{uri: image}}
				content={ item.subtitle }
				title={ item.title }
				imageWidth={  350 }
				imageHeight={ 200 }
				roundedImage={ false }
				onPress={this.onItemPress.bind(this, item)}
			/>   
		);
	};

	render = () => {
		const {isFetching, list} = this.state;
		  
		return (
		<React.Fragment> 
			<Header text='Главная'/>
			<View style={styles.container}>
				<FlatList
					style={styles.list}
					data={list}
					renderItem={this.renderItem}
					keyExtractor={this.keyExtractor}
					refreshing={isFetching}
					onRefresh={this.onRefresh}
					onEndReached={this.onScrollToEnd}
					onEndReachedThreshold={0.2}
				/>
				
			</View>	
		</React.Fragment> 
		
		);
	};
}
export default PostListScreen;
const styles = StyleSheet.create({
  container: {
    flex: 1,
	width: Dimensions.get('window').width,
	height: Dimensions.get('window').height
  },
  textWrapper: {
    height: hp('95%'),  
    width: wp('95%')  
  },
  myText: {
    fontSize: hp('5%') // End result looks like the provided UI mockup
  },
  list: {
	marginRight: 10,
  },
});