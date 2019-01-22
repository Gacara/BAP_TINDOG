
import React from 'react';
import { AppRegistry, View, Button, TextInput } from 'react-native';
import Slider from 'react-native-slider';


var SliderExample = React.createClass({
  getInitialState() {
    return {
      value: 0.2,
    };
  },
 
  render() {
    return (
      <View style={styles.container}>
        
        <Slider
          value={this.state.value}
          onValueChange={(value) => this.setState({value})} />

          
        <Text>Value: {this.state.value}</Text>
      </View>
    );
  }
});
 
var styles = StyleSheet.create({
  container: {
    flex: 1,
    marginLeft: 10,
    marginRight: 10,
    alignItems: 'stretch',
    justifyContent: 'center',
  },
});
 
export default Slider