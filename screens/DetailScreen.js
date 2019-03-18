import React, { Component } from 'react';
import { StyleSheet, View, Text, ScrollView, Image, AsyncStorage, TouchableOpacity } from 'react-native';
import { List, ListItem, Icon, Left, Body, Right, Button } from 'native-base';
import ParallaxScrollView from 'react-native-parallax-scroll-view';
import { connect } from 'react-redux'; 

import { getDetailPokemon } from '../publics/redux/actions/pokemon';

import capitalizeFirstLetter from '../components/CoreFunctions';
import { MonoText } from '../components/StyledText';

class DetailScreen extends Component {
	static navigationOptions = {
    title: 'Detail',
    headerRight: (
      <TouchableOpacity onPress={() => this.props.navigation.navigate('Edit', {item: this.item})}>
      	<Text style={{fontSize: 16, paddingRight: 25, color: 'blue'}}>Edit</Text>
      </TouchableOpacity>
    )
  };

	constructor(props) {
	  super(props);
	  this.item = props.navigation.getParam('item');
	}

	componentDidMount() {
		this.getDetailPokemon();
	}

	getDetailPokemon() {
		this.props.dispatch(getDetailPokemon(this.item.name));
	}

  render() {
  	const name = capitalizeFirstLetter(this.item.name.replace('-', ' '));
  	const type_1 = capitalizeFirstLetter(this.item.type_1.replace('-', ' '));
		const type_2 = this.item.type_2 ? capitalizeFirstLetter(this.item.type_2.replace('-', ' ')) : '';
		const ability_1 = capitalizeFirstLetter(this.item.ability_1.replace('-', ' '));
		const ability_2 = this.item.ability_2 ? capitalizeFirstLetter(this.item.ability_2.replace('-', ' ')) : '';
		const ability_3 = this.item.ability_3 ? capitalizeFirstLetter(this.item.ability_3.replace('-', ' ')) : '';
    return (
    	<ParallaxScrollView
    		parallaxHeaderHeight={350}
	      renderBackground={() => (
	      	<Image
		    	  style={styles.image}
		    	  source={{ uri: `http://img.pokemondb.net/artwork/${this.item.name}.jpg` }}
		    	/>
	    	)}
	      contentContainerStyle={styles.container}
	    >
	    	<View style={styles.titleRow}>
      		<Text style={styles.title}>{name}</Text>
      		<MonoText style={styles.subTitle}>{this.item.name}</MonoText>
      	</View>
      	<View style={styles.line}></View>
      	<List style={styles.list}>
	      	<ListItem icon >
	          <Left>
	            <Button style={{ backgroundColor: "lightblue" }}>
	              <Text>TY</Text>
	            </Button>
	          </Left>
	          <Body>
	            {this.item.type_2 ? (
	            	<Text>Types</Text>
	            ) : (<Text>Type</Text>)}
	          </Body>
	          <Right>
	          	<View style={[styles.typeContainer, styles.typeExtension]}>
	              <MonoText style={styles.type}>{type_1}</MonoText>
	            </View>
	          	{this.item.type_2 ? (
		            <View style={[styles.typeContainer, styles.typeExtension]}>
		              <MonoText style={styles.type}>{type_2}</MonoText>
		            </View>
		           ) : null}
	          </Right>
	        </ListItem>
	        <ListItem icon>
	          <Left>
	            <Button style={{ backgroundColor: "lightblue" }}>
	              <Text>AB</Text>
	            </Button>
	          </Left>
	          <Body>
	            {this.item.ability_2 || this.item.ability_3 ? (
	            	<Text>Abilities</Text>
	            ) : (<Text>Ability</Text>)}
	          </Body>
	          <Right>
	          	<View style={[styles.typeContainer, styles.typeExtension]}>
	              <MonoText style={styles.type}>{ability_1}</MonoText>
	            </View>
	          	{this.item.ability_3 ? (
		            <View style={[styles.typeContainer, styles.typeExtension]}>
		              <MonoText style={styles.type}>{ability_2}</MonoText>
		            </View>
		           ) : null}
	          	{this.item.ability_3 ? (
		            <View style={[styles.typeContainer, styles.typeExtension]}>
		              <MonoText style={styles.type}>{ability_3}</MonoText>
		            </View>
		           ) : null}
	          </Right>
	        </ListItem>
	      </List>

        <View style={styles.line}></View>

	      <List style={styles.list}>
	        <ListItem icon>
	          <Left>
	            <Button style={{ backgroundColor: "lightblue" }}>
	              <Text>HP</Text>
	            </Button>
	          </Left>
	          <Body>
	            <Text>HP</Text>
	          </Body>
	          <Right>
	          	<View style={[styles.typeContainer, styles.typeExtension]}>
	              <MonoText style={styles.type}>{this.item.hp}</MonoText>
	            </View>
	          </Right>
	        </ListItem>
	        <ListItem icon>
	          <Left>
	            <Button style={{ backgroundColor: "lightblue" }}>
	              <Text>AT</Text>
	            </Button>
	          </Left>
	          <Body>
	            <Text>Attack</Text>
	          </Body>
	          <Right>
	          	<View style={[styles.typeContainer, styles.typeExtension]}>
	              <MonoText style={styles.type}>{this.item.attack}</MonoText>
	            </View>
	          </Right>
	        </ListItem>
	        <ListItem icon>
	          <Left>
	            <Button style={{ backgroundColor: "lightblue" }}>
	              <Text>DF</Text>
	            </Button>
	          </Left>
	          <Body>
	            <Text>Defense</Text>
	          </Body>
	          <Right>
	          	<View style={[styles.typeContainer, styles.typeExtension]}>
	              <MonoText style={styles.type}>{this.item.defense}</MonoText>
	            </View>
	          </Right>
	        </ListItem>
	        <ListItem icon>
	          <Left>
	            <Button style={{ backgroundColor: "lightblue" }}>
	              <Text>SP</Text>
	            </Button>
	          </Left>
	          <Body>
	            <Text>Speed</Text>
	          </Body>
	          <Right>
	          	<View style={[styles.typeContainer, styles.typeExtension]}>
	              <MonoText style={styles.type}>{this.item.speed}</MonoText>
	            </View>
	          </Right>
	        </ListItem>
	        <ListItem icon>
	          <Left>
	            <Button style={{ backgroundColor: "lightblue" }}>
	              <Text>SA</Text>
	            </Button>
	          </Left>
	          <Body>
	            <Text>Special Attack</Text>
	          </Body>
	          <Right>
	          	<View style={[styles.typeContainer, styles.typeExtension]}>
	              <MonoText style={styles.type}>{this.item.special_attack}</MonoText>
	            </View>
	          </Right>
	        </ListItem>
	        <ListItem icon>
	          <Left>
	            <Button style={{ backgroundColor: "lightblue" }}>
	              <Text>SD</Text>
	            </Button>
	          </Left>
	          <Body>
	            <Text>Special Defense</Text>
	          </Body>
	          <Right>
	          	<View style={[styles.typeContainer, styles.typeExtension]}>
	              <MonoText style={styles.type}>{this.item.special_defense}</MonoText>
	            </View>
	          </Right>
	        </ListItem>
	      </List>

        <View style={styles.line}></View>

       	<List style={styles.list}>
	        <ListItem icon>
	          <Left>
	            <Button style={{ backgroundColor: "lightblue" }}>
	              <Text>HE</Text>
	            </Button>
	          </Left>
	          <Body>
	            <Text>Height</Text>
	          </Body>
	          <Right>
	          	<View style={[styles.typeContainer, styles.typeExtension]}>
	              <MonoText style={styles.type}>{this.item.height}</MonoText>
	            </View>
	          </Right>
	        </ListItem>
	        <ListItem icon>
	          <Left>
	            <Button style={{ backgroundColor: "lightblue" }}>
	              <Text>WE</Text>
	            </Button>
	          </Left>
	          <Body>
	            <Text>Weight</Text>
	          </Body>
	          <Right>
	          	<View style={[styles.typeContainer, styles.typeExtension]}>
	              <MonoText style={styles.type}>{this.item.weight}</MonoText>
	            </View>
	          </Right>
	        </ListItem>
	        <ListItem icon>
	          <Left>
	            <Button style={{ backgroundColor: "lightblue" }}>
	              <Text>XP</Text>
	            </Button>
	          </Left>
	          <Body>
	            <Text>Experience</Text>
	          </Body>
	          <Right>
	          	<View style={[styles.typeContainer, styles.typeExtension]}>
	              <MonoText style={styles.type}>{this.item.experience}</MonoText>
	            </View>
	          </Right>
	        </ListItem>
	       </List>
	    </ParallaxScrollView>
    );
  }

  _renderBackground() {
  	return(
  		<Image
    	  style={styles.image}
    	  source={{ uri: `http://img.pokemondb.net/artwork/${this.item.name}.jpg` }}
    	/>
  	)
  }
}

const mapStateToProps = (state) => {
	return {
		pokemon: state.pokemons
	}
}

export default connect(mapStateToProps)(DetailScreen);

const styles = StyleSheet.create({
	container: {
    flex: 1,
    backgroundColor: '#F3F3F3',
  },
  edit: {
  	fontSize: 14,
  	paddingRight: 10,
  	color: '#d8d8d8'
  },
  title: {
  	fontSize: 20,
  	fontWeight: 'bold'
  },
  subTitle: {
  	color: 'rgba(96,100,109, 0.8)',
  },
  titleRow: {
  	height: 70,
  	width: '100%',
  	padding: 15,
  	borderBottomWidth: 0.2,
  	borderTopWidth: 0.5,
  	borderColor: 'grey',
  	backgroundColor: 'white',
  	flexDirection: 'column',
  	justifyContent: 'center',
  	alignItems: 'flex-start'
  },
  image: {
  	height: 350,
  	width: '100%',
  	alignItems: 'center',
  	alignSelf: 'center'
  },
  line: {
  	marginVertical: 10,
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
  list: {
  	backgroundColor: 'white',
  	width: '100%',
  },
});