import React from 'react';
import { ScrollView, StyleSheet, Text } from 'react-native';

export default class SettingsScreen extends React.Component {
  static navigationOptions = {
    title: 'Settings',
  };

  render() {
    /* Go ahead and delete ExpoConfigView and replace it with your
     * content, we just wanted to give you a quick view of your config */
    return (
      <ScrollView style={styles.container} contentContainerStyle={styles.containerContent}>
        <Text style={styles.acknowledgements}>This app uses the Dog API found at https://dog.ceo</Text>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  acknowledgements: {
    textAlign: 'center',
  },
  container: {
    backgroundColor: '#fff',
    flex: 1,
  },
  containerContent: {
    alignItems: 'center',
    flex: 1,
    justifyContent: 'center',
  },
});
