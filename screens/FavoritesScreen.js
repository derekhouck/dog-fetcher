import React from 'react';
import { connect } from 'react-redux';
import {
  Dimensions,
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

  state = {
    windowWidth: 0,
  };

  componentDidMount() {
    this._getDeviceWidth();
    return this.props.loadFavs();
  }

  _getDeviceWidth = () => {
    const windowWidth = Dimensions.get('window').width;
    this.setState({ windowWidth: windowWidth });
  };

  _renderThumbnail = ({ item }) => (
    <TouchableHighlight
      onPress={() => this.props.navigation.navigate('SingleFavorite', { dog: item.image })}
    >
      <Image source={{ uri: item.image }} style={{
        width: this.state.windowWidth / 3,
        height: this.state.windowWidth / 3,
        resizeMode: 'cover',
      }} />
    </TouchableHighlight>
  );

  render() {
    if (this.props.favs.length === 0) {
      return (
        <View style={styles.emptyContainer}>
          <Text>You don't have any favorite dogs saved yet.</Text>
        </View>
      );
    } else {
      const favs = this.props.favs.map((fav, i) => ({ key: `${i}`, image: fav }));
      return (
        <View
          onLayout={() => this._getDeviceWidth()}
          style={styles.container}
        >
          <FlatList
            data={favs}
            numColumns={3}
            renderItem={this._renderThumbnail}
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

const IMAGES_PER_ROW = 3;

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
  imageList: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
  },
});
