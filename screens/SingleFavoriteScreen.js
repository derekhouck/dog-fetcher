import React from 'react';
import { Image, StyleSheet, View } from 'react-native';

export default class SingleFavoriteScreen extends React.Component {
  static navigationOptions = {
    title: 'Single Favorite',
  }

  render() {
    const { navigation } = this.props;
    const dog = navigation.getParam('dog', require('../assets/images/sample-dog.jpg'));
    return (
      <View>
        <Image
          source={dog}
          style={styles.image}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  image: {
    height: 80,
    resizeMode: 'cover',
    width: 100,
  },
});