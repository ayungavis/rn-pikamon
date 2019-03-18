import React, { Component } from 'react';
import { StyleSheet, View, Image, TextInput, Text, TouchableOpacity } from 'react-native';
import { Container } from 'native-base';
import { connect } from 'react-redux';

class LoginScreen extends Component {
  render() {
    return (
    	<Container>
    		<View style={{ justifyContent: 'center', alignItems: 'center' }}>
	      	<Image source={require('../assets/images/icon.png')} resizeMode="contain" style={{width:192}} />
	      </View>
	      <View style={{ width:'100%', height:250, margin:20, }}>
	      	<Text style={{alignSelf:'center', fontSize:13, margin:10, color:'#333', fontStyle:'italic', fontWeight:'200'}}>LOG IN</Text>
	      	<View style={{flex:1, borderColor:'#d3d3d3'}}>
	      		<TextInput 
				      placeholder = "Email"
				      placeholderTextColor = "#fff"
				      style = {styles.textInput}/>
	      	</View>
	      	<View style={{flex:1, borderColor:'#d3d3d3'}}>
			      <TextInput 
				      placeholder = "Password"
				      placeholderTextColor = "#fff"
				      style = {styles.textInput}/>
		      </View>
	      	<TouchableOpacity onPress={() => this.props.navigator.push({id:'trainer'})} style={{backgroundColor:'rgba(226,39,44, 0.5)', flex:1, justifyContent:'center', alignItems:'center'}}><Text style={{color:'#fff', fontSize:12, fontWeight:'700'}}>LOG IN</Text></TouchableOpacity>
	      	<View style={styles.row}>
	    			<View style={styles.line} /><View style={{flex:1, margin:5}}><Text style={{fontSize:10, fontWeight:'600', color:'#444'}}>DIDN'T HAVE AN ACCOUNT?</Text></View><View style={styles.line} />
	      	</View>
	      	<View style={styles.row}>
	      		<TouchableOpacity style = {styles.social}>
	      			<Text style={{color:'#fff', fontSize:11, fontWeight:'600'}}>REGISTER</Text>
	    			</TouchableOpacity>
	      	</View>
	      </View>
	  	</Container>
    );
  }
}

const mapStateToProps = (state) => {
	return {
		
	}
}

export default connect(mapStateToProps)(LoginScreen);

const styles = StyleSheet.create({
	textInput: {flex:1, backgroundColor:'#rgba(0,0,0,0.3)', padding:10, color:'#fff', fontSize:12},
  line:{flex:1, height:2, backgroundColor:'rgba(0,0,0,0.2)' },
  row:{flex:1, flexDirection:'row', alignItems:'center'},
  social:{flex:1, borderRadius:2, backgroundColor:'#rgba(0,0,0,0.6)', flexDirection:'row', margin:8, alignItems:'center', justifyContent:'center', padding:5, height: 50}
});
