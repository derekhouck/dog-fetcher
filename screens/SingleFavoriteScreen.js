import React from 'react';
import { Image, StyleSheet, View } from 'react-native';

export default class SingleFavoriteScreen extends React.Component {
  render() {
    const { navigation } = this.props;
    const dog = navigation.getParam('dog', require('../assets/images/sample-dog.jpg'));
    return (
      <View style={styles.container}>
        <Image
          source={{ uri: dog }}
          style={styles.image}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  image: {
    flex: 1,
    height: undefined,
    resizeMode: 'contain',
    width: undefined,
  },
});