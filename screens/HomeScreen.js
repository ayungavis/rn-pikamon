import React from 'react';
import { ScrollView, StyleSheet, Text, TouchableOpacity, View, FlatList, AsyncStorage } from 'react-native';
import { Container, Content, List, ListItem, Left, Body, Right, Thumbnail, SwipeRow, Icon, Button, Fab } from 'native-base';
import { connect } from 'react-redux';

import { getPokemon, deletePokemon, deletePokemonLocal } from '../publics/redux/actions/pokemon';
import { getStatus } from '../publics/redux/actions/auth';

import capitalizeFirstLetter from '../components/CoreFunctions';
import { MonoText } from '../components/StyledText';

class HomeScreen extends React.Component {
	static navigationOptions = {
    title: 'Home',
  };

  constructor(props) {
    super(props);
    this.state = {
    	isLogin: false,
    	active: false,
    	page: 1,
    };
    this.getStatus();
  }

  getStatus = async () => {
		const token = await AsyncStorage.getItem('token')
		// console.log('token baru:', token)
		this.props.dispatch(getStatus(token))
		.then(res => {
			this.setState({ isLogin: true })
		})
		.catch(err => {
			
		})
	}

  componentDidMount() {
  	this.getPokemon();
  }

  getPokemon() {
		this.props.dispatch(getPokemon());
		// this.props.dispatch(getPokemon({
		// 	perPage: 10,
		// 	page: this.state.page
		// }));
	}

	loadMore() {
		if(this.state.page <= this.props.pokemons.data.lastPage) {
			return this.getPokemon();
		}
  }

	handlePress(item) {
		this.props.navigation.navigate('Detail', {item});
	}

	handleAdd() {
		if (this.state.isLogin) {
			this.props.navigation.navigate('Add');
		}
		else {
			this.props.navigation.navigate('Login');
		}
	}

	renderItem(item) {
		const name = capitalizeFirstLetter(item.name.replace('-', ' '));
		const type_1 = capitalizeFirstLetter(item.type_1.replace('-', ' '));
		const type_2 = item.type_2 ? capitalizeFirstLetter(item.type_2.replace('-', ' ')) : '';
		return (
			<SwipeRow
				leftOpenValue={75}
				rightOpenValue={-75}
				left={
					<Button success onPress={() => alert('Add')}>
						<Icon active name="add" />
					</Button>
				}
				body={
					<TouchableOpacity style={styles.row} onPress={() => this.handlePress(item)}>
						<View style={styles.rowLeft}>
							<Thumbnail square small source={{ uri: `http://img.pokemondb.net/artwork/${item.name}.jpg` }} />
							<Text style={styles.name}>{name}</Text>
						</View>
						<View style={styles.rowRight}>
							<View style={[styles.typeContainer, styles.typeExtension]}>
	              <MonoText style={styles.type}>{type_1}</MonoText>
	            </View>
							{item.type_2 ? (
								<View style={[styles.typeContainer, styles.typeExtension]}>
		              <MonoText style={styles.type}>{type_2}</MonoText>
		            </View>
							) : null }
						</View>
					</TouchableOpacity>
				}
				right={
					<Button danger onPress={() => alert('Trash')}>
						<Icon active name="trash" />
					</Button>
				}
			/>
		)
	}

  render() {
    return (
      <Container>
        <Content>
          <FlatList
						data={this.props.pokemons.data.data}
						keyExtractor={(item, index) => index.toString()}
						refreshing={this.props.pokemons.isLoading}
						onRefresh={() => this.getPokemon()}
						renderItem={({item, index}) => this.renderItem(item)}
						// onEndReached={() => this.setState({ page: this.state.page + 1 }, () => this.loadMore())}
      //       onEndReachedThreshold={0.1}
					/>
        </Content>
        <Fab
          active={this.state.active}
          direction="up"
          containerStyle={{ }}
          style={{ backgroundColor: 'blue' }}
          position="bottomRight"
          onPress={() => this.handleAdd()}>
          <Icon name="add" />
        </Fab>
      </Container>
    );
  }
}

const mapStateToProps = (state) => {
	return {
		pokemons: state.pokemons
	}
}

export default connect(mapStateToProps)(HomeScreen)

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  row: {
  	flex: 1,
  	flexDirection: 'row',
  	justifyContent: 'space-between',
  	alignItems: 'center',
  	paddingHorizontal: 10
  },
  rowLeft: {
  	flex: 3,
  	flexDirection: 'row',
  	justifyContent: 'flex-start',
  	alignItems: 'center'
  },
  rowRight: {
  	flex: 1,
  	flexDirection: 'row',
  	justifyContent: 'flex-end',
  	alignItems: 'center'
  },
  name: {
  	paddingLeft: 10,
  	color: 'black',
  },
  type: {
    color: 'rgba(96,100,109, 0.8)',
  },
  typeContainer: {
    backgroundColor: 'rgba(0,0,0,0.05)',
    borderRadius: 10,
    paddingHorizontal: 4,
    marginLeft: 5,
  },
  typeExtension: {
    marginVertical: 7,
  },
});
