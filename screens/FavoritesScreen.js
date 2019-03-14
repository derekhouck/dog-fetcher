import React from 'react';
import { connect } from 'react-redux';
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

export class FavoritesScreen extends React.Component {
  static navigationOptions = {
    title: 'Favorites',
  };

  state = { dog: 'test' };

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
        {Array.isArray(this.props.favs) ? <Text>{this.props.favs.length}</Text> : <Text>No dog in favs store</Text>}
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

const mapStateToProps = state => {
  return {
    favs: state.favs,
  }
};

export default connect(mapStateToProps)(FavoritesScreen);

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
