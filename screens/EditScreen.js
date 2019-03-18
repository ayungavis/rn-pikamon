import React, { Component } from 'react';
import { StyleSheet, View } from 'react-native';
import { connect } from 'react-redux';

class EditScreen extends Component {
  render() {
    return (
      <View></View>
    );
  }
}

const mapStateToProps = (state) => {
	return {

	}
}

export default connect(mapStateToProps)(EditScreen);

const styles = StyleSheet.create({

});
