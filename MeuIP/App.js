import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View, Button } from 'react-native';

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',
  android:
    'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});

export default class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      data: ''
    }
  }

  findMyIP = async () => {
    this.setState({ data: 'Finding my IP ...' });
    const ip = await fetch('http://httpbin.org/ip');
    const data = await ip.json();

    this.setState({ data: data.origin });
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.body}>
          <Text style={styles.texto}>IP: {this.state.data}</Text>
          <Button
            onPress={this.findMyIP}
            title="MEU IP"
            color="#FFF"
            accessibilityLabel="MEU IP"
          />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'stretch',
    backgroundColor: '#2F2336',
  },
  body: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center"
  },
  button: {
    color: "white",
    backgroundColor: "magenta"
  },
  texto: {
    color: "white",
    padding: 20
  }
});
