import React from 'react';
import {
  FlatList,
  Image,
  StyleSheet,
  TouchableHighlight,
  View,
} from 'react-native';

export default class FavoritesScreen extends React.Component {
  static navigationOptions = {
    title: 'Favorites',
  };

  render() {
    const dogs = [
      {
        key: 'Dog 1',
        image: require('../assets/images/dog1.jpg'),
      },
      {
        key: 'Dog 2',
        image: require('../assets/images/dog2.jpg'),
      },
      {
        key: 'Dog 3',
        image: require('../assets/images/dog3.jpg'),
      },
    ];
    const dog = require('../assets/images/sample-dog.jpg');
    return (
      <View style={styles.container}>
        <FlatList
          data={dogs}
          renderItem={({ item }) => (
            <TouchableHighlight
              onPress={() => this.props.navigation.navigate('SingleFavorite', { dog: item.image })}
            >
              <Image source={item.image} style={styles.image} />
            </TouchableHighlight>
          )}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 15,
    backgroundColor: '#fff',
  },
  image: {
    height: 80,
    resizeMode: 'cover',
    width: 100,
  },
});
