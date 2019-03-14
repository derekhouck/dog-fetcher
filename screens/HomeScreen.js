import React from 'react';
import { connect } from 'react-redux';
import {
  Image,
  Platform,
  StyleSheet,
  TouchableOpacity,
  View,
} from 'react-native';
import {
  Button,
  Icon,
} from 'react-native-elements';
import { addFav, loadFavs, removeFav, saveFavs } from '../actions/favorites';

export class HomeScreen extends React.Component {
  static navigationOptions = {
    title: 'Dog Fetcher',
  };

  state = {
    isFav: false,
    isLoading: true
  }

  componentDidMount() {
    return this.props.loadFavs()
      .then(this.fetchDog());
  }

  fetchDog() {
    this.setState({ isFav: false, isLoading: true });
    return fetch('https://dog.ceo/api/breeds/image/random')
      .then(res => res.json())
      .then(res => this.setState({ isLoading: false, dog: res.message }))
      .catch(err => console.error(err));
  }

  async saveDog(dog) {
    this.props.addFav(dog);
    this.setState({ isFav: true });
    return this.props.saveFavs();
  }

  async removeDog(dog) {
    this.props.removeFav(dog);
    this.setState({ isFav: false })
    return this.props.saveFavs();
  }

  styleStar() {
    const prefix = Platform.OS === 'ios' ? 'ios' : 'md';
    return this.state.isFav ? `${prefix}-star` : `${prefix}-star-outline`;
  }

  render() {
    return (
      <View style={styles.container}>
        <Image
          source={{ uri: this.state.dog }}
          style={styles.dogImage}
        />
        <View style={styles.buttonContainer}>
          <View style={styles.favoriteButton}>
            <TouchableOpacity
              onPress={() => this.state.isFav ? this.removeDog(this.state.dog) : this.saveDog(this.state.dog)}
            >
              <Icon
                color='gold'
                name={this.styleStar()}
                size={64}
                type='ionicon'
              />
            </TouchableOpacity>
          </View>
          <Button
            onPress={() => this.fetchDog()}
            raised
            buttonStyle={styles.button}
            title="Fetch new dog"
            loading={this.state.isLoading ? true : false}
          />
        </View>
      </View>
    );
  }
}

const mapStateToProps = state => {
  return {
    favs: state.favs,
  }
};
const mapDispatchToProps = { addFav, loadFavs, removeFav, saveFavs };

export default connect(mapStateToProps, mapDispatchToProps)(HomeScreen);

const styles = StyleSheet.create({
  button: {
    height: 50,
    width: 200,
  },
  buttonContainer: {
    alignItems: 'flex-end',
    bottom: 0,
    flexDirection: 'row',
    justifyContent: 'center',
    left: 0,
    padding: 20,
    position: 'absolute',
    right: 0,
    top: 0,
  },
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  dogImage: {
    flex: 1,
    height: undefined,
    resizeMode: 'cover',
    width: undefined,
  },
  favoriteButton: {
    position: 'absolute',
    right: 20,
    bottom: 10,
  },
  loading: {
    alignItems: 'center',
    flex: 1,
    justifyContent: 'center',
    padding: 20,
  },
});