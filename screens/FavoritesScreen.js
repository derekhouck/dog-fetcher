import React from 'react';
import { connect } from 'react-redux';
import {
  FlatList,
  Image,
  StyleSheet,
  Text,
  TouchableHighlight,
  View,
} from 'react-native';
import { loadFavs } from '../actions/favorites';

export class FavoritesScreen extends React.Component {
  static navigationOptions = {
    title: 'Favorites',
  };

  componentDidMount() {
    return this.props.loadFavs();
  }

  render() {
    const favs = this.props.favs.map((fav, i) => ({ key: `${i}`, image: fav }));
    if (this.props.favs.length === 0) {
      return (
        <View style={styles.emptyContainer}>
          <Text>You don't have any favorite dogs saved yet.</Text>
        </View>
      );
    } else {
      return (
        <View style={styles.container}>
          <FlatList
            data={favs}
            renderItem={({ item }) => (
              <TouchableHighlight
                onPress={() => this.props.navigation.navigate('SingleFavorite', { dog: item.image })}
              >
                <Image source={{ uri: item.image }} style={styles.image} />
              </TouchableHighlight>
            )}
          />
        </View>
      );
    }
  }
}

const mapStateToProps = state => {
  return {
    favs: state.favs || [],
  }
};
const mapDispatchToProps = { loadFavs };

export default connect(mapStateToProps, mapDispatchToProps)(FavoritesScreen);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  emptyContainer: {
    alignItems: 'center',
    flex: 1,
    justifyContent: 'center',
  },
  image: {
    height: 80,
    resizeMode: 'cover',
    width: 100,
  },
});
