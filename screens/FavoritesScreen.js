import React from 'react';
import {
  AsyncStorage,
  FlatList,
  Image,
  StyleSheet,
  Text,
  TouchableHighlight,
  View,
} from 'react-native';
import { NavigationEvents } from 'react-navigation';

export default class FavoritesScreen extends React.Component {
  static navigationOptions = {
    title: 'Favorites',
  };

  state = { dog: 'test' };

  componentDidMount() {
    this.getDog().then(() => console.log(this.state.dog));
  }

  async getDog() {
    let dog = '';
    try {
      dog = await AsyncStorage.getItem('dog') || null;
    } catch (err) {
      console.error(err);
    }
    this.setState({ dog: dog });
  }

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
    return (
      <View style={styles.container}>
        <NavigationEvents
          onDidFocus={() => this.getDog()}
        />
        {this.state.dog ? <Text>{this.state.dog}</Text> : <Text>No dog in storage</Text>}
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
