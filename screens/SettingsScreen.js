import React from 'react';
import { Linking, ScrollView, StyleSheet, Text } from 'react-native';
import { SocialIcon } from 'react-native-elements';

export default class SettingsScreen extends React.Component {
  static navigationOptions = {
    title: 'Settings',
  };

  render() {
    /* Go ahead and delete ExpoConfigView and replace it with your
     * content, we just wanted to give you a quick view of your config */
    return (
      <ScrollView style={styles.container} contentContainerStyle={styles.containerContent}>
        <Text>Created by Derek Houck.</Text>
        <SocialIcon
          button
          onPress={() => Linking.openURL('https://github.com/derekhouck/dog-fetcher')}
          style={styles.button}
          title='See the code on GitHub'
          type='github'
        />
        <Text style={styles.acknowledgements}>This app uses the Dog API found at <Text style={styles.link} onPress={() => Linking.openURL('https://dog.ceo/dog-api/')}>https://dog.ceo</Text></Text>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  acknowledgements: {
    textAlign: 'center',
  },
  button: {
    alignSelf: 'stretch',
    margin: 20,
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
  link: {
    color: 'blue',
  },
});
